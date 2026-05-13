# Master-Briefing — Prime Consulting GmbH

Konsolidiertes Briefing für den Builder. Einzige Schnittstelle, der ganze Strategie-Kontext wurde hier reduziert auf das Wesentliche.

---

## Auftrag in einem Satz

Modernisiertes Redesign von prime-consulting.ch als **One-Page-Site (Multi-File HTML/CSS/JS)** im **Modus B (CD-Adoption)** — die bestehende Magenta-Marke und das Schrift-Pairing werden 1:1 übernommen, das Layout, die Hierarchie und die Performance werden komplett modernisiert.

## Zielsystem

Multi-File HTML/CSS/JS — direkt im Browser öffnen, später portierbar.

## CD-Modus

**B — CD-Adoption.** Farben, Schriften und Bildstil werden 1:1 übernommen. Modernisiert werden Layout, Spacing, Typo-Hierarchie, Mobile-Verhalten, Performance und Accessibility.

## Conversion-Strecke (Phase 1)

✅ Homepage als One-Page mit allen Hauptsektionen
✅ Kontakt-Sektion auf Homepage (CTA, NAP, Anfahrt)
✅ Leistungs-Sektion auf Homepage (5 Hauptleistungen + Detailliste)

---

## Design-Entscheidungen (verbindlich, aus `cd-audit.md`)

### Farben (1:1 aus Original-CSS, nicht-verhandelbar)

```css
:root {
  /* Brand */
  --color-primary: #9c519a;        /* Magenta — Hauptmarkenfarbe */
  --color-primary-dark: #7a3d79;   /* Hover-/Active-State, abgedunkelt */
  --color-secondary: #fecc3d;      /* Gold — Sekundärmarkenfarbe (CTAs, Akzente) */
  --color-secondary-dark: #e0b220; /* Hover-State Gold */

  /* Neutrals */
  --color-text: #2a2a2a;           /* Bodytext, leicht weicher als #000 */
  --color-text-muted: #6b6b6b;     /* Sekundärtext */
  --color-heading: #1a1a1a;        /* Headlines */
  --color-bg: #ffffff;             /* Haupt-Hintergrund */
  --color-bg-soft: #faf6f9;        /* Leicht magenta-getöntes Off-White für Sektion-Wechsel */
  --color-bg-alt: #f5f5f5;         /* Neutrale graue Sektion */
  --color-border: #e5e5e5;         /* Trennlinien */
  --color-border-soft: #f0f0f0;
}
```

**Verwendung Magenta:** Primary CTAs, Logo-Block, Pull-Quote-Hintergrund, Section-Akzente, Hover-States, Portrait-Backdrops.
**Verwendung Gold:** Sekundäre CTAs / Akzent-Buttons, Sprachflaggen-Hover, Telefon-Icon, kleine Highlights. Sparsam — nie als grosse Fläche, sonst kippt die Marke.

### Schriften

- **Headline-Schrift:** **Barlow Condensed** (Google Fonts, **selbst hosten**) — Schnitte: 400, 600 (zwei reichen)
- **Body-Schrift:** **Open Sans** (Google Fonts, **selbst hosten**) — Schnitte: 400, 600 (zwei reichen)
- **Insgesamt 4 Schnitte = Performance-Budget**

**Typo-Hierarchie:**
- `h1`: Barlow Condensed 600, 56–72px Desktop / 36–44px Mobile, line-height 1.05, optional all-caps für Section-Hero
- `h2`: Barlow Condensed 600, 36–44px / 28–32px, line-height 1.1, all-caps + letter-spacing 0.04em (matcht den Original-Charakter)
- `h3`: Barlow Condensed 600, 22–26px, normal-case
- Body: Open Sans 400, 17px / 16px, line-height 1.65
- Subhead / Pull-Quote: Barlow Condensed 400 italic OR Open Sans 600
- Buttons: Open Sans 600, uppercase, letter-spacing 0.08em

### Hero-Konzept

**Asymmetrischer Split** — Modus B verbietet nicht modernes Layout, nur abweichende Marke.

