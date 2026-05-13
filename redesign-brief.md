# Redesign-Brief — Prime Consulting GmbH

Strategischer Brief: Wofür modernisieren wir die Seite — bevor wir gestalten?

---

## Strategischer Teil

### 1. Primäres Website-Ziel
**Termin / Erstkontakt generieren.** Die Seite soll Neu-Interessenten (insbesondere spanisch-/portugiesisch-sprechende Emigranten in der Region Luzern) so weit bringen, dass sie entweder anrufen, eine E-Mail schreiben oder einen Termin vereinbaren. Aktuell ist die Conversion-Strecke unklar — kein sichtbarer CTA auf der Homepage.

### 2. Wichtigste Zielgruppe
Zwei Hauptgruppen:
- **Primär:** Spanisch- und portugiesisch-sprechende Emigranten in der Zentralschweiz, die bürokratische Hilfe brauchen (Steuern, RAV, Migrationsamt, Wohnungssuche, Pensionierung, Rückkehr). Oft begrenztes Deutsch, hohe Unsicherheit gegenüber Schweizer Behörden, suchen vertrauensvolle muttersprachliche Begleitung.
- **Sekundär:** Deutschsprachige Privatpersonen aus Neuenkirch und Umgebung (Sempachersee-Region), die einen lokalen Steuer-/Verwaltungsberater suchen.

### 3. Primäre Conversion
**Telefon-Anruf oder Termin-Vereinbarung.** Bei der primären Zielgruppe (Emigranten) ist der Anruf oft niederschwelliger als ein Formular oder Online-Termin — die Bereitschaft, eine echte Person zu hören (in der eigenen Sprache), ist hoch. Daher: telefonnummer prominent, klickbar als `tel:`-Link. Online-Termin als Sekundär-Option.

### 4. Wichtigste Nutzerfrage nach 5 Sekunden
Vier Antworten müssen ohne Scrollen klar sein:
- **Was?** Beratung für Emigranten in der Schweiz (Steuern, Behörden, Bürokratie).
- **Für wen?** Spanisch-, portugiesisch- und deutschsprachige Klienten.
- **Wo?** Neuenkirch, Kanton Luzern.
- **Was als Nächstes?** Anrufen oder Termin vereinbaren.

### 5. Vertrauensbeweise, die sichtbar sein müssen
- Echte Fotos der zwei Inhaberinnen (Luisa & Andrea) — sind vorhanden.
- Konkrete Adresse + Telefonnummer prominent.
- "Seit 2020"-Marker (Site wurde 2020 erstellt; Geschäft ggf. älter — TODO klären).
- Mehrsprachigkeit als sichtbares Statement (DE/ES/PT).
- Klare Liste der Dienstleistungen mit konkreten Beispielen.

### 6. Content der erhalten bleiben muss
- **Tagline:** «Prime Consulting GmbH – ein Stück Freiheit für Sie»
- **Lokale Anker:** "neben Leyla's Kebab-Restaurant", Bus Nr. 72, "Neuenkirch Kirche"-Haltestelle
- **Inhaberinnen-Namen + Sprachen:** Luisa Garrido (DE/ES), Andrea Fernandes (DE/PT)
- **5 Hauptleistungen:** Steuererklärungen, RAV Prozesse, Übersetzungen, Pensionierungsprozesse, Definitives Verlassen der Schweiz
- **Wertewörter:** Kompetenz, Diskretion, Fairness, Preis-Leistungsverhältnis, Weiterbildung
- **NAP:** Surseestrasse 6 / 6206 Neuenkirch / 041 282 43 44 / Mobil 079 689 11 40 / info@prime-consulting.ch
- **Öffnungszeiten** in voller Detailtiefe

### 7. Content der gekürzt / verschoben / entfernt werden kann
- Überlange Bandwurmsätze (Bürokratie-Einleitung) → straffen.
- Doppelte Top-Bar-Hinweise → reduzieren.
- Veraltete WordPress-Plugin-Artefakte (Bookly, Slider) → entfernen.

### 8. Risiken beim Redesign
- **Ranking-Verlust:** URLs ändern sich von `?page_id=149` zu pretty Permalinks → 301-Redirects nötig.
- **Mehrsprachigkeit:** Wenn ES/PT komplett wegfallen, verlieren wir wichtigen USP. Sichtbar machen, dass Sprachen weiter angeboten werden, auch wenn Sprachversionen erst Phase 2 sind.
- **Stammkunden-Vertrautheit:** Magenta-Brand-Identität nicht abschwächen — sonst denken Stammkunden, sie seien auf der falschen Seite.
- **Rechtliches:** Impressum + Datenschutz müssen vorhanden sein (mind. als Placeholder mit "wird bald veröffentlicht"-Hinweis).
- **Termin-Buchung:** Wenn Bookly wegfällt, brauchen wir einen Ersatz-Pfad — sonst kein Buchungsweg.

---

## UX-/Conversion-Diagnose

### 9. Welche Aufgabe erfüllt die Seite konkret?
Erstkontakt-Generierung bei einer hochgradig erklärungsbedürftigen Dienstleistung (Bürokratie-Hilfe für Emigranten) mit hohem Vertrauensbedarf.

