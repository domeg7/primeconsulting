# CD-Audit — Prime Consulting GmbH

**Modus:** B (CD-Adoption) → bestehende Markenfarben, Schriften und Bildwelt 1:1 übernehmen, nur Layout, Hierarchie, Spacing und Performance modernisieren.

---

## Logo-Quelle

- Datei: `assets/images/Prime-Logo-PNG.png` (43 KB, PNG mit Transparenz, ca. 800×?)
- Stil: typografisches Logo, "PRIME CONSULTING" in zwei Blöcken auf magenta Grund, mit gelben Akzenten.
- Hauptfarben im Logo (per Pillow Pixel-Quantisierung extrahiert):
  - Magenta-Block: **#9d5199** (1.28 Mio Pixel — Hauptmarkenfarbe)
  - Gelb-Akzent: **#fdcc3b** (130'675 Pixel — Sekundärmarkenfarbe)
- Verwendung: im Header oben links als Block, im Footer nicht separat (nur Schriftzug "Prime Consulting GmbH").

---

## Farbpalette (1:1 aus dem Original-CSS und Logo extrahiert)

Quelle: `wp-content/uploads/onepagepro-style-custom.css?1621160467`

| Rolle | Hex | Wo verwendet (Original) |
|---|---|---|
| **Primary / Magenta** | `#9c519a` | Top-Bar Hintergrund, Notice-Bar, Menü-Hover, Section-Akzente, Bildhintergrund Portraits |
| **Secondary / Gold** | `#fecc3d` | Top-Bar-Schrift & Icons, Header-Border, CTA-Button-Background, Social-Icons |
| **Akzent / Lime** | `#b1d234` | Notice-Bar-Button — selten, kann als sparsamer Akzent für sekundäre CTAs dienen |
| **Akzent / Terrakotta** | `#bd584e` | Cart-/E-Commerce-Elemente (in unserem Redesign nicht nötig) |
| Text dunkel | `#3d3d3d` / `#393939` | Bodytext, nicht reines Schwarz |
| Heading dunkel | `#212121` | Headings, Hamburger-Menü-Icons |
| Hintergrund hell | `#f3f3f3` / `#f4f4f4` | Navigation-Background, leichte Sektion-Hintergründe |
| Border / Trenner | `#e0e0e0` / `#e8e8e8` / `#dddddd` | dezente Trennlinien |
| Muted-Text | `#777777` / `#afafaf` | Sekundärtext, Hinweise |
| Reines Weiss | `#ffffff` | Haupt-Hintergrund |
| Reines Schwarz | `#000000` | sparsam — Logo-Kontrast, Outlines |

**Was wir übernehmen, was wir nicht:**

- Primary `#9c519a`, Secondary `#fecc3d`: **1:1 übernehmen** — das ist die Marke.
- Akzent Lime `#b1d234`: nur falls semantisch passend (z. B. "geöffnet"-Status, Erfolgs-Feedback). Kein Pflichtelement.
- Terrakotta `#bd584e`: nicht verwenden — war WooCommerce-Detail, ist nicht markenprägend.
- Blaue Töne aus dem Theme-Boilerplate (`#309cea`, `#52aae9` etc.): nicht verwenden — das sind WordPress-Theme-Defaults, nicht Marke.

---

## Typografie (1:1 aus dem Original übernehmbar — beide Google Fonts)

Quelle: `fonts.googleapis.com/css?family=Barlow+Condensed:...|Open+Sans:...`

- **Headline-Schrift:** **Barlow Condensed** — schmallaufende Sans, modern-technisch, im Original für Section-Titel ("ÜBER UNS") in Regular/Light, all-caps, mit Letter-Spacing.
- **Body-Schrift:** **Open Sans** — universelle, gut lesbare Sans für Fliesstext und Subheadings.
- **Verfügbare Schnitte (Original lädt extrem viele):**
  - Barlow Condensed: 100, 200, 300, 400, 500, 600, 700, 800, 900 + Italics
  - Open Sans: 300, 400, 600, 700, 800 + Italics
- **Was wir für Redesign laden (Performance-Budget):**
  - Barlow Condensed: 400 (Section-Titel all-caps), 600 (kräftigere Headlines), evtl. 300 für Pull-Quotes
  - Open Sans: 400 (Body), 600 (Subheadings, Buttons), evtl. 700 für Mini-Akzente
  - Maximal 4 Schnitte total via `font-display: swap`

**Hinweis:** Beide Schriften sind frei verfügbar via Google Fonts — keine Approximation nötig. In CH/EU aus Datenschutzgründen **selbst hosten** statt CDN-Calls (siehe `relaunch-risks.md`).

---

## Bildstil (im Redesign übernehmen)

Aus Screenshot- und Asset-Analyse:

- **Farbtemperatur:** warm, leicht entsättigt; Hauttöne natürlich, kein HDR-Look.
- **Sättigung:** mittel; Akzent durch den Magenta-Backdrop hinter den Portraits.
- **Stilrichtung:** posierte Portrait-Fotografie mit klarer Markenbindung — die zwei Inhaberinnen vor magenta-rosa Backdrop, freundlich-professionell, leicht lächelnd, sitzend an einem Tisch (kein steifes Studio).
- **Personen:** ja — und das ist zentral. Die Marke lebt davon, dass Luisa & Andrea persönlich auftreten.
- **Komposition:** Brustbild, leicht zentriert, ausreichend Hintergrundkontext sichtbar. Bei den Büro-Bildern: weitwinklig, hell, reale Räume.
- **Tonalität:** persönlich-vertrauensbildend, kein Stockfoto-Look, kein Corporate-Glanz. Eher "kleine Praxis mit echten Gesichtern".

