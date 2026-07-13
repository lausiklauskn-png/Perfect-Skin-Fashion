# BRIEF für die nächste Sitzung — Perfect Skin Fashion

**Stand: 2026-07-13.** Zweck: Die nächste Sitzung liest diesen Brief, kennt damit den vollen
Stand und **nimmt dann Klaus' nächste Aufgaben entgegen**. Nicht ungefragt drauflosbauen — erst
Überblick, dann auf Klaus' Wort.

---

## Was live ist (alles gemergt auf `main`, GitHub Pages)

**Live-URLs:**
- Shop: `https://lausiklauskn-png.github.io/Perfect-Skin-Fashion/`
- Beauty (Schwester-Repo): `https://lausiklauskn-png.github.io/Perfect-Skin-Beauty/`

**Seiten im Fashion-Repo:**
- `index.html` — **Shop-Startseite.** Regenbogen-Intro + -Rahmen, bewegter Hintergrund, 3D-Buttons,
  **8 Farb-Themes** (Crème/Mokka/Neon/Pastell/Mono/Holo/Sunset/Aqua), **4 Sprachen** (DE/EN/RU/ES),
  Produkt-Grid (Filter, Hover-Zoom, Farb-/Größenwahl), Warenkorb-Drawer, Produkt-Modal,
  **Vollbild-Lightbox** (Klick aufs Modal-Bild), **Drag & Drop Bild** auf Produktkarte (lokale
  Vorschau), Video/Social-Reels-Teaser, Kontakt, **Footer** mit Beauty-Logo-Link + „Zum
  Warenwirtschaftssystem"-Button, Nav-Link „Video-Shop". Logo mit Hover-Vergrößerung.
- `video-shop.html` — **video-basierter Shop.** **Hologramm-Look** (irisierender Rahmen + drehende
  Scheibe), **Schrift-Wahl V1–V5** (Editorial/Grotesk/Serif/Mono/Bold), 8 Themes, Karten im
  9:16-Format (Hover-Play), **Farbe = anderes Video**, **Drag & Drop Bild + Video**,
  **Vollbild-Lightbox**, Detail-Modal (Größe + In-den-Warenkorb + Creator-Credit/Link).
- `design-studio.html` — **eigenes Design** (Motiv-Upload, Text, Muster-Presets, Live-Vorschau,
  ziehen/skalieren/drehen, in den Warenkorb).
- `warehouse.html` — **Warenwirtschaft (intern).** Artikelstamm (IndexedDB `psf_warehouse`),
  Wareneingang/-ausgang per **Barcode-Scan** (BarcodeDetector) oder manuell, Journal, Import/Export,
  **Shop-Tab** (Artikel freigeben → `products.json`/localStorage veröffentlichen → erscheint im
  Shop). **KI:** `🔑 KI` (Anbieter Claude ODER Mistral EU, BYOK, optional PIN-verschlüsselt),
  `✨ KI-Vorschlag` (Name/Kategorie/Farbe/Größe/Emoji/Preis aus Stichworten),
  `📸 KI-Produktbild` (OpenAI `gpt-image-1`, Foto/Beschreibung → Modell, Stil Streetwear/Elegant).
- `impressum.html` — Impressum/Datenschutz/AGB/Versand (Daten von der Beauty-Seite).
- `assets/ai/aiclient.js` — KI-Client (Text: Claude/Mistral; Bild: OpenAI). Fail-soft, verschlüsselter Schlüssel.
- `docs/BILD_PROMPTS.md` — fertige KI-Bild-Prompts.