- **Links (~55%):** Editorial-Text-Block auf weissem Grund.
  - Eyebrow (klein, Gold-Akzent): "BERATUNG IN NEUENKIRCH — DEUTSCH · ESPAÑOL · PORTUGUÊS"
  - H1 in Barlow Condensed Bold, mehrzeilig: "Ein Stück Freiheit in der Schweizer Bürokratie."
  - Sub (Open Sans, ruhig): "Prime Consulting GmbH unterstützt Emigranten und lokale Klientinnen in Neuenkirch bei Steuern, Behörden und allen Themen rund um den Aufenthalt in der Schweiz."
  - Zwei CTAs nebeneinander: Primary (Magenta) "Termin vereinbaren" → `tel:+41412824344`, Secondary (Gold-Outline) "041 282 43 44 anrufen" → tel-Link
  - Kleiner Trust-Hinweis darunter: "📍 Surseestrasse 6, 6206 Neuenkirch — neben Leyla's Kebab"
- **Rechts (~45%):** Grossformatiges Foto **Andrea & Luisa zusammen** (`Prime-Andrea-Luisa-wide.jpg`), in echtem 4:5- oder 5:6-Format hochformatig gecroppt. Magenta-Block-Akzent dahinter versetzt (echte Marken-Backdrop-Anlehnung). Auf Mobile: Bild über Text.

Kein zentrierter Generic-Hero. Kein blasses Stockfoto. Kein Default-Gradient.

### Authentizitäts-Anker (mindestens 3 sichtbar)

1. **"Surseestrasse 6, 6206 Neuenkirch — neben Leyla's Kebab-Restaurant"** prominent im Hero und nochmals in der Anfahrt-Sektion (der "neben Leyla's Kebab"-Anker ist Gold wert).
2. **Inhaberinnen-Namen im Hero und in Team-Sektion**: Luisa Garrido, Andrea Fernandes.
3. **Tagline als grosse Pull-Quote-Sektion**: «Prime Consulting GmbH – ein Stück Freiheit für Sie» — in Magenta, gross.
4. **Sprachen explizit:** "Deutsch · Español · Português" im Hero-Eyebrow.
5. **Bus Nr. 72, Haltestelle Neuenkirch Kirche** in der Anfahrt.

---

## Performance-Budget

- Hero-Bild < 350 KB (WebP), Fallback JPG < 500 KB
- Restliche Bilder < 180 KB pro Stück
- 4 Schriftschnitte total, alle selbst gehostet als `.woff2`
- Kein jQuery, kein Framework, kein Bootstrap
- JS am `</body>`-Ende, kein blockierendes Script
- Inline-CSS nur fürs critical above-the-fold (optional)
- Ziel: Lighthouse Mobile Performance > 85

---

## Content-Plan (Sektions-Reihenfolge auf der Homepage)

1. **Top-Bar** (`#topbar`): kompakt, Magenta, Gold-Text. Links: Sprachflaggen (DE aktiv, ES/PT mit Toast-Handler). Rechts: Tel-Link + E-Mail-Link.
2. **Header** (`#header`, sticky): Logo links (Prime-Logo-PNG.png), Navigation rechts (Über uns | Leistungen | Team | Öffnungszeiten | Kontakt) + Termin-CTA (Magenta-Button).
3. **Hero** (`#hero`): wie oben beschrieben.
4. **Trust-Bar** (`#trust`): horizontale Reihe direkt nach Hero. Vier Punkte mit kleinem Icon: "🌍 Trilingual", "📍 Neuenkirch · Luzern", "🕒 5 Tage pro Woche", "🤝 Diskret & fair".
5. **Über uns** (`#ueber`): zwei Spalten. Links Eyebrow + H2 "Über uns" + Originaltext leicht gestrafft. Rechts: Werte-Pills (Kompetenz · Diskretion · Fairness · Faires Preis-Leistungs-Verhältnis · Weiterbildung), evtl. ein Büro-Foto als Akzent.
6. **Leistungen** (`#leistungen`): H2 "Unsere Dienstleistungen". Grid 2x3 oder 3x2 mit den 5 Hauptleistungen + einer "Diverse Dienstleistungen für Emigranten"-Karte. Jede Karte: Icon (einfaches Inline-SVG, monoline, Magenta), Titel, 1-Satz-Beschreibung.
7. **Sub-Sektion "So unterstützen wir Sie konkret"**: Detail-Liste (Anmeldung Wohngemeinde, Migrationsamt, Übersetzungen/Briefe/Formulare/Anrufe, Stellensuche, Wohnungssuche, Definitive Ausreise, Pensionierung) — als zwei-spaltige Liste mit Checkmarks oder Plus-Icons.
8. **Pull-Quote** (`#quote`): vollbreite Sektion, Magenta-Hintergrund, weisser Text, gross gesetzt: «Prime Consulting GmbH — ein Stück Freiheit für Sie». Darunter klein: kurze Erklärung in 2-3 Zeilen.
9. **Team** (`#team`): H2 "Inhaberinnen". Zwei grosse Portrait-Karten nebeneinander (auf Mobile gestapelt). Jede Karte: Foto mit Magenta-Backdrop (Original-Stil!), Name, Rolle, Sprachen, kurze Sprechblase / Quote falls verfügbar (TODO falls nicht — nur Name+Rolle+Sprachen).
10. **Unser Büro** (`#buero`): kompakte Galerie mit den 3 Büro-Bildern (Grid 3-spaltig, oder ein grosses + zwei kleine).
11. **Öffnungszeiten + Anfahrt** (`#zeiten-anfahrt`): zwei Spalten. Links: Öffnungszeiten als Tabelle. Rechts: Adresse + Anfahrt-Beschreibung (ÖV mit Bus Nr. 72, "neben Leyla's Kebab-Restaurant") + Static-Map-Link.
12. **Kontakt-CTA** (`#kontakt`): vollbreite Sektion mit Magenta-Akzent. Grosse H2 "Bereit, anzufangen?" + drei CTAs: Anrufen (primary), E-Mail (secondary), Termin (tertiary/Gold). Adresse + Öffnungszeiten kompakt.
13. **Footer**: dunkler Hintergrund (`#1a1a1a`) mit hellem Text. 3-spaltig: NAP-Block, Quick-Links (Sektionen-Anker), Sprachen+Rechtliches. Copyright + Impressum/Datenschutz als Not-Implemented-Toast-Links.