### 10. Einwände der Zielgruppe
- **Sprachbarriere:** "Verstehen die mich? Sprechen die meine Sprache?" → muss sofort sichtbar sein.
- **Anonymität/Bürokratie-Angst:** "Wer sitzt da? Kann ich denen vertrauen?" → Inhaberinnen-Fotos + Namen.
- **Preis-Unsicherheit:** "Was kostet das? Werde ich abgezockt?" → "Faire Preise" / "transparente Beratung" kommunizieren; konkrete Preisangaben wären ideal aber sind TODO.
- **Erreichbarkeit:** "Wo sind die? Komme ich da hin?" → Adresse, ÖV-Anbindung, lokaler Anker.
- **Kompetenz:** "Wissen die, was sie tun?" → "Regelmässige Weiterbildung", konkrete Themen, Werte.

### 11. Wo entsteht Vertrauen?
- Echte Portraits mit Namen.
- Konkrete Adresse + lokaler Anker ("neben Leyla's Kebab-Restaurant").
- Bus-Linie und Haltestelle benannt.
- Konkrete Dienstleistungs-Listen (statt "umfassende Beratung").
- Mehrsprachigkeit explizit kommuniziert.
- Tagline "ein Stück Freiheit" trifft genau den emotionalen Punkt der Zielgruppe.

### 12. Wo verliert die alte Seite Vertrauen?
- Outdated Design-Sprache (WordPress-Template, 2020).
- Fehlende H1 / klare Botschaft — "Was ist das?" ist nicht in 5 Sekunden beantwortet.
- Footer mit schlechtem Kontrast (dunkle Schrift auf dunklem Magenta).
- Versteckte CTAs.
- "JavaScript erforderlich"-Hinweise (z.B. beim Kontaktformular).
- Mobile-Performance vermutlich schwach.

### 13. CTA-Struktur (im Redesign)
**Primärer CTA:** "Termin vereinbaren" → führt zu Telefon-Link + E-Mail-Link (mit Hinweis "Online-Buchung folgt in Kürze"). Wiederholt:
- Im Hero (oben rechts oder unter Headline)
- Im Sticky-Header (klein) als Tel-Icon + Termin-Button
- Nach der Leistungs-Sektion
- Nach der Pull-Quote-Sektion
- Im Footer

**Sekundärer CTA:** "Anrufen: 041 282 43 44" als `tel:`-Link, immer in der Nähe des primären.

**Tertiärer CTA:** "E-Mail schreiben: info@prime-consulting.ch" — sichtbar im Footer und auf der Kontakt-Sektion.

### 14. Conversion-stützende Inhalte (Pflicht auf Homepage)
- Hero mit klarer Botschaft.
- Trust-Bar (Sprachen, Region, kurze Werte).
- Leistungs-Übersicht (5 Hauptleistungen + Detail-Liste Emigranten-Support).
- Pull-Quote / Markenversprechen.
- Team-Sektion (zwei Portrait-Karten).
- Öffnungszeiten + Anfahrt (kompakt).
- Kontakt-Sektion mit allen Daten.
- Footer mit NAP + Rechtliches.

### 15. Kritische Nutzerpfade
- **Pfad A — spanischsprachige Erstbesucherin sucht Steuer-Beratung:**
  Landing → sieht "Beratung auf Español" → scrollt zu Leistungen → sieht "Steuererklärungen" → ruft an oder klickt Termin-CTA.
- **Pfad B — portugiesischer Familienvater braucht RAV-Hilfe:**
  Landing → sieht Andrea Fernandes (PT) → scrollt zu Leistungen → "RAV Prozesse" → klickt Termin oder kopiert Telefonnummer.
- **Pfad C — Stammkunde sucht Öffnungszeiten:**
  Landing → scrollt schnell zu Öffnungszeiten / Anfahrt → findet Info → erledigt.
- **Pfad D — Neuanfrage definitive Ausreise:**
  Landing → "Dienstleistungen für Auswanderer" → "Definitives Verlassen der Schweiz" → Kontakt.

Alle vier Pfade müssen auf der Homepage in unter 30 Sekunden möglich sein.

---

## Conversion-Strecke Phase 1

✅ **Homepage** (mit allen Sektionen inkl. Leistungen, Team, Kontakt, Öffnungszeiten)
✅ **Kontaktsektion auf Homepage** — primärer und sekundärer CTA, Adresse, Öffnungszeiten, Anfahrt-Hinweis, Tel + E-Mail
✅ **Leistungs-Sektion auf Homepage** — 5 Hauptleistungen + Detailliste Emigranten-Support + Pull-Quote

Phase 1 wird als **One-Page-Design** umgesetzt, weil die Site klein ist und alle wichtigen Conversion-Elemente auf einer Seite gut Platz haben. Dies entspricht auch dem Original-Charakter (OnePagePro-Theme).

---

## Phase 2 (nach Rücksprache)

- Vollständige ES- und PT-Sprachversionen.
- Eigenständige Kontaktseite mit Formular + Backend.
- Online-Termin-Buchung (Calendly/Cal.com-Integration).
- Datenschutzerklärung + Impressum (eigene Unterseiten).
- Bewertungen / Testimonials.
- Detailseite "Prime Package" (wenn die Inhaberinnen das Konzept liefern).