**Beauty-Repo:** neues Favicon/App-Icon + Logo im Header (statt „PSB") + Logo-Hover-Vergrößerung.

---

## Ehrlicher Stand / was NOCH offen ist

- **Alle KI-Funktionen brauchen Klaus' eigene Schlüssel** (Claude/Mistral für Text, OpenAI für Bild).
  Der Live-KI-Lauf + Browser-Sichttest am Tablet stehen aus — Logik ist per Node-Test bewiesen.
- **Produkte, Videos, Social sind Platzhalter** — echte Fotos/Clips fehlen noch.
- **Kasse/Bezahlung ist bewusst aus** (Probephase). Für echten Verkauf fehlt ein Checkout.
- **Schriften V1–V5** sind aus selbst gehosteten + System-Schriften gebaut (echte Google-Fonts
  blockiert der Proxy). Wenn Klaus konkrete Fashion-Fonts schickt (woff2), als Variante einbauen.
- **Drag & Drop = lokale Vorschau** (Objekt-URL). Für ALLE Besucher muss die Datei ins Repo.
- `products.json` ist (noch) nicht committet → beim Laden ein harmloser 404 (fail-soft, gewollt).

---

## Mögliche nächste Bauvorhaben / Design-Ideen (Klaus entscheidet, Reihenfolge frei)

- **E.4 — 1-Klick-Upload ins Repo:** Bilder/Videos + `products.json` direkt vom Tablet ins Repo
  veröffentlichen (GitHub-API + verschlüsselt gespeicherter Token) — kein Server nötig. Macht
  „Drag & Drop / KI-Bild → für alle live" mit einem Klick.
- **E.3 — Shoppable Video-Produktdetail:** Galerie aus automatisch geschnittenen Video-Standbildern
  + großes Video, Detail wie bei Amazon (Frame-Extraktion aus repo-lokalen MP4s).
- **Echte Medien einbauen:** Klaus' Fotos/Clips ins Repo, Farbe ↔ Bild/Video fest verknüpfen.
- **Phase C** KI-Preisvorschlag (eigener Knopf), **Phase D** Freigabe-Liste mit Claude gegengeprüft
  + Druck, **Phase G** Produkttexte + 4-Sprachen-Übersetzung automatisch, **Phase H** Buchhaltungs-
  Brücke zu BookLedgerPro (`?uebernahme=<base64url>`).
- **Design-Feinschliff:** echte Hero-Bilder, echte Reels-Feeds, ggf. weitere Themes/Fonts.
- **Video-KI-Anbindung:** Prompt-Bau + Brücke zu einem Video-Dienst (WearView/Higgsfield/Kling)
  bzw. echte Creator-Clips (UGC) — siehe Chat-Recherche.
- **Später/größer:** Checkout + Bezahlung (echter Verkauf), eigener Musik-Loop zu den Clips.

---

## Setup & Konventionen für die nächste Sitzung

- **Branch:** `claude/perfect-skin-fashion-shop-f0frw5`. **Immer frisch von `origin/main` abzweigen**
  (`git fetch origin main && git checkout -B <branch> origin/main`); Force-with-lease ok, da der
  Branch nur bereits gemergte Historie trägt.
- **Offline-first, keine CDNs, fail-soft, kein PII** (außer Warendaten, die kein PII sind).
- **Testen:** `python3 -m http.server` für Sichttest; **Playwright vorhanden**
  (`playwright-core` im Scratchpad, Chromium unter `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`)
  für Browser-Smoke + Screenshots; `node --check` für JS. **Klaus' Browser-Sichttest am Tablet ist
  der finale Beweis** — vorher „ungeprüft, wartet auf Klaus" schreiben. Nach jedem Deploy **Hard-Reload**.
- **Selbst-Merge-Freibrief gilt** (getestet, abgegrenzt, nicht zweifelhaft → selbst mergen).
- **ffmpeg** (`/opt/pw-browsers/ffmpeg-1011/ffmpeg-linux`) ist ein Playwright-Spezialbuild und taugt
  NICHT zum Encodieren — für Test-Videos anderen Weg nehmen oder Layout ohne echtes Video prüfen.

---

## Abschluss-Befehl (Kette reißt nie ab)

Am Ende der nächsten Sitzung: `PULS`/Stand fortschreiben, **neuen Brief** für die Folge-Sitzung
schreiben (diese Pflichtlektüre + diesen Abschluss-Befehl wiederholen), vollständig **als Codeblock
im Chat** ausgeben. **Diese Sitzung endet damit, dass die nächste Sitzung Klaus' neue Aufgaben
entgegennimmt.**