---

## Bild-Plan

| Slot | Datei | Verwendung | Optimierung |
|---|---|---|---|
| Hero | `Prime-Andrea-Luisa-wide.jpg` | beide Inhaberinnen zusammen | WebP konvertieren, ~250 KB, ggf. neu croppen für Hochformat-Anteil |
| Team links | `Prime-Luisa-01-wide.jpg` | Luisa Portrait | WebP, ~150 KB |
| Team rechts | `Prime-Andrea-01-wide.jpg` | Andrea Portrait | WebP, ~150 KB |
| Büro 1 | `Prime-Buero-02-wide.jpg` | Büro-Galerie | WebP, ~150 KB |
| Büro 2 | `Prime-Buero-03-wide.jpg` | Büro-Galerie | WebP, ~150 KB |
| Büro 3 | `Prime-Buero-05-wide.jpg` | Büro-Galerie | WebP, ~150 KB |
| Logo | `Prime-Logo-PNG.png` | Header + Footer | PNG behalten (mit Transparenz) |
| Fallback Luisa | `Prime-luisa.jpg` | wenn Hauptportrait nicht passt | reserve |
| Fallback Andrea | `prime-andrea.jpg` | reserve | reserve |

**Konvertierung:** Builder soll `cwebp` oder Pythons `pillow` nutzen, um WebP zu erzeugen. Wenn nicht verfügbar: Originale-JPG behalten, aber als WebP-Source im `<picture>`-Element verlinken und JPG als Fallback markieren (für später).

**Icons:** Keine Stock-Icons. Verwende einfache Inline-SVG-Strokes (1.5px stroke, currentColor) — z.B. Heroicons-Outline oder selbstgezeichnete. Konsistent monoline.

---

## Link-Struktur und Not-Implemented-Toasts

