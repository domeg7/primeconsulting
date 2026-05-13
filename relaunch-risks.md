# Relaunch-Risiken — Prime Consulting GmbH

Konkrete Punkte, die beim Go-Live nachgeklärt / nachgeholt werden müssen.

---

## Datenschutz (nDSG / DSGVO)

- **Google Fonts:** Im Redesign werden Barlow Condensed + Open Sans **selbst gehostet** (lokale `.woff2`-Files in `assets/fonts/`), nicht via CDN. Verhindert Consent-Pflicht.
- **Google Maps:** statt iframe-Embed wird ein **Static-Map-Image** verlinkt (kein Tracking). Oder ein einfacher "In Maps öffnen"-Link.
- **Analytics / Tracking:** keine in Phase 1.
- **Cookies:** keine, weil keine Tracking-Tools eingebunden.
- **Kontaktformular:** in Phase 1 NICHT gebaut. Bei Aufnahme in Phase 2 ist Consent / Datenschutzerklärung Pflicht.
- **Datenschutzerklärung:** als Toast-Placeholder im Footer; Inhalt muss von den Inhaberinnen geliefert werden.
- **Impressum:** ebenso als Toast-Placeholder; Inhalt muss geliefert werden.

## SEO / Ranking-Verlust

- **URL-Struktur ändert sich** von `?page_id=149|173|187|207|342|414` zu Pretty-Permalinks bzw. Anker auf der One-Page-Site.
- **301-Redirects sind nötig** (siehe `redirects.md`, wird erstellt). Diese müssen serverseitig (oder via Netlify `_redirects` / Apache `.htaccess`) eingerichtet werden — der Skill-Output liefert die Mapping-Liste, das eigentliche Einrichten ist Hosting-spezifisch.
- **Google Site Verification:** Token aus alter Seite (`google-site-verification` Meta-Tag) bleibt erhalten — bereits im Briefing dokumentiert. Alternativ DNS-Verifikation.
- **hreflang:** in Phase 1 nur DE aktiv. Sobald ES/PT live sind, hreflang neu setzen (war im Original korrekt, geht aber temporär verloren).

## Mehrsprachigkeit

- ES- und PT-Versionen werden in Phase 1 NICHT gebaut — die Sprachschalter-Links zeigen einen Toast "Versión en español próximamente / Versão em português em breve".
- Die mehrsprachige Beratung als USP bleibt sichtbar (Hero, Team, Trust-Bar) — der Service besteht weiter, nur die Sprachversion der Website ist Phase 2.

## Termin-Buchung

- Bookly-Plugin (WordPress) ist nicht 1:1 portierbar. In Phase 1: CTA "Termin vereinbaren" → `tel:` + `mailto:` als Fallback, plus Hinweis "Online-Buchung folgt".
- **Empfehlung für Phase 2:** Cal.com (open-source, selbst hostbar) oder Calendly (hosted) — beide mit Embed-Widget. Datenschutz beachten (Cal.com ist in der EU/CH einfacher).

## Performance

- Original-Site lädt ~16 CSS-Files, Bookly + jQuery + Multilingual-Plugin. Performance vermutlich Lighthouse-Mobile <50.
- Redesign-Ziel: Lighthouse-Mobile **> 85**.
- Bilder werden zu WebP konvertiert und ggf. mehrfach komprimiert vor dem Einbinden.
- Keine externen JS-Bibliotheken (kein jQuery, kein Bootstrap) — pures Vanilla-JS.

## Rechtlich kritische Inhalte

- **Heilversprechen / Garantien:** keine vorhanden — Beratungsbranche, neutral formuliert. Kein Risiko.
- **Preisangaben:** keine im Original — wir machen auch keine im Redesign, ausser die Inhaberinnen liefern eine offizielle Preisliste.
- **AGB / Mandatsvertrag:** im Original kein Hinweis, im Redesign auch nicht. Kann später als PDF-Link ergänzt werden.

## To-do beim Go-Live (Übergabe an Inhaberinnen)

1. 301-Redirects auf dem Hosting einrichten (Liste in `redirects.md`).
2. Google Search Console: alte Property prüfen, ggf. neue URL einreichen.
3. Sitemap einreichen (`/sitemap.xml`).
4. Impressum + Datenschutzerklärung finalisieren.
5. Termin-Buchungstool für Phase 2 evaluieren.
6. Entscheidung über ES/PT-Sprachversionen (Phase 2 oder Wartung der WordPress-Versionen parallel).
7. AI-Bot-Policy in `robots.txt` final bestätigen (siehe `master-briefing.md`).