**Was wir verwenden (Originalbilder, alle in `assets/images/`):**
- `Prime-Andrea-Luisa-wide.jpg` (354 KB) — Beide Inhaberinnen zusammen → Hero-Kandidat
- `Prime-Luisa-01-wide.jpg`, `Prime-Andrea-01-wide.jpg` — Einzelportraits für Team-Sektion
- `Prime-luisa.jpg`, `prime-andrea.jpg` — kleinere Varianten (Fallback / Mobile)
- `Prime-Buero-02-wide.jpg`, `Prime-Buero-03-wide.jpg`, `Prime-Buero-05-wide.jpg` — Büroaufnahmen für "Unser Büro"-Sektion / Hintergrund-Akzent

**Bildoptimierung im Redesign:** Hero unter 500 KB (Andrea-Luisa-wide ist 354 KB → ggf. nochmal komprimieren auf ~250 KB WebP). Restbilder auf ~150-200 KB drücken, alle in WebP mit JPG-Fallback.

---

## Tonalität (1:1 übernehmen)

- **Anrede:** **Sie** (formell), "Wir" wenn die Firma spricht. Konsistent.
- **Stil:** **formell-warm**, leicht bürokratisch ("Diskretion", "Preis-Leistungsverhältnis", "regelmässige Weiterbildungen") aber mit menschlichem Anker ("ein Stück Freiheit für Sie"). Kein Dialekt, kein Du.
- **Eigenheiten / O-Töne, die wir bewahren:**
  - **Tagline:** *«Prime Consulting GmbH – ein Stück Freiheit für Sie»* → diese gehört prominent ins Redesign, sie ist der stärkste Markensatz.
  - "Eine unserer grössten Stärken ist es, in der Schweiz lebende Emigranten zu unterstützen."
  - "Mit der Schweizer Bürokratie unterstützen, damit Sie alles mit der gleichen Ruhe und Sicherheit umsetzen können, wie Sie es in Ihrem Land tun würden."
  - "neben Leyla's Kebab-Restaurant" (in der Anfahrtsbeschreibung — sehr authentischer lokaler Anker, unbedingt erhalten)
- **Werte-Vokabular:** Kompetenz, Diskretion, Fairness, attraktiver Preis-Leistungsverhältnis, regelmässige Weiterbildung.

---

## Bewertung der bestehenden CD

- **Stärken:** Sehr klare und mutige Primärfarbe (Magenta) — das ist selten und differenzierend in einer Beratungsbranche, die meist auf Blau/Grau setzt. Logo ist typografisch und damit reproduzierbar. Die Inhaberinnen-Portraits mit Magenta-Backdrop sind ein gestalterischer Glücksgriff und müssen unbedingt erhalten bleiben.
- **Schwächen der bestehenden Umsetzung (das modernisieren wir):**
  - Hierarchie schwach: kein klares H1, alles wirkt gleich gewichtet.
  - Spacing eng, Sektionen wirken aneinandergedrückt.
  - Footer dunkel-magenta mit dunkler Schrift → schlechter Kontrast.
  - Mobile-Erfahrung träge (typisches OnePagePro-Theme aus 2020).
  - Keine sichtbaren CTAs auf der Homepage — der "Termin buchen"-Pfad ist versteckt.
  - Mehrsprachigkeit (DE/ES/PT) ist nur als Flag-Icons oben angedeutet, kein Statement.

**Konsistenz:** Die CD ist konsistent — die alte Seite hält sich an ihre eigenen Farben und Schriften. Modus B ist damit klar definierbar.

---

## Was Modus B konkret heisst (Spielregeln fürs Redesign)

✅ **Übernehmen (nicht-verhandelbar):**
- Primary `#9c519a` und Secondary `#fecc3d` exakt.
- Schriften Barlow Condensed + Open Sans.
- Logo unverändert (Datei: `Prime-Logo-PNG.png`).
- Bildstil: warme Portrait-Fotografie mit magenta Backdrop.
- Tonalität: Sie-Form, formell-warm, "ein Stück Freiheit für Sie" prominent.
- Mehrsprachiger Hinweis sichtbar (DE/ES/PT-Angebot).

✅ **Modernisieren (das ist unser eigentlicher Hebel):**
- Typo-Hierarchie sauber aufbauen (echtes H1, H2, H3).
- Spacing grosszügig, Sektionen klar getrennt.
- Footer mit besserem Kontrast (heller Text auf Magenta, oder dunkler Footer mit Magenta-Akzent).
- Mobile: moderne Hamburger-Nav, Sticky-Header, klare CTAs.
- Performance: optimierte Bilder, selbst-gehostete Fonts, semantisches HTML.
- CTAs prominent platzieren (Termin buchen / Anruf / E-Mail oben + unten).
- Mehrsprachigkeit als sichtbares Markenstatement ("Beratung auf Deutsch, Spanisch, Portugiesisch") statt nur Flag-Icons.

❌ **Nicht ändern:**
- Markenfarben nicht "abschwächen" oder durch "dezentere" Varianten ersetzen.
- Schriften nicht durch Inter / Helvetica tauschen.
- Logo nicht neu zeichnen.
- Portraits nicht durch Stock-Fotos ersetzen.
- Tonalität nicht zu locker / per Du machen.