**Aktive Links:**
- `tel:+41412824344` (Hauptnummer)
- `tel:+41796891140` (Mobil)
- `mailto:info@prime-consulting.ch`
- Anker-Links auf alle Sektionen (#hero, #ueber, #leistungen, #team, #zeiten-anfahrt, #kontakt)
- Externer Google-Maps-Link (kein iframe!): `https://www.google.com/maps/search/?api=1&query=Surseestrasse+6%2C+6206+Neuenkirch`

**Toast-Links (mit `data-not-implemented`-Attribut):**
- Sprachflagge ES → "La versión en español estará disponible próximamente."
- Sprachflagge PT → "A versão em português estará disponível em breve."
- Footer "Impressum" → "Impressum wird in Kürze veröffentlicht."
- Footer "Datenschutz" → "Datenschutzerklärung wird in Kürze veröffentlicht."
- Termin-Buchung (falls nicht via tel:) → "Online-Termin-Buchung kommt in Kürze — bis dahin per Telefon oder E-Mail."

---

## SEO/GEO-Setup

### Meta-Tags

```html
<title>Prime Consulting GmbH — Beratung für Emigranten in Neuenkirch (DE · ES · PT)</title>
<meta name="description" content="Beratungsbüro in Neuenkirch (LU) für spanisch-, portugiesisch- und deutschsprachige Klienten. Steuern, RAV, Übersetzungen, Pensionierung. Termin: 041 282 43 44.">
<meta name="keywords" content="Beratung Neuenkirch, Steuererklärung Luzern, RAV Beratung Spanisch, Asesoría Lucerna, Aconselhamento Suíça, Emigranten Beratung">
<link rel="canonical" href="https://prime-consulting.ch/">
<html lang="de-CH">

<!-- hreflang (in Phase 1 nur DE aktiv, Self-Reference bleibt) -->
<link rel="alternate" href="https://prime-consulting.ch/" hreflang="de-CH">
<link rel="alternate" href="https://prime-consulting.ch/" hreflang="x-default">

<!-- Open Graph -->
<meta property="og:title" content="Prime Consulting GmbH — Beratung in DE · ES · PT">
<meta property="og:description" content="Beratungsbüro in Neuenkirch (LU). Steuern, Behörden, Pensionierung — auf Deutsch, Spanisch, Portugiesisch.">
<meta property="og:image" content="https://prime-consulting.ch/assets/images/og-image.jpg">
<meta property="og:url" content="https://prime-consulting.ch/">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_CH">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Prime Consulting GmbH — Beratung in DE · ES · PT">
<meta name="twitter:description" content="Beratungsbüro in Neuenkirch (LU). Steuern, Behörden, Pensionierung.">
<meta name="twitter:image" content="https://prime-consulting.ch/assets/images/og-image.jpg">
```

### JSON-LD Schema-Markup

Im `<head>` einbetten — drei Schemas:

1. **LocalBusiness** mit Adresse, Telefon, Öffnungszeiten, Geo-Koordinaten (Neuenkirch ungefähr: lat 47.2086, lon 8.1986).
2. **Organization** mit Logo-URL, Sprachen, Gründer (Person × 2).
3. **Service** (eines pro Hauptleistung): Steuererklärung, RAV-Beratung, Übersetzungen, Pensionierungsprozesse, Definitives Verlassen der Schweiz.

### robots.txt

**Entscheidung: AI-Bots erlauben.** Begründung: Kleines Beratungsbüro profitiert davon, in AI-Suche (ChatGPT, Perplexity, Claude) bei Anfragen wie "Steuerberater Spanisch Luzern" zitiert zu werden. Keine sensiblen Inhalte auf der Seite.

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://prime-consulting.ch/sitemap.xml
```

### sitemap.xml

Auch wenn One-Page: alle Anker als virtuelle URLs einreichen ist nicht sinnvoll — stattdessen nur `/` mit `lastmod` und Priority 1.0. Plus zukünftige Plätze für `/es` und `/pt` als Kommentare drin.

### llms.txt

Format strikt:

```markdown
# Prime Consulting GmbH

> Beratungsbüro in Neuenkirch (LU), spezialisiert auf bürokratische Unterstützung für spanisch-, portugiesisch- und deutschsprachige Emigranten und lokale Klientinnen.

Die Inhaberinnen Luisa Garrido (DE/ES) und Andrea Fernandes (DE/PT) bieten kompetente Beratung in den Bereichen Steuererklärungen, RAV-Prozesse, Übersetzungen, Pensionierung und definitives Verlassen der Schweiz. Werte: Kompetenz, Diskretion, Fairness, attraktives Preis-Leistungs-Verhältnis. Standort direkt an der Bushaltestelle Neuenkirch Kirche.

## Hauptseiten

- [Startseite](https://prime-consulting.ch/): Übersicht über Beratungsangebot, Team und Kontakt
- [Über uns](https://prime-consulting.ch/#ueber): Vorstellung des Beratungsbüros und der Werte
- [Dienstleistungen](https://prime-consulting.ch/#leistungen): Steuererklärungen, RAV, Übersetzungen, Pensionierung, definitives Verlassen der Schweiz
- [Team](https://prime-consulting.ch/#team): Luisa Garrido und Andrea Fernandes — zwei Inhaberinnen, dreisprachig DE/ES/PT
- [Öffnungszeiten & Anfahrt](https://prime-consulting.ch/#zeiten-anfahrt): Mo–Fr, Adresse, ÖV-Anbindung
- [Kontakt](https://prime-consulting.ch/#kontakt): Telefon, E-Mail, Terminvereinbarung

## Kontaktinformationen

- Adresse: Surseestrasse 6, 6206 Neuenkirch, Schweiz
- Telefon: +41 41 282 43 44
- Mobil: +41 79 689 11 40
- E-Mail: info@prime-consulting.ch
- Öffnungszeiten: Mo 13.30–18.00 / Di–Mi 09.00–12.30 + 13.30–18.00 / Do 09.30–12.30 + 13.30–20.00 / Fr 09.00–12.30 + 13.30–17.00 / Sa nach Vereinbarung
- ÖV: Bus Nr. 72 ab Luzern, Haltestelle "Neuenkirch Kirche", direkt rechts der Haltestelle neben Leyla's Kebab-Restaurant
- Sprachen: Deutsch, Spanisch, Portugiesisch

## Optional

- Impressum (in Vorbereitung)
- Datenschutzerklärung (in Vorbereitung)
```

---

## Datenschutz-Hinweise (aus relaunch-risks.md)

- Kein Tracking, keine Analytics in Phase 1
- Google Fonts: **selbst hosten** via `@font-face` aus `assets/fonts/` (keine CDN-Calls an fonts.gstatic.com)
- Google Maps: **Static-Link** (öffnet google.com/maps) statt iframe
- Kontaktformular: NICHT in Phase 1 (nur Telefon-/E-Mail-Links)
- Datenschutzerklärung: Toast "in Kürze", Phase 2

---

## Output-Struktur

```
prime-consulting/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── Prime-Andrea-Luisa-wide.jpg  (Original — bereits da)
│   │   ├── Prime-Andrea-Luisa-wide.webp (zu generieren)
│   │   ├── Prime-Luisa-01-wide.jpg
│   │   ├── Prime-Andrea-01-wide.jpg
│   │   ├── Prime-Buero-02-wide.jpg
│   │   ├── Prime-Buero-03-wide.jpg
│   │   ├── Prime-Buero-05-wide.jpg
│   │   └── Prime-Logo-PNG.png
│   └── fonts/
│       ├── BarlowCondensed-Regular.woff2
│       ├── BarlowCondensed-SemiBold.woff2
│       ├── OpenSans-Regular.woff2
│       └── OpenSans-SemiBold.woff2
├── robots.txt
├── sitemap.xml
├── llms.txt
└── redirects.md         (Mapping alter ?page_id-URLs)
```

---

## Referenz-Files (im Output-Verzeichnis bereits vorhanden)

- `reference/desktop.png`, `reference/mobile.png` — Screenshots der alten Seite
- `cd-audit.md` — Farben + Schriften + Bildstil Details
- `content-inventory.md` — alle Originaltexte mit Übernahme-Entscheidung
- `redesign-brief.md` — Strategie + UX-Diagnose
- `relaunch-risks.md` — Datenschutz, SEO, Termin-Buchung Risiken
- `seo-baseline.md` — Original-SEO-Zustand (Baseline für Übergabe-Check)
- `old-website-links.md` — alle alten URLs
- `TODO.md` — Phase-1/Phase-2 Aufgaben + offene Fragen
- `raw-scrape/` — Original-HTML, content.txt, links.json
- `assets/images/` — alle Originalbilder bereits heruntergeladen

---

## Builder-Reminder (verbindlich)

1. **Modus B**: Marke nicht ändern. Magenta + Gold + Barlow Condensed + Open Sans = nicht-verhandelbar.
2. **Echte Originalbilder verwenden** — keine Stock-Fotos, keine AI-Bilder von Personen/Räumen.
3. **Echte Originaltexte verwenden** — keine "innovativen Lösungen", kein Marketing-Sprech. Originaltexte aus content-inventory.md.
4. **Authentizitäts-Anker eingebaut**: mindestens 3 (Leyla's Kebab + Tagline + Inhaberinnen + Bus 72 + DE/ES/PT).
5. **Self-hosted Fonts** — keine externen Google-Fonts-Calls. Wenn die `.woff2`-Files nicht heruntergeladen werden können, fallback auf system-fonts mit klarem `<!-- TODO: woff2 herunterladen -->`-Kommentar.
6. **Sticky-Header** mit kompakter Höhe, transparent oben, weiss/solid beim Scrollen.
7. **Accessibility**: Focus-States überall, `aria-expanded` am Mobile-Menü, `lang="de-CH"`, alle Bilder mit beschreibendem `alt`, Touch-Targets ≥ 44px.
8. **Performance-Budget einhalten** — kein jQuery, kein Bootstrap, kein Framework. Vanilla.
9. **Toasts** für alle nicht-implementierten Links (siehe Link-Struktur oben).
10. **Schema-Markup** JSON-LD im `<head>`.
