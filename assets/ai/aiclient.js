/* ===================================================================
   Perfect Skin Fashion — KI-Client (Phase B)
   Anbieter-abstrahiert (Claude / Mistral EU), BYOK, fail-soft.
   Schlüssel wird optional PIN-verschlüsselt gespeichert (PBKDF2-SHA256
   600k + AES-GCM-256, Modul-20-Muster) — nie im Klartext, außer der
   Nutzer wählt ausdrücklich „ohne PIN" (wie in den Schwester-Apps).
   Warendaten sind kein PII → unkritisch. Kein Schlüssel im Code.
   =================================================================== */
window.PSFAi = (function () {
  "use strict";
  const LS_BLOB = "psf_ai_cfg";   // Konfig (verschlüsselt ODER plain)
  const LS_META = "psf_ai_meta";  // {mode:'pin'|'plain', provider, model}
  let mem = null;                 // {provider,key,model} im RAM, wenn entsperrt

  const te = new TextEncoder(), td = new TextDecoder();
  const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
  const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

  async function deriveKey(pin, salt) {
    const base = await crypto.subtle.importKey("raw", te.encode(pin), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt, iterations: 600000, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  }

  function meta() { try { return JSON.parse(localStorage.getItem(LS_META) || "null"); } catch (e) { return null; } }
  function isConfigured() { return !!localStorage.getItem(LS_BLOB); }
  function needsPin() { const m = meta(); return !!(m && m.mode === "pin"); }
  function isReady() { return !!(mem && mem.key); }
  function provider() { return (mem && mem.provider) || (meta() && meta().provider) || "claude"; }

  async function save({ provider, key, model, imageKey, pin }) {
    const payload = { provider, key, model: model || "", imageKey: imageKey || "" };
    const m = { mode: pin ? "pin" : "plain", provider, model: model || "", hasImage: !!imageKey };
    if (pin) {
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const ck = await deriveKey(pin, salt);
      const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, ck, te.encode(JSON.stringify(payload)));
      localStorage.setItem(LS_BLOB, JSON.stringify({ v: 1, salt: b64(salt), iv: b64(iv), ct: b64(ct) }));
    } else {
      localStorage.setItem(LS_BLOB, JSON.stringify({ v: 1, plain: payload }));
    }
    localStorage.setItem(LS_META, JSON.stringify(m));
    mem = payload;
    return true;
  }

  async function unlock(pin) {
    const raw = localStorage.getItem(LS_BLOB); if (!raw) return false;
    const o = JSON.parse(raw);
    if (o.plain) { mem = o.plain; return true; }
    try {
      const ck = await deriveKey(pin, unb64(o.salt));
      const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(o.iv) }, ck, unb64(o.ct));
      mem = JSON.parse(td.decode(pt)); return true;
    } catch (e) { return false; }
  }

  // Plaintext-Konfig automatisch in den RAM laden (kein PIN nötig)
  function loadIfPlain() {
    if (mem) return true;
    const raw = localStorage.getItem(LS_BLOB); if (!raw) return false;
    try { const o = JSON.parse(raw); if (o.plain) { mem = o.plain; return true; } } catch (e) {}
    return false;
  }
  function lock() { mem = null; }
  function clear() { localStorage.removeItem(LS_BLOB); localStorage.removeItem(LS_META); mem = null; }

  /* ---------------- Anbieter ---------------- */
  const PROVIDERS = {
    claude: {
      label: "Claude (Anthropic)", region: "us", defaultModel: "claude-haiku-4-5-20251001",
      async call({ key, model, system, user }) {
        const r = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json", "anthropic-dangerous-direct-browser-access": "true" },
          body: JSON.stringify({ model: model || this.defaultModel, max_tokens: 700, system, messages: [{ role: "user", content: user }] }),
        });
        if (!r.ok) throw new Error("HTTP " + r.status);
        const d = await r.json();
        return (d.content && d.content[0] && d.content[0].text) || "";
      },
    },
    mistral: {
      label: "Mistral (EU)", region: "eu", defaultModel: "mistral-small-latest",
      async call({ key, model, system, user }) {
        const r = await fetch("https://api.mistral.ai/v1/chat/completions", {
          method: "POST",
          headers: { Authorization: "Bearer " + key, "content-type": "application/json" },
          body: JSON.stringify({ model: model || this.defaultModel, max_tokens: 700, messages: [{ role: "system", content: system }, { role: "user", content: user }] }),
        });
        if (!r.ok) throw new Error("HTTP " + r.status);
        const d = await r.json();
        return (d.choices && d.choices[0] && d.choices[0].message.content) || "";
      },
    },
  };

  /* ---------------- Artikel-Vorschlag ---------------- */
  const CATS = ["Damen", "Herren", "Bademode", "Accessoires", "Eigen-Design"];
  function buildPrompt(hint, sku) {
    const system =
      "Du bist Einkaufs- und Katalog-Assistent für „Perfect Skin Fashion“, einen Shop für hochwertige, " +
      "junge italienische Mode in Hamburg. Aus einer kurzen Beschreibung machst du EINEN fertigen " +
      "Artikel-Vorschlag. Antworte AUSSCHLIESSLICH als kompaktes JSON-Objekt, ohne Erklärung, ohne " +
      "Code-Zaun. Schema: {\"name\":string (kurzer, italienisch angehauchter Produktname), " +
      "\"cat\":one of " + JSON.stringify(CATS) + ", \"color\":string (deutsche Farbe), " +
      "\"size\":string (typische Größen wie \"S/M/L\" oder \"Uni\"), \"emoji\":string (ein Emoji), " +
      "\"vk\":number (empfohlener Verkaufspreis in EUR, realistisch für hochwertige Ware), " +
      "\"desc\":string (ein knapper Verkaufssatz auf Deutsch)}.";
    const user = "Beschreibung: " + (hint || "(keine)") + (sku ? "\nSKU/Barcode: " + sku : "");
    return { system, user };
  }
  function parse(txt) {
    const m = String(txt).match(/\{[\s\S]*\}/);
    if (!m) throw new Error("parse");
    const o = JSON.parse(m[0]);
    return {
      name: String(o.name || "").slice(0, 80),
      cat: CATS.includes(o.cat) ? o.cat : "Damen",
      color: String(o.color || "").slice(0, 40),
      size: String(o.size || "").slice(0, 40),
      emoji: String(o.emoji || "").slice(0, 3),
      vk: Number(o.vk) || 0,
      desc: String(o.desc || "").slice(0, 160),
    };
  }
  async function suggestArticle({ hint, sku }) {
    if (!isReady() && !loadIfPlain()) throw new Error("locked");
    const p = PROVIDERS[mem.provider] || PROVIDERS.claude;
    const { system, user } = buildPrompt(hint, sku);
    const txt = await p.call({ key: mem.key, model: mem.model, system, user });
    return parse(txt);
  }

  /* ---------------- Bild-Erzeugung (Phase E) ----------------
     OpenAI gpt-image-1 (Bilder = kein PII → unkritisch). Eigener Schlüssel.
     Zwei Wege: reiner Text→Bild (generations) ODER Referenzfoto veredeln (edits). */
  function hasImageKey() { if (!mem) loadIfPlain(); return !!(mem && mem.imageKey); }

  const STYLE_PRESETS = {
    streetwear: {
      label: "Grafik-Streetwear (Hamburg)",
      text: "editorial streetwear lookbook photo, young model wearing the garment, oversized modern fit, bold graphic energy, casual confident pose, urban Hamburg backdrop (brick warehouses, harbour, modern architecture), natural daylight, shot on a phone, authentic candid vibe, high quality, realistic",
    },
    elegant: {
      label: "Elegant-modern (Milano)",
      text: "clean elegant fashion editorial photo, young model wearing the garment, refined modern Italian styling, soft studio-daylight, minimal premium backdrop, tasteful confident pose, high quality, realistic",
    },
  };
  const IMG_NEGATIVE = "no visible brand logos, no text watermark, no distorted hands, realistic proportions";

  function buildImagePrompt(article, styleKey) {
    const st = STYLE_PRESETS[styleKey] || STYLE_PRESETS.streetwear;
    const parts = [];
    if (article) {
      if (article.name) parts.push(article.name);
      if (article.color) parts.push("colour " + article.color);
      if (article.cat) parts.push("category " + article.cat);
    }
    const subject = parts.length ? parts.join(", ") : "a modern fashion garment";
    return `Product fashion photo of ${subject}. ${st.text}. Portrait orientation. ${IMG_NEGATIVE}.`;
  }

  // dataURL "data:image/png;base64,..." -> Blob (für multipart edits)
  function dataUrlToBlob(dataUrl) {
    const [head, b64d] = dataUrl.split(","); const mime = (head.match(/data:(.*?);/) || [])[1] || "image/png";
    const bin = atob(b64d); const u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return new Blob([u8], { type: mime });
  }

  async function generateProductImage({ article, styleKey, refDataUrl, size }) {
    if (!hasImageKey()) throw new Error("noImageKey");
    const key = mem.imageKey;
    const prompt = buildImagePrompt(article, styleKey);
    const dim = size || "1024x1536"; // Hochformat, passt zu 2:3 Produktkarten
    let r;
    if (refDataUrl) {
      const fd = new FormData();
      fd.append("model", "gpt-image-1");
      fd.append("prompt", prompt);
      fd.append("size", dim);
      fd.append("image", dataUrlToBlob(refDataUrl), "ref.png");
      r = await fetch("https://api.openai.com/v1/images/edits", { method: "POST", headers: { Authorization: "Bearer " + key }, body: fd });
    } else {
      r = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: { Authorization: "Bearer " + key, "content-type": "application/json" },
        body: JSON.stringify({ model: "gpt-image-1", prompt, size: dim, n: 1 }),
      });
    }
    if (!r.ok) { let msg = "HTTP " + r.status; try { const e = await r.json(); if (e.error && e.error.message) msg += " – " + e.error.message; } catch (x) {} throw new Error(msg); }
    const d = await r.json();
    const b64d = d.data && d.data[0] && d.data[0].b64_json;
    if (!b64d) throw new Error("noImage");
    return "data:image/png;base64," + b64d;
  }

  return { PROVIDERS, CATS, save, unlock, lock, clear, isConfigured, needsPin, isReady, loadIfPlain, meta, provider,
    buildPrompt, parse, suggestArticle, hasImageKey, STYLE_PRESETS, buildImagePrompt, generateProductImage };
})();
