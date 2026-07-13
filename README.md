# Perfect Skin Fashion

Online-Modeshop **und** internes Warenwirtschaftssystem für _Perfect Skin — Beauty & Fashion_ (Hamburg).
Hochwertige, junge Mode aus Italien, limitiert — plus ein Design-Studio zum Selbstgestalten und
ein internes Lager-Werkzeug (Probephase).

> Schwester der bestehenden **Perfect Skin Beauty**-Seite. Gleiche Farbwelt (Crème/Mokka),
> aber frischer: bewegter Hintergrund, Regenbogen-Intro/-Rahmen, 3D-Buttons, mehrere Farb-Themes.
> Build-frei, offline-fähig, keine externen Abhängigkeiten (nur selbst gehostete Fonts).

## Seiten

| Datei | Zweck |
|---|---|
| `index.html` | **Shop-Startseite** — Hero, Produkt-Grid mit Filtern, Hover-Zoom, Farb-/Größenwahl, Warenkorb, Video/Social-Vorschauen, Kontakt. |
| `design-studio.html` | **Design-Studio** — eigenes Kleidungsstück gestalten: Motiv hochladen, Text, Muster, Live-Vorschau, in den Warenkorb. |
| `warehouse.html` | **Warenwirtschaft (intern)** — Artikelstammdaten, Wareneingang/-ausgang per **Barcode-Scan** oder manuell, Bestand, Journal, Import/Export. Daten lokal in IndexedDB. |
| `impressum.html` | Impressum, Datenschutz, AGB, Versand & Rückgabe. |
| `styles.css` / `app.js` | Gemeinsames Design + Shop-Logik (4 Sprachen: DE/EN/RU/ES). |
| `docs/BILD_PROMPTS.md` | Fertige KI-Bild-Prompts für die Produktfotos (mit Platzhalter-Figuren). |

## Sprachen & Themes

- **Sprachen:** Deutsch, Englisch, Russisch, Spanisch (Umschalter oben, Auswahl wird gemerkt).
- **Farb-Themes:** Crème (hell), Mokka (dunkel-edel), Neon, Pastell, Mono.

## Bilder einbauen

Aktuell zeigen die Produkte **farbige Platzhalter-Kacheln**. Sobald echte Fotos vorliegen
(siehe `docs/BILD_PROMPTS.md`):

1. Fotos als `assets/products/<sku>-<farbe>.webp` ablegen (3:4 Hochformat).
2. In `app.js` beim jeweiligen Produkt einen `img`-Pfad je Farbe hinterlegen.

## Lokal ansehen

```bash
python3 -m http.server 8000   # dann http://localhost:8000
```

> Der Barcode-Scan (`warehouse.html`) und die Kamera brauchen `https://` oder `localhost`
> und einen Browser mit `BarcodeDetector` (Chrome/Android). Ohne Unterstützung greift die
> manuelle Eingabe — die App bleibt voll nutzbar.

## Stand (Probephase)

Erste, vollständige Vorbereitung des Shops. **Alle Produkt-, Video- und Social-Inhalte sind
Platzhalter** und werden mit echten Fotos/Feeds ersetzt. Kasse/Bezahlung ist bewusst noch nicht
aktiv (Probephase). Kontakt- und Impressumsdaten stammen von der Perfect-Skin-Beauty-Seite.
