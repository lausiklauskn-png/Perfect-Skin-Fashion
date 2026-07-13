# Bild-Prompts für Perfect Skin Fashion

**Stand:** 2026-07-13 · Sprache der Prompts: gemischt (deutscher Fließtext, englische Prompt-Blöcke — englische Prompts funktionieren in den meisten Generatoren am zuverlässigsten).

---

## 1. Wozu diese Datei — und wie man sie nutzt

Diese Sammlung liefert **fertige KI-Bild-Prompts** für den Online-Modeshop
**Perfect Skin Fashion** (Hamburg). Die Ware wird in Italien eingekauft:
hochwertig, sehr modern, jugendlich-frisch. Zielgruppe sind **junge Frauen
(Schwerpunkt) und junge Männer**.

Die gewünschte Bildsprache ist bewusst **kein steriles Studio-Katalogfoto**,
sondern der Look einer **lockeren Handy-Foto-Session**: fotorealistisch,
natürliches Licht, echte städtische Hamburg-Umgebung, entspannte Posen. Die
Kleidung muss trotzdem **klar erkennbar** bleiben (Schnitt, Material, Farbe).

### So arbeitest du mit den Prompts

1. **Generator wählen.** Die Prompts sind so geschrieben, dass sie in jedem
   fotorealistischen Bildgenerator laufen:
   - **Midjourney** (v6+): Prompt einfügen, am Ende Parameter wie
     `--ar 3:4 --style raw --q 2` anhängen (Seitenverhältnis siehe Abschnitt 8).
   - **Flux** (z. B. Flux.1 dev/pro): Prompt 1:1 einfügen, Seitenverhältnis im
     UI setzen. Sehr gut für realistische Haut/Stoffe.
   - **DALL·E 3 / GPT-Bild**: Prompt einfügen, im Satz das Seitenverhältnis
     mitnennen („hochformat 3:4").
   - **Beliebiger anderer fotorealistischer Generator** (Stable Diffusion
     XL/3, Ideogram, Leonardo …): Baustein-Block + Produkt-Prompt kombinieren.
2. **Platzhalter ersetzen.** Alles in `[ECKIGEN_KLAMMERN]` ist ein
   **Platzhalter**. Ersetze ihn, bevor du generierst — entweder durch eine der
   fertigen Figuren-Beschreibungen aus Abschnitt 2, durch eine echte Model-
   Beschreibung oder (später) durch ein echtes Foto einer echten Person, wenn
   du mit Referenz-/Face-Swap-Workflows arbeitest.
3. **Farbvarianten** einzeln generieren: pro Artikel den Prompt mehrmals laufen
   lassen und dabei nur die Farbe im Text austauschen (die vorgeschlagenen
   Farben stehen bei jedem Artikel).
4. **Auswählen, benennen, in den Shop legen** — siehe Abschnitt 8
   (Dateinamen-Konvention + Größen).

> **Wichtiger Hinweis zu den Figuren:** Die Personen in den Prompts sind
> **Platzhalter-Figuren** (frei erfundene Beschreibungen). Sie stellen keine
> echten Personen dar. Für die Nutzung echter Gesichter/Models brauchst du
> deren Einverständnis; ersetze dann `[MODEL_W1]` usw. durch deine eigene
> Referenz.

---

## 2. Wiederverwendbarer Baustein-Block

Setze deinen Prompt immer aus **drei Teilen** zusammen:

```
[STIL-PRÄFIX] + [FIGUR] in [LOCATION], trägt [KLEIDUNG + FARBE] + [QUALITÄTS-SUFFIX]
```

### 2.1 Stil-Präfix (Kamera / Licht / Look)

Kopiere einen dieser Präfixe an den **Anfang** jedes Prompts:

**DE:**
> „Fotorealistische Handy-Aufnahme, natürliches Tageslicht, weiche Schatten,
> leicht körnig, authentischer Social-Media-Look, entspannte Pose, echte Haut
> mit Poren, natürliche Farben, geringe Tiefenschärfe, wie in einer lockeren
> Foto-Session mit Freunden fotografiert."

**EN (empfohlen für Midjourney/Flux):**
> "Photorealistic smartphone photo, natural daylight, soft shadows, subtle
> film grain, candid social-media look, relaxed pose, real skin texture,
> true-to-life colors, shallow depth of field, shot like a casual photo
> session with friends, 35mm look"

### 2.2 Umgebungs-Bausteine (Hamburg-Locations)

Ein Element pro Bild wählen — **modern-urban, nie ländlich**:

- `[LOC_SPEICHERSTADT]` = "in front of red-brick Speicherstadt warehouse
  architecture, canal and iron bridge in the background, Hamburg"
- `[LOC_HAFENCITY]` = "on a modern HafenCity waterfront promenade, glass
  architecture and harbour cranes softly blurred behind, Hamburg"
- `[LOC_ELBPHILHARMONIE]` = "near the Elbphilharmonie, modern wave-shaped
  glass facade in the background, harbour light, Hamburg"
- `[LOC_SCHANZE]` = "in the trendy Schanzenviertel, colourful street-art
  brick wall, café tables, urban Hamburg vibe"
- `[LOC_CAFE]` = "at an outdoor café terrace, warm morning light, blurred
  espresso cups and greenery, modern Hamburg district"
- `[LOC_HAFEN]` = "at the Landungsbrücken harbour, wooden pier, water and
  ships gently out of focus, Hamburg"
- `[LOC_ROOFTOP]` = "on a modern rooftop terrace overlooking the Hamburg
  skyline at golden hour"
- `[LOC_STRAND]` = "at Elbstrand river beach near Övelgönne, sand, water and
  distant harbour cranes, relaxed summer mood, Hamburg" *(für Bademode)*

### 2.3 Figuren-Platzhalter (frei ersetzbar)

Diese Beschreibungen sind **Platzhalter** — Klaus ersetzt sie später durch
echte Beschreibungen oder echte Personen. Bewusst neutral gehalten, damit sie
zur jungen, frischen Marke passen.

**Frauen (Schwerpunkt):**

- `[MODEL_W1]` = junge Frau, ca. 22, schulterlanges welliges braunes Haar,
  natürliches Make-up, sportlich-schlanke Figur, offenes Lächeln
- `[MODEL_W2]` = junge Frau, ca. 25, lange glatte blonde Haare, minimalistischer
  Stil, ruhiger selbstbewusster Blick
- `[MODEL_W3]` = junge Frau, ca. 20, dunkle lockige Haare, sommersprossige Haut,
  fröhlich-verspielte Ausstrahlung
- `[MODEL_W4]` = junge Frau, ca. 27, kurzer Bob, kräftigere/kurvige Figur,
  elegant-modern, warme Ausstrahlung

**Männer:**

- `[MODEL_M1]` = junger Mann, ca. 24, kurze dunkle Haare, Drei-Tage-Bart,
  athletisch, lässige Haltung
- `[MODEL_M2]` = junger Mann, ca. 26, blonde Undercut-Frisur, schlank,
  cooler Streetwear-Vibe
- `[MODEL_M3]` = junger Mann, ca. 22, mittellange dunkle Haare, sonnengebräunt,
  entspanntes Strand-/Sommer-Auftreten

> **Englische Kurzform** für die Prompt-Zeile, falls der Generator Deutsch
> schlecht versteht — Beispiel `[MODEL_W1]`:
> "a young woman around 22, shoulder-length wavy brown hair, natural makeup,
> slim athletic build, open genuine smile".

### 2.4 Qualitäts-Suffix

Immer ans **Ende** hängen (Kurzfassung des Abschnitts 7):

**EN:**
> "clothing clearly visible with accurate cut, fabric texture and stitching,
> full outfit in frame, correct anatomy, natural hands, no logos, no text,
> no watermark, high detail"

---

## 3. Produkt-Prompts (konkret, sofort nutzbar)

Jeder Eintrag: **Artikelname · SKU · Bild-Prompt (Baustein-Block schon
eingesetzt) · Farbvarianten**. Ersetze noch `[MODEL_*]` und ggf. die Location
nach Geschmack. Für jede Farbvariante den Prompt erneut mit ausgetauschtem
Farbwort laufen lassen.

### 3.1 Damen-Oberteile

**Rippstrick-Top Amalfi** · SKU `dot-amalfi`
> Photorealistic smartphone photo, natural daylight, candid social-media look,
> shallow depth of field — [MODEL_W1] [LOC_SCHANZE], wearing a fitted ribbed
> knit tank top in **cremeweiß**, tucked into high-waist jeans, delicate gold
> necklace, relaxed pose leaning against a street-art brick wall. Clothing
> clearly visible, accurate ribbed texture and seams, real skin, natural hands,
> no logos, no text, no watermark, high detail. --ar 3:4 --style raw
- Farben: Cremeweiß · Schwarz · Salbeigrün · Terrakotta · Himmelblau

**Blazer Oversize Milano** · SKU `dot-milano`
> Photorealistic smartphone photo, soft natural light, candid look — [MODEL_W2]
> [LOC_HAFENCITY], wearing an oversized tailored blazer in **beige**, sleeves
> pushed up, over a white top and straight trousers, walking and looking to
> the side. Clothing clearly visible with accurate cut and lapel structure,
> fabric drape realistic, natural hands, no logos, no text, no watermark.
> --ar 3:4 --style raw
- Farben: Beige · Anthrazit · Camel · Off-White · Nachtblau

**Leinen-Bluse Capri** · SKU `dot-capri`
> Photorealistic smartphone photo, warm morning light, breezy mood — [MODEL_W3]
> [LOC_CAFE], wearing a loose linen blouse in **hellblau**, slightly unbuttoned,
> half-tucked, sunlight through the fabric showing the linen weave. Clothing
> clearly visible, realistic wrinkled linen texture, natural hands, no logos,
> no watermark, high detail. --ar 3:4 --style raw
- Farben: Hellblau · Weiß · Sandbeige · Rosé · Olive

**Crop-Hoodie Bologna** · SKU `dot-bologna`
> Photorealistic candid smartphone photo, overcast soft light — [MODEL_W1]
> [LOC_SPEICHERSTADT], wearing a cropped oversized hoodie in **pastellrosa**
> with wide sleeves, paired with bike shorts, hood down, laughing. Clothing
> clearly visible, soft cotton fleece texture, natural hands, no brand logos,
> no text, no watermark. --ar 3:4 --style raw
- Farben: Pastellrosa · Grau meliert · Schwarz · Mintgrün · Lavendel

### 3.2 Damen-Hosen / Röcke

**Cargo Wide Leg Trieste** · SKU `dbo-trieste`
> Photorealistic smartphone photo, natural daylight, street style — [MODEL_W2]
> [LOC_SCHANZE], wearing wide-leg cargo trousers in **khaki** with side pockets,
> a fitted crop top, chunky sneakers, hands in pockets, relaxed stance.
> Clothing clearly visible, accurate cargo pocket detail and fabric weight,
> full outfit in frame, natural hands, no logos, no watermark. --ar 3:4
> --style raw
- Farben: Khaki · Schwarz · Beige · Olivgrün · Steingrau

**Plissee-Rock Verona** · SKU `dbo-verona`
> Photorealistic smartphone photo, golden hour, gentle wind — [MODEL_W4]
> [LOC_ROOFTOP], wearing a midi pleated skirt in **smaragdgrün** that moves in
> the breeze, tucked-in knit top, elegant modern pose. Clothing clearly
> visible, realistic pleats and satin sheen, natural hands, no logos, no text,
> no watermark, high detail. --ar 3:4 --style raw
- Farben: Smaragdgrün · Champagner · Schwarz · Bordeaux · Silbergrau

**High-Waist-Jeans Genova** · SKU `dbo-genova`
> Photorealistic candid smartphone photo, bright daylight — [MODEL_W3]
> [LOC_HAFEN], wearing high-waist straight-leg jeans in **mittelblauer
> Waschung**, tucked-in ribbed top, casual walking pose on a wooden pier.
> Clothing clearly visible, accurate denim wash, stitching and pockets,
> natural hands, no logos, no watermark. --ar 3:4 --style raw
- Farben: Mittelblau · Hellblau/Used · Schwarz · Off-White · Anthrazit

### 3.3 Damen-Kleider

**Sommerkleid Positano** · SKU `dkl-positano`
> Photorealistic smartphone photo, warm summer light, breezy — [MODEL_W1]
> [LOC_CAFE], wearing a flowing floral midi summer dress in **koralle** with
> thin straps, relaxed happy pose holding an iced drink. Clothing clearly
> visible, light airy fabric with realistic movement, natural hands, no logos,
> no text, no watermark, high detail. --ar 3:4 --style raw
- Farben: Koralle · Salbeigrün · Weiß mit Blumenmuster · Hellgelb · Marineblau

**Satin-Slipdress Como** · SKU `dkl-como`
> Photorealistic smartphone photo, evening golden light — [MODEL_W2]
> [LOC_ELBPHILHARMONIE], wearing a silky satin slip dress in **champagner**,
> elegant minimalist style, soft confident pose. Clothing clearly visible,
> realistic satin sheen and drape, natural hands, no logos, no watermark,
> high detail. --ar 3:4 --style raw
- Farben: Champagner · Schwarz · Smaragdgrün · Staubrosa · Silber

**Strickkleid Torino** · SKU `dkl-torino`
> Photorealistic candid smartphone photo, soft overcast light — [MODEL_W4]
> [LOC_SPEICHERSTADT], wearing a fitted ribbed knit midi dress in **camel**,
> ankle boots, modern elegant stance by the brick canal. Clothing clearly
> visible, accurate ribbed knit texture, flattering fit, natural hands, no
> logos, no watermark. --ar 3:4 --style raw
- Farben: Camel · Schwarz · Rostrot · Creme · Waldgrün

### 3.4 Bademode (Bikini / Badeanzug / Badehose)

**Bikini Riviera** · SKU `bad-riviera`
> Photorealistic smartphone photo, bright summer sun, relaxed beach mood —
> [MODEL_W3] [LOC_STRAND], wearing a triangle bikini in **koralle-orange**,
> standing at the water's edge, natural confident pose, wet sand and river
> behind. Swimwear clearly visible with accurate cut and fabric, realistic
> skin, natural hands and body proportions, tasteful, no logos, no text, no
> watermark. --ar 3:4 --style raw
- Farben: Koralle-Orange · Schwarz · Türkis · Weiß · Leopardenmuster

**Badeanzug Sorrento** · SKU `bad-sorrento`
> Photorealistic smartphone photo, warm daylight — [MODEL_W2] [LOC_STRAND],
> wearing a one-piece swimsuit in **tiefblau** with a modern cut-out side,
> relaxed pose on a towel. Swimwear clearly visible, accurate cut and fabric
> sheen, realistic body proportions, tasteful, natural hands, no logos, no
> watermark, high detail. --ar 3:4 --style raw
- Farben: Tiefblau · Schwarz · Bordeaux · Smaragdgrün · Sandbeige

**Badehose Ligure** · SKU `bad-ligure`
> Photorealistic smartphone photo, bright sun, summer beach — [MODEL_M3]
> [LOC_STRAND], wearing mid-length swim shorts in **marineblau** with a subtle
> stripe, relaxed casual pose near the water. Swimwear clearly visible,
> accurate cut and fabric, realistic body, natural hands, no brand logos, no
> text, no watermark. --ar 3:4 --style raw
- Farben: Marineblau · Schwarz · Petrol · Sandbeige · Rot

### 3.5 Herren-Oberteile

**Leinenhemd Portofino** · SKU `hot-portofino`
> Photorealistic candid smartphone photo, warm evening light — [MODEL_M1]
> [LOC_HAFEN], wearing a relaxed short-sleeve linen shirt in **salbeigrün**,
> a few buttons open, casual confident pose at the pier. Clothing clearly
> visible, realistic linen weave and drape, natural hands, no logos, no text,
> no watermark, high detail. --ar 3:4 --style raw
- Farben: Salbeigrün · Weiß · Hellblau · Sandbeige · Terrakotta

**Oversize-Shirt Napoli** · SKU `hot-napoli`
> Photorealistic smartphone photo, natural daylight, street style — [MODEL_M2]
> [LOC_SCHANZE], wearing a heavyweight oversized plain t-shirt in **off-white**,
> tucked slightly into wide trousers, relaxed urban pose by a graffiti wall.
> Clothing clearly visible, thick cotton texture and drape, natural hands, no
> brand logos, no text, no watermark. --ar 3:4 --style raw
- Farben: Off-White · Schwarz · Grau · Waschblau · Olive

**Strickpullover Firenze** · SKU `hot-firenze`
> Photorealistic candid smartphone photo, soft overcast light — [MODEL_M1]
> [LOC_SPEICHERSTADT], wearing a fine-knit crewneck sweater in **anthrazit**,
> sleeves pushed up, leaning on an iron bridge railing. Clothing clearly
> visible, accurate knit texture and fit, natural hands, no logos, no
> watermark, high detail. --ar 3:4 --style raw
- Farben: Anthrazit · Camel · Nachtblau · Creme · Flaschengrün

### 3.6 Herren-Hosen

**Chino Slim Roma** · SKU `hbo-roma`
> Photorealistic smartphone photo, natural daylight — [MODEL_M2] [LOC_HAFENCITY],
> wearing slim-fit chino trousers in **beige**, paired with a plain t-shirt and
> sneakers, casual standing pose. Clothing clearly visible, accurate chino
> fabric and cut, full outfit in frame, natural hands, no logos, no text, no
> watermark. --ar 3:4 --style raw
- Farben: Beige · Navy · Olive · Anthrazit · Sand

**Cargo Relaxed Palermo** · SKU `hbo-palermo`
> Photorealistic candid smartphone photo, urban daylight — [MODEL_M1]
> [LOC_SCHANZE], wearing relaxed cargo trousers in **olivgrün** with side
> pockets, a plain tee, chunky sneakers, hands in pockets. Clothing clearly
> visible, accurate cargo detail and fabric weight, natural hands, no brand
> logos, no text, no watermark. --ar 3:4 --style raw
- Farben: Olivgrün · Schwarz · Beige · Steingrau · Khaki

### 3.7 Accessoires

**Ledergürtel Firenze** · SKU `acc-guertel`
> Photorealistic close-up smartphone photo, soft natural light — waist detail
> of [MODEL_W2] [LOC_HAFENCITY], showing a slim leather belt in **cognacbraun**
> with a modern minimalist gold buckle over high-waist trousers. Accessory
> clearly visible, accurate leather grain and buckle detail, natural hands,
> no logos, no text, no watermark, high detail. --ar 3:4 --style raw
- Farben: Cognacbraun · Schwarz · Camel · Bordeaux · Weiß

**Sonnenbrille Lido** · SKU `acc-brille`
> Photorealistic smartphone portrait, bright summer light — face and shoulders
> of [MODEL_W3] [LOC_STRAND], wearing modern oversized sunglasses in
> **schildpatt**, relaxed smile. Accessory clearly visible, realistic frame
> and lens reflection, natural skin, no brand logos, no text, no watermark.
> --ar 3:4 --style raw
- Farben: Schildpatt · Schwarz · Transparent · Roségold · Weiß

**Tote-Bag Milano** · SKU `acc-tasche`
> Photorealistic candid smartphone photo, urban daylight — [MODEL_W1]
> [LOC_CAFE], carrying a structured canvas-and-leather tote bag in **camel**
> over the shoulder, walking pose. Accessory clearly visible, accurate fabric
> and leather handle detail, natural hands, no logos, no text, no watermark.
> --ar 3:4 --style raw
- Farben: Camel · Schwarz · Off-White · Olive · Bordeaux

### 3.8 „Eigenes Design" (bedruckbare Kleidung)

Für den Eigen-Design-Bereich: bedruckte Shirts/Hoodies mit **eigenen Mustern**.
Das Druckmotiv soll klar auf der Brust sitzen, ohne fremde Marken.

**Print-Shirt Custom Bianco** · SKU `edp-shirt`
> Photorealistic smartphone photo, natural daylight, street style — [MODEL_M2]
> [LOC_SCHANZE], wearing a plain white heavyweight t-shirt with a **bold
> abstract colourful geometric print** centered on the chest, relaxed pose by
> a brick wall. Garment and print clearly visible and sharp, accurate cotton
> texture, print sits flat on the fabric with realistic folds, natural hands,
> no brand logos, no watermark. --ar 3:4 --style raw
- Musterideen: Abstrakt geometrisch · Handschrift-Slogan · Foto-Print ·
  Aquarell-Blumen · Minimal-Linie
- Shirt-Grundfarben: Weiß · Schwarz · Sand · Hellgrau · Salbeigrün

**Print-Hoodie Custom Nero** · SKU `edp-hoodie`
> Photorealistic candid smartphone photo, soft overcast light — [MODEL_W1]
> [LOC_HAFENCITY], wearing a black oversized hoodie with a **large custom
> back print of a stylised line-art design**, turned to show the back, hands
> in pocket. Garment and print clearly visible, print follows the fabric folds
> realistically, accurate fleece texture, natural hands, no brand logos, no
> watermark, high detail. --ar 3:4 --style raw
- Musterideen: Line-Art groß hinten · Fototransfer · Typo-Statement ·
  Retro-Grafik · Farbverlauf
- Hoodie-Grundfarben: Schwarz · Creme · Grau meliert · Flaschengrün · Bordeaux

**Print-Set Duo (Mockup-Kachel)** · SKU `edp-mockup`
> Photorealistic flat-lay smartphone photo, soft even daylight — two folded
> t-shirts on a light wooden surface, one white and one black, each showing a
> different **custom chest print** (one geometric, one handwritten slogan),
> beside a phone and coffee cup. Garments and prints clearly visible and sharp,
> realistic fabric folds, no brand logos, no watermark. --ar 3:4 --style raw
- Zweck: Vorschau-Kachel für den Konfigurator „Gestalte dein eigenes Teil"

---

## 4. Hero- / Intro-Bilder (Startseite, große Banner)

Querformat **16:9** (siehe Abschnitt 8). Mehr Umgebung, Figur kleiner, Platz
für Text-Overlay einplanen (Personen leicht aus der Mitte).

**Hero Startseite — „Frische aus Italien, getragen in Hamburg"** · `hero-home`
> Photorealistic wide smartphone photo, golden hour, cinematic candid mood —
> [MODEL_W2] and [MODEL_M1] walking together laughing [LOC_HAFENCITY], modern
> summer outfits in warm neutral tones, harbour and glass architecture softly
> blurred behind, lots of open sky for text. Clothing clearly visible, real
> skin, natural hands, no logos, no text, no watermark, high detail.
> --ar 16:9 --style raw
- Farbstimmung: warme Neutraltöne (Beige/Camel/Creme) für ruhigen Banner-Look

**Hero Sommer / Bademode** · `hero-summer`
> Photorealistic wide smartphone photo, bright summer sun — group of three
> young people ([MODEL_W3], [MODEL_W1], [MODEL_M3]) relaxed [LOC_STRAND] in
> stylish swimwear and light cover-ups, water and distant harbour cranes,
> joyful candid moment, negative space on the left for text. Swimwear clearly
> visible, tasteful, realistic bodies, natural hands, no logos, no watermark.
> --ar 16:9 --style raw

**Hero Eigenes Design** · `hero-custom`
> Photorealistic wide smartphone photo, urban daylight — [MODEL_M2] and
> [MODEL_W4] [LOC_SCHANZE] wearing t-shirts with bold custom prints, laughing,
> colourful street-art wall behind, room for headline on the right. Garments
> and prints clearly visible and sharp, natural hands, no brand logos, no
> watermark. --ar 16:9 --style raw

---

## 5. Lifestyle- / Social-Media-Bilder

Quadratisch **1:1** für Instagram-Feed-Kacheln, **9:16** für Stories/Reels-
Thumbnails. Sehr locker, „Freund fotografiert Freundin"-Look.

**Instagram-Feed-Kachel „Neu eingetroffen"** · `social-feed`
> Photorealistic candid smartphone photo, natural light, authentic
> influencer-style — [MODEL_W1] [LOC_CAFE] in a fresh new outfit, mid-laugh,
> holding a coffee, slightly imperfect framing like a friend took it. Clothing
> clearly visible, real skin texture, natural hands, no logos, no watermark.
> --ar 1:1 --style raw

**Story / Reel-Thumbnail „Was gibt es Neues?"** · `social-story`
> Photorealistic vertical smartphone photo, natural daylight, dynamic candid
> mood — [MODEL_M2] [LOC_SPEICHERSTADT] adjusting his jacket and looking into
> the camera, motion energy, space at the top for a headline sticker. Clothing
> clearly visible, natural hands, no logos, no text, no watermark.
> --ar 9:16 --style raw

**Video-Thumbnail „Neuheiten-Video"** · `social-video-thumb`
> Photorealistic vertical smartphone photo, vibrant natural light — two young
> women ([MODEL_W3], [MODEL_W2]) showing off new outfits [LOC_ROOFTOP] with the
> Hamburg skyline behind, expressive happy gesture, high energy for a video
> cover, upper third kept clear for a play button and title. Clothing clearly
> visible, natural hands, no logos, no watermark. --ar 9:16 --style raw

**Detail-/Material-Kachel (ohne Gesicht)** · `social-detail`
> Photorealistic macro smartphone photo, soft natural light — close-up of the
> fabric and stitching of a garment worn by [MODEL_W2], showing texture and
> colour in detail, hand gently touching the sleeve. Material clearly visible,
> natural hand, no logos, no watermark, high detail. --ar 1:1 --style raw

---

## 6. Farbvarianten sauber generieren (Kurz-Workflow)

1. Basis-Prompt einmal generieren, bis Pose/Location/Ausschnitt sitzen.
2. **Seed festhalten** (Midjourney/Flux erlauben das) — so bleiben Figur und
   Umgebung gleich, nur die Farbe ändert sich.
3. Prompt kopieren, **nur das Farbwort** austauschen (z. B. `in cremeweiß` →
   `in schwarz`), erneut generieren.
4. Alle Varianten desselben Artikels im gleichen Licht/Ausschnitt halten →
   im Shop wirken sie wie eine echte Farb-Auswahl desselben Produkts.

---

## 7. Negative Prompts & Qualitäts-Hinweise

**Als Negative Prompt** (Stable Diffusion / Flux „negative"-Feld) oder als
Vermeidungs-Satz am Ende (Midjourney `--no …`):

```
deformed hands, extra fingers, fused fingers, extra limbs, distorted face,
asymmetrical eyes, unrealistic body proportions, plastic skin, oversmoothed
skin, brand logos, trademarked logos, text, captions, watermark, signature,
low resolution, blurry clothing, warped fabric, cluttered background,
oversaturated, HDR halos, studio backdrop
```

**Qualitäts-Checkliste vor dem Freigeben eines Bildes:**

- **Hände & Anatomie** korrekt (häufigste KI-Schwäche — genau prüfen).
- **Kleidung klar erkennbar**: Schnitt, Naht, Material, Farbe stimmen mit dem
  echten Artikel überein. Bei Bademode: **geschmackvoll**, realistische Körper.
- **Keine fremden Marken/Logos**, keine erfundenen Schriftzüge, kein
  Wasserzeichen.
- **Look bleibt „Handy-Session"**, nicht Studio: natürliches Licht, leichte
  Unschärfe, entspannte Pose.
- **Umgebung modern-urban** (Hamburg-Vibe), nicht ländlich.
- **Konsistenz** über die Farbvarianten eines Artikels.

---

## 8. Vom Bild in den Shop

**Dateinamen-Konvention:**

```
assets/products/<sku>-<farbe>.webp
```

Beispiele:
- `assets/products/dot-amalfi-cremeweiss.webp`
- `assets/products/dot-amalfi-schwarz.webp`
- `assets/products/bad-riviera-koralle.webp`
- `assets/products/edp-hoodie-schwarz.webp`

Regeln: Farbe kleingeschrieben, ohne Umlaute (`weiß` → `weiss`,
`grün` → `gruen`), keine Leerzeichen (Bindestrich). Hero-/Social-Bilder:

```
assets/hero/<name>.webp        z. B. assets/hero/hero-home.webp
assets/social/<name>.webp      z. B. assets/social/social-feed.webp
```

**Empfohlene Formate & Größen:**

| Zweck | Seitenverhältnis | Zielgröße (Pixel) | Format |
|---|---|---|---|
| Produktkarte / Galerie | **3:4 Hochformat** | 1200 × 1600 | WebP |
| Hero-Banner Startseite | **16:9 Querformat** | 1920 × 1080 | WebP |
| Instagram-Feed-Kachel | **1:1 Quadrat** | 1080 × 1080 | WebP |
| Story / Reel-Thumbnail | **9:16 Hochformat** | 1080 × 1920 | WebP |

**Ablauf:** generieren → auswählen → auf Zielgröße zuschneiden → als **WebP**
(Qualität ~80 %) exportieren → nach `assets/products/` bzw. `assets/hero/` /
`assets/social/` legen → im Shop-Datensatz die SKU + Farben verlinken.

---

*Alle Personen in dieser Datei sind erfundene Platzhalter-Figuren. Ersetze sie
durch eigene Beschreibungen oder echte, einverstandene Models, bevor du
veröffentlichst.*
