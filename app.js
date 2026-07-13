/* ===================================================================
   Perfect Skin Fashion — app.js
   Sprache (DE/EN/RU/ES), Themes, Produkte, Warenkorb, Produkt-Modal,
   Video/Social-Vorschau, Intro + Regenbogen-Rahmen.
   Alles clientseitig, offline-fähig, keine externen Abhängigkeiten.
   =================================================================== */
(function () {
  "use strict";

  /* ---------------- I18N ---------------- */
  const I18N = {
    de: {
      dir: "ltr",
      nav_new: "Neu", nav_women: "Damen", nav_men: "Herren", nav_design: "Eigenes Design",
      nav_reels: "Videos", nav_contact: "Kontakt",
      hero_eyebrow: "Neu in Hamburg · Made in Italy",
      hero_title_a: "Mode, die es hier", hero_title_em: "so noch nicht gibt.",
      hero_text: "Hochwertige, junge Bekleidung – in Italien handverlesen. Fresh, modern, limitiert. Und wenn du willst: mit deinem ganz eigenen Design.",
      hero_shop: "Kollektion ansehen", hero_design: "Selbst gestalten",
      stat_new: "neue Teile / Woche", stat_it: "Einkauf in Italien", stat_ship: "Versand DE",
      ticker: "Neu eingetroffen · Made in Italy · Limitierte Stücke · Eigenes Design · Kostenloser Versand ab 79€",
      new_title: "Frisch eingetroffen", new_sub: "Die neuesten Teile aus unserem Italien-Einkauf – solange der Vorrat reicht.",
      f_all: "Alles", f_women: "Damen", f_men: "Herren", f_swim: "Bademode", f_acc: "Accessoires", f_design: "Eigenes Design",
      studio_eyebrow: "Design-Studio", studio_title: "Trag dein eigenes Design.",
      studio_text: "Wähle ein Teil, lade dein Motiv hoch oder gestalte ein Muster – Vorschau in Echtzeit, hochwertig bedruckt. Kein plumper Standard-Druck, sondern dein Stil.",
      studio_cta: "Zum Design-Studio",
      reels_eyebrow: "Video & Social", reels_title: "Was gibt es Neues?",
      reels_sub: "Kurze Clips zu den neuesten Teilen – automatisch aus unseren Kanälen. Tippen zum Ansehen.",
      reels_live: "LIVE", reels_new: "NEU",
      social_follow: "Folge uns für neue Drops",
      usp_title: "Warum Perfect Skin Fashion",
      usp1_t: "Italien-Einkauf", usp1_x: "Handverlesen, hochwertig, in Hamburg noch nicht zu haben.",
      usp2_t: "Limitiert", usp2_x: "Kleine Mengen, häufige Wechsel – du trägst nicht, was alle tragen.",
      usp3_t: "Eigenes Design", usp3_x: "Bedruck dein Teil mit eigenem Motiv oder Muster.",
      usp4_t: "Schnell & sicher", usp4_x: "Versand innerhalb DE, sichere Bezahlung, faire Rückgabe.",
      news_title: "Kein Drop verpassen", news_text: "Neue Teile zuerst sehen – trag dich ein.",
      news_ph: "Deine E-Mail", news_btn: "Anmelden", news_ok: "Danke! Du bist dabei.",
      contact_title: "Kontakt & Laden", contact_sub: "Perfect Skin – Beauty & Fashion, Hamburg.",
      co_addr: "Adresse", co_phone: "Telefon", co_mail: "E-Mail", co_route: "Route planen →",
      add_cart: "In den Warenkorb", added: "Zum Warenkorb hinzugefügt",
      quick: "Schnellansicht", choose_size: "Bitte Größe wählen", pick_size: "Größe", pick_color: "Farbe",
      cart_title: "Warenkorb", cart_empty: "Dein Warenkorb ist leer.", cart_total: "Summe",
      checkout: "Zur Kasse", checkout_soon: "Kasse folgt in Kürze (Probephase).",
      remove: "entfernen", size_lbl: "Gr.",
      ft_shop: "Shop", ft_service: "Service", ft_legal: "Rechtliches",
      ft_impressum: "Impressum", ft_privacy: "Datenschutz", ft_agb: "AGB", ft_returns: "Versand & Rückgabe",
      ft_copy: "© 2026 Perfect Skin Fashion · Hamburg. Alle Rechte vorbehalten.",
      badge_new: "NEU", badge_sale: "SALE", badge_limited: "LIMITIERT",
      warehouse: "Warenwirtschaft (intern)",
      intro_sub: "Beauty · Fashion · Hamburg",
    },
    en: {
      dir: "ltr",
      nav_new: "New", nav_women: "Women", nav_men: "Men", nav_design: "Custom Design",
      nav_reels: "Videos", nav_contact: "Contact",
      hero_eyebrow: "New in Hamburg · Made in Italy",
      hero_title_a: "Fashion you", hero_title_em: "won't find here yet.",
      hero_text: "High-quality young fashion – hand-picked in Italy. Fresh, modern, limited. And if you like: printed with your very own design.",
      hero_shop: "View collection", hero_design: "Design your own",
      stat_new: "new pieces / week", stat_it: "sourced in Italy", stat_ship: "shipping DE",
      ticker: "Just arrived · Made in Italy · Limited pieces · Custom design · Free shipping over 79€",
      new_title: "Just arrived", new_sub: "The latest pieces from our Italy sourcing – while stocks last.",
      f_all: "All", f_women: "Women", f_men: "Men", f_swim: "Swimwear", f_acc: "Accessories", f_design: "Custom",
      studio_eyebrow: "Design Studio", studio_title: "Wear your own design.",
      studio_text: "Pick a piece, upload your artwork or build a pattern – real-time preview, premium print. Not a plain print, but your style.",
      studio_cta: "Open Design Studio",
      reels_eyebrow: "Video & Social", reels_title: "What's new?",
      reels_sub: "Short clips of the latest pieces – auto-synced from our channels. Tap to watch.",
      reels_live: "LIVE", reels_new: "NEW",
      social_follow: "Follow us for new drops",
      usp_title: "Why Perfect Skin Fashion",
      usp1_t: "Sourced in Italy", usp1_x: "Hand-picked, premium, not yet available in Hamburg.",
      usp2_t: "Limited", usp2_x: "Small runs, frequent changes – you won't wear what everyone wears.",
      usp3_t: "Custom design", usp3_x: "Print your piece with your own artwork or pattern.",
      usp4_t: "Fast & safe", usp4_x: "Shipping within Germany, secure payment, fair returns.",
      news_title: "Never miss a drop", news_text: "See new pieces first – sign up.",
      news_ph: "Your e-mail", news_btn: "Sign up", news_ok: "Thanks! You're in.",
      contact_title: "Contact & Store", contact_sub: "Perfect Skin – Beauty & Fashion, Hamburg.",
      co_addr: "Address", co_phone: "Phone", co_mail: "E-mail", co_route: "Get directions →",
      add_cart: "Add to cart", added: "Added to cart",
      quick: "Quick view", choose_size: "Please choose a size", pick_size: "Size", pick_color: "Color",
      cart_title: "Cart", cart_empty: "Your cart is empty.", cart_total: "Total",
      checkout: "Checkout", checkout_soon: "Checkout coming soon (trial phase).",
      remove: "remove", size_lbl: "Sz.",
      ft_shop: "Shop", ft_service: "Service", ft_legal: "Legal",
      ft_impressum: "Imprint", ft_privacy: "Privacy", ft_agb: "Terms", ft_returns: "Shipping & Returns",
      ft_copy: "© 2026 Perfect Skin Fashion · Hamburg. All rights reserved.",
      badge_new: "NEW", badge_sale: "SALE", badge_limited: "LIMITED",
      warehouse: "Inventory (internal)",
      intro_sub: "Beauty · Fashion · Hamburg",
    },
    ru: {
      dir: "ltr",
      nav_new: "Новинки", nav_women: "Женщины", nav_men: "Мужчины", nav_design: "Свой дизайн",
      nav_reels: "Видео", nav_contact: "Контакты",
      hero_eyebrow: "Новинка в Гамбурге · Made in Italy",
      hero_title_a: "Мода, которой здесь", hero_title_em: "ещё нет.",
      hero_text: "Качественная молодёжная одежда – отобрана вручную в Италии. Свежо, модно, лимитированно. А хочешь – с твоим собственным дизайном.",
      hero_shop: "Смотреть коллекцию", hero_design: "Создать свой дизайн",
      stat_new: "новинок / неделю", stat_it: "закупка в Италии", stat_ship: "доставка по DE",
      ticker: "Только что поступило · Made in Italy · Лимитированные вещи · Свой дизайн · Бесплатная доставка от 79€",
      new_title: "Только поступило", new_sub: "Свежие вещи из нашей итальянской закупки – пока есть в наличии.",
      f_all: "Всё", f_women: "Женщины", f_men: "Мужчины", f_swim: "Пляж", f_acc: "Аксессуары", f_design: "Свой дизайн",
      studio_eyebrow: "Дизайн-студия", studio_title: "Носи свой дизайн.",
      studio_text: "Выбери вещь, загрузи макет или собери узор – предпросмотр в реальном времени, премиум-печать. Не банальный принт, а твой стиль.",
      studio_cta: "Открыть студию",
      reels_eyebrow: "Видео и соцсети", reels_title: "Что нового?",
      reels_sub: "Короткие ролики о новинках – автоматически из наших каналов. Нажми, чтобы посмотреть.",
      reels_live: "LIVE", reels_new: "НОВОЕ",
      social_follow: "Подпишись на новые дропы",
      usp_title: "Почему Perfect Skin Fashion",
      usp1_t: "Закупка в Италии", usp1_x: "Отобрано вручную, премиум, в Гамбурге ещё не найти.",
      usp2_t: "Лимитировано", usp2_x: "Малые партии, частая смена – не как у всех.",
      usp3_t: "Свой дизайн", usp3_x: "Напечатай вещь со своим макетом или узором.",
      usp4_t: "Быстро и надёжно", usp4_x: "Доставка по Германии, безопасная оплата, честный возврат.",
      news_title: "Не пропусти дроп", news_text: "Смотри новинки первым – подпишись.",
      news_ph: "Твой e-mail", news_btn: "Подписаться", news_ok: "Спасибо! Вы подписаны.",
      contact_title: "Контакты и магазин", contact_sub: "Perfect Skin – Beauty & Fashion, Гамбург.",
      co_addr: "Адрес", co_phone: "Телефон", co_mail: "E-mail", co_route: "Проложить маршрут →",
      add_cart: "В корзину", added: "Добавлено в корзину",
      quick: "Быстрый просмотр", choose_size: "Выберите размер", pick_size: "Размер", pick_color: "Цвет",
      cart_title: "Корзина", cart_empty: "Ваша корзина пуста.", cart_total: "Итого",
      checkout: "Оформить", checkout_soon: "Оформление скоро (тестовая фаза).",
      remove: "удалить", size_lbl: "Р.",
      ft_shop: "Магазин", ft_service: "Сервис", ft_legal: "Правовое",
      ft_impressum: "Импрессум", ft_privacy: "Конфиденциальность", ft_agb: "Условия", ft_returns: "Доставка и возврат",
      ft_copy: "© 2026 Perfect Skin Fashion · Гамбург. Все права защищены.",
      badge_new: "НОВОЕ", badge_sale: "SALE", badge_limited: "ЛИМИТ",
      warehouse: "Склад (внутр.)",
      intro_sub: "Beauty · Fashion · Гамбург",
    },
    es: {
      dir: "ltr",
      nav_new: "Nuevo", nav_women: "Mujer", nav_men: "Hombre", nav_design: "Diseño propio",
      nav_reels: "Vídeos", nav_contact: "Contacto",
      hero_eyebrow: "Novedad en Hamburgo · Made in Italy",
      hero_title_a: "Moda que aquí", hero_title_em: "aún no existe.",
      hero_text: "Ropa joven de alta calidad – elegida a mano en Italia. Fresca, moderna, limitada. Y si quieres: con tu propio diseño impreso.",
      hero_shop: "Ver colección", hero_design: "Diseña el tuyo",
      stat_new: "piezas nuevas / semana", stat_it: "compra en Italia", stat_ship: "envío DE",
      ticker: "Recién llegado · Made in Italy · Piezas limitadas · Diseño propio · Envío gratis desde 79€",
      new_title: "Recién llegado", new_sub: "Las últimas piezas de nuestra compra en Italia – hasta agotar existencias.",
      f_all: "Todo", f_women: "Mujer", f_men: "Hombre", f_swim: "Baño", f_acc: "Accesorios", f_design: "Diseño",
      studio_eyebrow: "Estudio de diseño", studio_title: "Lleva tu propio diseño.",
      studio_text: "Elige una prenda, sube tu arte o crea un patrón – vista previa en tiempo real, impresión premium. No un estampado simple, sino tu estilo.",
      studio_cta: "Abrir el estudio",
      reels_eyebrow: "Vídeo y social", reels_title: "¿Qué hay de nuevo?",
      reels_sub: "Clips cortos de las últimas piezas – sincronizado desde nuestros canales. Toca para ver.",
      reels_live: "LIVE", reels_new: "NUEVO",
      social_follow: "Síguenos para nuevos drops",
      usp_title: "Por qué Perfect Skin Fashion",
      usp1_t: "Compra en Italia", usp1_x: "Elegido a mano, premium, aún no disponible en Hamburgo.",
      usp2_t: "Limitado", usp2_x: "Series pequeñas, cambios frecuentes – no llevas lo que lleva todo el mundo.",
      usp3_t: "Diseño propio", usp3_x: "Imprime tu prenda con tu arte o patrón.",
      usp4_t: "Rápido y seguro", usp4_x: "Envío en Alemania, pago seguro, devolución justa.",
      news_title: "No te pierdas ningún drop", news_text: "Ve las novedades primero – suscríbete.",
      news_ph: "Tu e-mail", news_btn: "Suscribirse", news_ok: "¡Gracias! Ya estás dentro.",
      contact_title: "Contacto y tienda", contact_sub: "Perfect Skin – Beauty & Fashion, Hamburgo.",
      co_addr: "Dirección", co_phone: "Teléfono", co_mail: "E-mail", co_route: "Cómo llegar →",
      add_cart: "Añadir al carrito", added: "Añadido al carrito",
      quick: "Vista rápida", choose_size: "Elige una talla", pick_size: "Talla", pick_color: "Color",
      cart_title: "Carrito", cart_empty: "Tu carrito está vacío.", cart_total: "Total",
      checkout: "Finalizar compra", checkout_soon: "Pago disponible pronto (fase de prueba).",
      remove: "quitar", size_lbl: "Ta.",
      ft_shop: "Tienda", ft_service: "Servicio", ft_legal: "Legal",
      ft_impressum: "Aviso legal", ft_privacy: "Privacidad", ft_agb: "Términos", ft_returns: "Envío y devolución",
      ft_copy: "© 2026 Perfect Skin Fashion · Hamburgo. Todos los derechos reservados.",
      badge_new: "NUEVO", badge_sale: "SALE", badge_limited: "LIMITADO",
      warehouse: "Almacén (interno)",
      intro_sub: "Beauty · Fashion · Hamburgo",
    },
  };

  /* ---------------- PRODUKTDATEN ----------------
     Bilder sind Platzhalter (SVG-Gradient mit Namen). Sobald echte Fotos
     vorliegen: img-Pfad in `img` je Farbe eintragen -> siehe docs/BILD_PROMPTS.md.
     name: {de,en,ru,es} | cat | price | old | badge | sizes[] | colors[]      */
  const COLORS = {
    schwarz: "#1c1c1c", weiss: "#f4f2ee", creme: "#e8ddcb", camel: "#c39a6b",
    terracotta: "#c46a4a", oliv: "#6f7350", salbei: "#9bb08c", himmel: "#8fbce0",
    kobalt: "#2f5fd0", pink: "#ff5c9d", koralle: "#ff6f61", bordeaux: "#6d2233",
    lavendel: "#b7a6e0", denim: "#3f5c78", sand: "#d8c3a0", gold: "#caa24a",
  };
  const cname = { // Farbnamen mehrsprachig (Kurz)
    schwarz:{de:"Schwarz",en:"Black",ru:"Чёрный",es:"Negro"},
    weiss:{de:"Weiß",en:"White",ru:"Белый",es:"Blanco"},
    creme:{de:"Creme",en:"Cream",ru:"Крем",es:"Crema"},
    camel:{de:"Camel",en:"Camel",ru:"Кэмел",es:"Camel"},
    terracotta:{de:"Terrakotta",en:"Terracotta",ru:"Терракота",es:"Terracota"},
    oliv:{de:"Oliv",en:"Olive",ru:"Оливковый",es:"Oliva"},
    salbei:{de:"Salbei",en:"Sage",ru:"Шалфей",es:"Salvia"},
    himmel:{de:"Himmelblau",en:"Sky",ru:"Небесный",es:"Cielo"},
    kobalt:{de:"Kobalt",en:"Cobalt",ru:"Кобальт",es:"Cobalto"},
    pink:{de:"Pink",en:"Pink",ru:"Розовый",es:"Rosa"},
    koralle:{de:"Koralle",en:"Coral",ru:"Коралл",es:"Coral"},
    bordeaux:{de:"Bordeaux",en:"Bordeaux",ru:"Бордо",es:"Burdeos"},
    lavendel:{de:"Lavendel",en:"Lavender",ru:"Лаванда",es:"Lavanda"},
    denim:{de:"Denim",en:"Denim",ru:"Деним",es:"Denim"},
    sand:{de:"Sand",en:"Sand",ru:"Песок",es:"Arena"},
    gold:{de:"Gold",en:"Gold",ru:"Золото",es:"Oro"},
  };

  const PRODUCTS = [
    { id:"blz01", cat:"women", price:129, old:159, badge:"limited",
      name:{de:"Blazer Oversize Milano",en:"Oversize Blazer Milano",ru:"Оверсайз-блейзер Milano",es:"Blazer Oversize Milano"},
      sizes:["XS","S","M","L","XL"], out:["XS"], colors:["schwarz","camel","creme"] },
    { id:"top02", cat:"women", price:39,
      name:{de:"Rippstrick-Top Amalfi",en:"Ribbed Top Amalfi",ru:"Топ в рубчик Amalfi",es:"Top canalé Amalfi"},
      sizes:["XS","S","M","L"], colors:["creme","salbei","koralle","schwarz"] },
    { id:"pnt03", cat:"women", price:79, badge:"new",
      name:{de:"Cargo Wide Leg Trieste",en:"Cargo Wide Leg Trieste",ru:"Карго Wide Leg Trieste",es:"Cargo Wide Leg Trieste"},
      sizes:["S","M","L","XL"], colors:["oliv","sand","schwarz"] },
    { id:"drs04", cat:"women", price:99, badge:"new",
      name:{de:"Leinenkleid Portofino",en:"Linen Dress Portofino",ru:"Льняное платье Portofino",es:"Vestido de lino Portofino"},
      sizes:["XS","S","M","L"], colors:["weiss","himmel","terracotta"] },
    { id:"bik05", cat:"swim", price:59, badge:"new",
      name:{de:"Bikini Riviera",en:"Bikini Riviera",ru:"Бикини Riviera",es:"Bikini Riviera"},
      sizes:["XS","S","M","L"], colors:["koralle","kobalt","schwarz","gold"] },
    { id:"skt06", cat:"women", price:69,
      name:{de:"Satinrock Como",en:"Satin Skirt Como",ru:"Атласная юбка Como",es:"Falda de satén Como"},
      sizes:["XS","S","M","L"], colors:["bordeaux","creme","denim"] },
    { id:"knt07", cat:"men", price:89, badge:"limited",
      name:{de:"Feinstrick Verona",en:"Fine Knit Verona",ru:"Тонкий трикотаж Verona",es:"Punto fino Verona"},
      sizes:["S","M","L","XL","XXL"], colors:["salbei","schwarz","camel","kobalt"] },
    { id:"sht08", cat:"men", price:69, badge:"new",
      name:{de:"Leinenhemd Napoli",en:"Linen Shirt Napoli",ru:"Льняная рубашка Napoli",es:"Camisa de lino Napoli"},
      sizes:["S","M","L","XL"], colors:["weiss","himmel","oliv"] },
    { id:"pnt09", cat:"men", price:95,
      name:{de:"Chino Slim Firenze",en:"Slim Chino Firenze",ru:"Чино Slim Firenze",es:"Chino Slim Firenze"},
      sizes:["S","M","L","XL","XXL"], colors:["sand","schwarz","oliv"] },
    { id:"swm10", cat:"swim", price:45,
      name:{de:"Badeshorts Lido",en:"Swim Shorts Lido",ru:"Плавки-шорты Lido",es:"Bañador Lido"},
      sizes:["S","M","L","XL"], colors:["kobalt","koralle","schwarz"] },
    { id:"bag11", cat:"acc", price:49, badge:"new",
      name:{de:"Ledertasche Siena",en:"Leather Bag Siena",ru:"Кожаная сумка Siena",es:"Bolso de piel Siena"},
      sizes:["Uni"], colors:["camel","schwarz","bordeaux"] },
    { id:"cap12", cat:"acc", price:29,
      name:{de:"Cap Genova",en:"Cap Genova",ru:"Кепка Genova",es:"Gorra Genova"},
      sizes:["Uni"], colors:["schwarz","creme","kobalt","pink"] },
    { id:"des13", cat:"design", price:35, badge:"new",
      name:{de:"Print-Shirt · dein Design",en:"Print Tee · your design",ru:"Футболка с принтом · твой дизайн",es:"Camiseta print · tu diseño"},
      sizes:["XS","S","M","L","XL","XXL"], colors:["weiss","schwarz","creme","salbei"] },
    { id:"des14", cat:"design", price:59, badge:"new",
      name:{de:"Hoodie · dein Design",en:"Hoodie · your design",ru:"Худи · твой дизайн",es:"Sudadera · tu diseño"},
      sizes:["S","M","L","XL","XXL"], colors:["schwarz","creme","lavendel","oliv"] },
  ];

  const REELS = [
    { key:"reel1", live:true,  cat:"new",
      title:{de:"Neu: Blazer Milano",en:"New: Blazer Milano",ru:"Новинка: блейзер Milano",es:"Nuevo: Blazer Milano"} },
    { key:"reel2", live:false, cat:"new",
      title:{de:"Sommer-Bademode",en:"Summer swimwear",ru:"Летний пляж",es:"Baño de verano"} },
    { key:"reel3", live:false, cat:"new",
      title:{de:"Dein Design in 60s",en:"Your design in 60s",ru:"Твой дизайн за 60 сек",es:"Tu diseño en 60s"} },
    { key:"reel4", live:false, cat:"new",
      title:{de:"Streetstyle Hamburg",en:"Streetstyle Hamburg",ru:"Стритстайл Гамбург",es:"Streetstyle Hamburgo"} },
  ];

  /* ---------------- STATE ---------------- */
  let lang = localStorage.getItem("psf_lang") || "de";
  let theme = localStorage.getItem("psf_theme") || "creme"; // creme = default light
  let filter = "all";
  let cart = JSON.parse(localStorage.getItem("psf_cart") || "[]");
  let favs = JSON.parse(localStorage.getItem("psf_favs") || "[]");
  if (!I18N[lang]) lang = "de";

  const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.de[k] || k;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const money = (n) => new Intl.NumberFormat(lang === "en" ? "en-DE" : lang, { style: "currency", currency: "EUR" }).format(n);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* Platzhalter-Kachel als HTML (bis echte Fotos da sind) */
  function placeholder(label, sub, colorHex) {
    const style = colorHex ? ` style="background:linear-gradient(150deg,${colorHex},color-mix(in srgb,${colorHex} 55%,#000 15%))"` : "";
    return `<div class="ph"${style}><span>${esc(label)}${sub ? `<small>${esc(sub)}</small>` : ""}</span></div>`;
  }
  function prod(p) { return PRODUCTS.find((x) => x.id === p); }

  /* ---------------- TOAST ---------------- */
  function toast(msg, ok = true) {
    let box = $(".toasts"); if (!box) { box = document.createElement("div"); box.className = "toasts"; document.body.appendChild(box); }
    const el = document.createElement("div"); el.className = "toast";
    el.innerHTML = `${ok ? '<span class="ok">✓</span>' : "⚠️"}<span>${esc(msg)}</span>`;
    box.appendChild(el); setTimeout(() => { el.style.opacity = "0"; el.style.transform = "translateY(10px)"; setTimeout(() => el.remove(), 300); }, 2200);
  }

  /* ---------------- RENDER: I18N-Texte ---------------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = t("dir");
    $$("[data-i18n]").forEach((el) => { const k = el.getAttribute("data-i18n"); const v = t(k); if (v) el.textContent = v; });
    $$("[data-i18n-ph]").forEach((el) => { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    $$(".lang-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
  }

  /* ---------------- RENDER: Produkte ---------------- */
  function catLabel(c) { return { women: t("f_women"), men: t("f_men"), swim: t("f_swim"), acc: t("f_acc"), design: t("f_design") }[c] || c; }

  function productCard(p) {
    const c0 = p.colors[0];
    const badge = p.badge ? `<span class="product__badge">${t("badge_" + p.badge)}</span>` : "";
    const isFav = favs.includes(p.id) ? " on" : "";
    const swat = p.colors.slice(0, 5).map((c, i) =>
      `<span class="swatch${i === 0 ? " sel" : ""}" data-color="${c}" title="${cname[c] ? cname[c][lang] : c}" style="background:${COLORS[c]}"></span>`).join("");
    const price = p.old ? `<s>${money(p.old)}</s>${money(p.price)}` : money(p.price);
    return `<article class="product" data-id="${p.id}" data-cat="${p.cat}">
      <div class="product__media">
        ${badge}
        <button class="product__fav${isFav}" data-fav="${p.id}" aria-label="favorite">
          <svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.2C.7 8.1 2.6 5 6 5c2 0 3.2 1.1 4 2 .8-.9 2-2 4-2 3.4 0 5.3 3.1 3.6 6.8C19.5 16.4 12 21 12 21z"/></svg>
        </button>
        ${placeholder(p.name[lang], "PSF · Foto", COLORS[c0])}
        <div class="product__quick"><button class="btn3d btn-sm" data-open="${p.id}" style="width:100%;justify-content:center">${t("quick")}</button></div>
      </div>
      <div class="product__body">
        <span class="product__cat">${catLabel(p.cat)}</span>
        <h3 class="product__name">${esc(p.name[lang])}</h3>
        <div class="swatches" data-swatches="${p.id}">${swat}</div>
        <div class="product__row"><span class="product__price">${price}</span></div>
      </div>
    </article>`;
  }

  function renderGrid() {
    const grid = $("#product-grid"); if (!grid) return;
    const list = PRODUCTS.filter((p) => filter === "all" || p.cat === filter);
    grid.innerHTML = list.map(productCard).join("");
  }

  /* ---------------- RENDER: Reels ---------------- */
  function renderReels() {
    const box = $("#reels-grid"); if (!box) return;
    box.innerHTML = REELS.map((r, i) => {
      const grad = ["#ff4d6d,#a24dff", "#4d9bff,#4dd0a0", "#ffd84d,#ff9e43", "#ff2ec4,#28e0ff"][i % 4];
      const tag = r.live ? `<span class="reel__live">${t("reels_live")}</span>` : `<span class="reel__live" style="background:var(--accent-2)">${t("reels_new")}</span>`;
      return `<div class="reel" data-reel="${r.key}">
        ${tag}
        <div class="ph" style="background:linear-gradient(160deg,${grad})"><span style="font-size:34px">▶</span></div>
        <div class="reel__play"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span></div>
        <div class="reel__meta"><b>${esc(r.title[lang])}</b><small>@perfectskin.fashion</small></div>
      </div>`;
    }).join("");
  }

  /* ---------------- PRODUKT-MODAL ---------------- */
  let modalState = { id: null, color: null, size: null };
  function openModal(id) {
    const p = prod(id); if (!p) return;
    modalState = { id, color: p.colors[0], size: null };
    const m = $("#modal");
    renderModal();
    m.classList.add("on"); document.body.style.overflow = "hidden";
  }
  function renderModal() {
    const p = prod(modalState.id); if (!p) return;
    const m = $("#modal");
    const swat = p.colors.map((c) =>
      `<span class="swatch${c === modalState.color ? " sel" : ""}" data-mcolor="${c}" title="${cname[c] ? cname[c][lang] : c}" style="background:${COLORS[c]}"></span>`).join("");
    const sizes = p.sizes.map((s) => {
      const out = (p.out || []).includes(s);
      return `<button class="size${modalState.size === s ? " sel" : ""}${out ? " out" : ""}" ${out ? "disabled" : ""} data-msize="${s}">${s}</button>`;
    }).join("");
    const price = p.old ? `<s style="color:var(--body);font-weight:400;font-size:16px;margin-right:8px">${money(p.old)}</s>${money(p.price)}` : money(p.price);
    m.querySelector(".modal__card").innerHTML = `
      <button class="modal__close" data-close-modal>&times;</button>
      <div class="modal__media">${placeholder(p.name[lang], "PSF · " + (cname[modalState.color] ? cname[modalState.color][lang] : ""), COLORS[modalState.color])}</div>
      <div class="modal__body">
        <span class="product__cat">${catLabel(p.cat)}</span>
        <h2 class="modal__name">${esc(p.name[lang])}</h2>
        <div class="modal__price">${price}</div>
        <div class="opt"><b>${t("pick_color")}: ${cname[modalState.color] ? cname[modalState.color][lang] : ""}</b><div class="swatches">${swat}</div></div>
        <div class="opt"><b>${t("pick_size")}</b><div class="sizes">${sizes}</div></div>
        <button class="btn3d" data-addmodal style="width:100%;justify-content:center;margin-top:18px">${t("add_cart")}</button>
        ${p.cat === "design" ? `<a class="btn3d btn3d--ghost btn-sm" href="design-studio.html?p=${p.id}" style="width:100%;justify-content:center;margin-top:10px">${t("studio_cta")}</a>` : ""}
      </div>`;
  }
  function closeModal() { $("#modal").classList.remove("on"); document.body.style.overflow = ""; }

  /* ---------------- WARENKORB ---------------- */
  function saveCart() { localStorage.setItem("psf_cart", JSON.stringify(cart)); }
  function cartCount() { return cart.reduce((n, i) => n + i.qty, 0); }
  function cartTotal() { return cart.reduce((n, i) => n + i.qty * i.price, 0); }
  function addToCart(id, color, size, qty = 1) {
    const p = prod(id); if (!p) return;
    const key = id + "|" + color + "|" + size;
    const ex = cart.find((i) => i.key === key);
    if (ex) ex.qty += qty; else cart.push({ key, id, color, size, qty, price: p.price });
    saveCart(); updateCartUI(); toast(t("added"));
  }
  function updateCartUI() {
    const c = cartCount();
    const badge = $(".cart-count"); badge.textContent = c; badge.classList.toggle("show", c > 0);
    const body = $(".drawer__body");
    if (!cart.length) { body.innerHTML = `<div class="drawer__empty">${t("cart_empty")}</div>`; }
    else {
      body.innerHTML = cart.map((i) => {
        const p = prod(i.id);
        return `<div class="cart-item" data-key="${i.key}">
          <div class="cart-item__img">${placeholder(p.name[lang].split(" ")[0], "", COLORS[i.color])}</div>
          <div class="cart-item__info">
            <b>${esc(p.name[lang])}</b>
            <small>${cname[i.color] ? cname[i.color][lang] : i.color} · ${t("size_lbl")} ${i.size} · ${money(i.price)}</small>
            <div class="qty"><button data-dec="${i.key}">−</button><span>${i.qty}</span><button data-inc="${i.key}">+</button>
              <button class="cart-item__rm" data-rm="${i.key}">${t("remove")}</button></div>
          </div>
        </div>`;
      }).join("");
    }
    $(".drawer__total span:last-child").textContent = money(cartTotal());
  }
  function openCart() { $("#overlay").classList.add("on"); $("#drawer").classList.add("on"); }
  function closeCart() { $("#overlay").classList.remove("on"); $("#drawer").classList.remove("on"); }

  /* ---------------- THEME / LANG ---------------- */
  function setTheme(name) {
    theme = name;
    if (name === "creme") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", name);
    localStorage.setItem("psf_theme", name);
    $$(".theme-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.themePick === name));
  }
  function setLang(l) {
    if (!I18N[l]) return; lang = l; localStorage.setItem("psf_lang", l);
    applyI18n(); renderGrid(); renderReels(); updateCartUI();
    $$(".filters .chip").forEach((c) => { const f = c.dataset.filter; c.textContent = t("f_" + f); });
    if ($("#modal").classList.contains("on")) renderModal();
  }

  /* ---------------- INTRO + RAHMEN ---------------- */
  function runIntro() {
    const intro = $("#intro"); const frame = $(".rainbow-frame");
    const seen = sessionStorage.getItem("psf_intro");
    if (seen) { if (intro) intro.remove(); frame.classList.add("on"); return; }
    setTimeout(() => { frame.classList.add("on"); }, 1600);
    setTimeout(() => {
      if (intro) { intro.classList.add("done"); setTimeout(() => intro.remove(), 800); }
      sessionStorage.setItem("psf_intro", "1");
    }, 3200);
  }

  /* ---------------- EVENTS ---------------- */
  function wire() {
    // Delegation
    document.addEventListener("click", (e) => {
      const openBtn = e.target.closest("[data-open]");
      if (openBtn) { openModal(openBtn.dataset.open); return; }
      const card = e.target.closest(".product");
      if (card && !e.target.closest("[data-fav]") && !e.target.closest("[data-swatches] .swatch") && !e.target.closest("[data-open]")) {
        openModal(card.dataset.id); return;
      }
      const fav = e.target.closest("[data-fav]");
      if (fav) { const id = fav.dataset.fav; const i = favs.indexOf(id); if (i > -1) favs.splice(i, 1); else favs.push(id);
        localStorage.setItem("psf_favs", JSON.stringify(favs)); fav.classList.toggle("on"); return; }
      // Swatch in Karte -> nur Platzhalter-Farbe wechseln
      const sw = e.target.closest("[data-swatches] .swatch");
      if (sw) { const wrap = sw.closest(".product"); const c = sw.dataset.color;
        $$(".swatch", sw.parentElement).forEach((x) => x.classList.remove("sel")); sw.classList.add("sel");
        const ph = $(".product__media .ph span", wrap) ? $(".product__media .ph", wrap) : null;
        if (ph) ph.style.background = `linear-gradient(150deg,${COLORS[c]},color-mix(in srgb,${COLORS[c]} 55%,#000 15%))`;
        return; }
      // Modal-Farbe
      const mc = e.target.closest("[data-mcolor]");
      if (mc) { modalState.color = mc.dataset.mcolor; renderModal(); return; }
      const ms = e.target.closest("[data-msize]");
      if (ms && !ms.disabled) { modalState.size = ms.dataset.msize; renderModal(); return; }
      if (e.target.closest("[data-addmodal]")) {
        if (!modalState.size) { toast(t("choose_size"), false); return; }
        addToCart(modalState.id, modalState.color, modalState.size); closeModal(); openCart(); return;
      }
      if (e.target.closest("[data-close-modal]") || e.target.id === "modal") { closeModal(); return; }
      // Reels -> Social öffnen (Platzhalter, bis Video-Feed angebunden)
      const reel = e.target.closest("[data-reel]");
      if (reel) { window.open("https://www.instagram.com/", "_blank", "noopener"); return; }
      // Cart-Qty
      const inc = e.target.closest("[data-inc]"); if (inc) { const it = cart.find((i) => i.key === inc.dataset.inc); it.qty++; saveCart(); updateCartUI(); return; }
      const dec = e.target.closest("[data-dec]"); if (dec) { const it = cart.find((i) => i.key === dec.dataset.dec); it.qty--; if (it.qty <= 0) cart = cart.filter((i) => i !== it); saveCart(); updateCartUI(); return; }
      const rm = e.target.closest("[data-rm]"); if (rm) { cart = cart.filter((i) => i.key !== rm.dataset.rm); saveCart(); updateCartUI(); return; }
    });

    // Filter-Chips
    $$(".filters .chip").forEach((c) => c.addEventListener("click", () => {
      $$(".filters .chip").forEach((x) => x.classList.remove("is-active")); c.classList.add("is-active");
      filter = c.dataset.filter; renderGrid();
    }));
    // Lang / Theme
    $$(".lang-btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    $$(".theme-btn").forEach((b) => b.addEventListener("click", () => setTheme(b.dataset.themePick)));
    // Cart
    $(".cart-btn").addEventListener("click", openCart);
    $("#overlay").addEventListener("click", closeCart);
    $(".drawer__close").addEventListener("click", closeCart);
    $("[data-checkout]").addEventListener("click", () => toast(t("checkout_soon"), false));
    // Mobile-Nav
    const burger = $(".burger"), mnav = $("#mnav");
    if (burger) burger.addEventListener("click", () => mnav.classList.toggle("on"));
    $$("#mnav a").forEach((a) => a.addEventListener("click", () => mnav.classList.remove("on")));
    // Newsletter
    const nf = $("#news-form"); if (nf) nf.addEventListener("submit", (e) => { e.preventDefault(); nf.reset(); toast(t("news_ok")); });
    // Hard-Reload
    const hr = $("#hard-reload"); if (hr) hr.addEventListener("click", () => location.reload(true));
    // ESC
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeCart(); if (mnav) mnav.classList.remove("on"); } });
  }

  /* ---------------- INIT ---------------- */
  function init() {
    setTheme(theme); applyI18n(); renderGrid(); renderReels(); wire(); updateCartUI(); runIntro();
    // Deep-link ?p=<id> öffnet Produkt
    const q = new URLSearchParams(location.search).get("p");
    if (q && prod(q)) setTimeout(() => openModal(q), sessionStorage.getItem("psf_intro") ? 200 : 3400);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
