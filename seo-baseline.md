# SEO Baseline — prime-consulting.ch

Captured: 2026-05-13
Source URL: https://prime-consulting.ch/
Platform detected: WordPress 6.8.5 + WPML 4.9.2.1 (theme uses "OnePagePro" — single-page layout)

---

## 1. Meta Tags (Original)

### Document
- `<html lang="de-DE">`
- `<title>` = **Prime Consulting**

### Meta tags present
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="max-image-preview:large" />
<meta name="generator" content="WordPress 6.8.5" />
<meta name="generator" content="WPML ver:4.9.2.1 stt:3,41,2;" />
<meta name="google-site-verification" content="gHesPPPuIyEoHjISQvXVRpcPZetdOuj6CLr7v7JwLJ4" />
```

### Link tags (canonical, alternates, feeds)
- `<link rel="canonical" href="https://prime-consulting.ch/" />`
- `<link rel="alternate" hreflang="de" href="https://prime-consulting.ch/" />`
- `<link rel="alternate" hreflang="pt-pt" href="https://prime-consulting.ch/?lang=pt-pt" />`
- `<link rel="alternate" hreflang="es" href="https://prime-consulting.ch/?lang=es" />`
- `<link rel="alternate" hreflang="x-default" href="https://prime-consulting.ch/" />`
- RSS feeds: `?feed=rss2`, `?feed=comments-rss2`

### What is MISSING (important)
- No `<meta name="description">` — major gap
- No `<meta name="keywords">` (low priority, but absent)
- No Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`)
- No Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- No JSON-LD / Schema.org structured data (no LocalBusiness, Organization, ContactPoint)
- No favicon-related meta beyond default
- No `theme-color` meta

---

## 2. Headings Structure (H1 / H2 / H3 in order)

Static HTML scan of homepage:

| Order | Tag | Text |
|-------|-----|------|
| 1 | H3 | Über uns |

**No H1 exists on the homepage.** No H2 exists either. The only heading rendered server-side is a single H3 ("Über uns"). All other visible section labels ("Dienstleistungen", "Öffnungszeiten", "Terminvereinbarung", "Kontakt", "Anfahrt", "Unser Büro") appear to be styled `<div>`/menu links, not semantic headings.

Visible section labels used as nav anchors (likely rendered as text widgets, not headings):
- Über uns
- Dienstleistungen
- Öffnungszeiten
- Terminvereinbarung
- Kontakt
- Anfahrt
- Unser Büro

This is a **critical accessibility + SEO defect** in the current site.

---

## 3. robots.txt Summary + AI-Bot Policy

### Status
- URL: https://prime-consulting.ch/robots.txt
- HTTP status: **404 Not Found** (nginx serves a generic HTML 404 page)
- Raw file saved: `/Users/dominicegli/prime/prime-consulting/robots-original.txt` (contains the 404 HTML; there is no actual robots.txt)

### Effective policy
No robots.txt = default behaviour = **everything is crawlable by every bot.**

### AI-Bot Policy (currently)
None of the following are explicitly disallowed (because no robots.txt exists):
- GPTBot (OpenAI) — implicit ALLOW
- Google-Extended (Google AI training) — implicit ALLOW
- ClaudeBot / anthropic-ai (Anthropic) — implicit ALLOW
- PerplexityBot — implicit ALLOW
- CCBot (Common Crawl) — implicit ALLOW
- Applebot-Extended, Bytespider, FacebookBot — implicit ALLOW

The on-page `<meta name="robots" content="max-image-preview:large" />` only affects image preview size in SERPs; it does not block any crawler.

---

## 4. sitemap.xml Summary

### Status
- URL: https://prime-consulting.ch/sitemap.xml → **404 Not Found**
- URL: https://prime-consulting.ch/wp-sitemap.xml (WordPress 5.5+ default) → **404 Not Found**
- Raw file saved: `/Users/dominicegli/prime/prime-consulting/sitemap-original.xml` (contains the 404 HTML; no real sitemap exists)
- URL count in sitemap: **0** (no sitemap published)

This is unusual given WordPress 6.8.5 normally exposes `/wp-sitemap.xml` automatically — likely disabled by the theme or a plugin (WPML can override this).

---

## 5. URL Structure Inventory

Derived from `/Users/dominicegli/prime/prime-consulting/raw-scrape/links.json`. The site is a **WordPress one-pager**; there are no clean permalinks (e.g. no `/leistungen`, `/team`, `/kontakt`). All "pages" are referenced as query-string IDs.

### Indexable URLs
| URL | Notes |
|-----|-------|
| `https://prime-consulting.ch/` | Homepage (de-DE, the canonical) |
| `https://prime-consulting.ch/?lang=es` | Spanish translation (WPML) |
| `https://prime-consulting.ch/?lang=pt-pt` | Portuguese translation (WPML) |
| `https://prime-consulting.ch/?page_id=124&lang=es` | Spanish sub-page (page id 124) |
| `https://prime-consulting.ch/?page_id=149` | Sub-page (likely Impressum/Kontakt) |
| `https://prime-consulting.ch/?page_id=173` | Sub-page |
| `https://prime-consulting.ch/?page_id=187` | Sub-page |
| `https://prime-consulting.ch/?page_id=207` | Sub-page |
| `https://prime-consulting.ch/?page_id=342` | Sub-page |
| `https://prime-consulting.ch/?page_id=414` | Sub-page |

### On-page anchors (one-page navigation)
- `#onepagepro-mobile-menu` (mobile nav)
- Section IDs in DOM: `#gdlr-core-column-81357`, `#gdlr-core-column-34938`, `#gdlr-core-column-70931` (theme-generated, not human-friendly)

### Media URLs (in homepage, must redirect or preserve)
- `/wp-content/uploads/2020/02/Prime-Andrea-01-wide.jpg`
- `/wp-content/uploads/2020/02/Prime-Andrea-Luisa-wide.jpg`
- `/wp-content/uploads/2020/02/Prime-Buero-02-wide.jpg`
- `/wp-content/uploads/2020/02/Prime-Buero-03-wide.jpg`
- `/wp-content/uploads/2020/02/Prime-Buero-05-wide.jpg`
- `/wp-content/uploads/2020/02/Prime-Luisa-01-wide.jpg`
- `/wp-content/uploads/2020/03/Prime-luisa.jpg`
- `/wp-content/uploads/2020/03/prime-andrea.jpg`

### Languages currently served
- German (de-DE) — primary
- Spanish (es)
- Portuguese (pt-pt)

---

## 6. Notes / Risks for the Redesign

### What MUST be preserved to avoid ranking loss

1. **Canonical homepage URL.** `https://prime-consulting.ch/` must stay reachable at HTTP 200 with the same primary language (de-DE).
2. **Hreflang relationships.** The site is multilingual via WPML (DE / ES / PT-PT). Replacement must either keep the same `?lang=` URLs or set up 301 redirects from the old `?lang=es` and `?lang=pt-pt` query URLs to the new language paths (e.g. `/es/`, `/pt/`). Without this, all multilingual SEO equity is lost.
3. **301 redirects for `?page_id=…` URLs.** All seven page-IDs (149, 173, 187, 207, 342, 414, plus 124 in ES) may be indexed in Google. Map each to its new pretty URL and add a server-level 301. Without redirects → 404s → ranking loss.
4. **Google Site Verification token.** `gHesPPPuIyEoHjISQvXVRpcPZetdOuj6CLr7v7JwLJ4` — re-add the meta tag on the new site OR transfer verification by DNS, otherwise Search Console access breaks.
5. **Brand/business name in title.** "Prime Consulting" must remain in the `<title>` (likely extend it with USP + location, e.g. "Prime Consulting GmbH — Beratung für Emigranten in Neuenkirch, Luzern").
6. **NAP (Name / Address / Phone) consistency** — these are the strongest signals on the current site:
   - Prime Consulting GmbH
   - Surseestrasse 6, 6206 Neuenkirch
   - Tel. 041 282 43 44 / Mobil 079 689 11 40
   - info@prime-consulting.ch
   Identical wording must appear on the new site (footer + contact) so Google does not treat it as a new business.
7. **Image URLs.** Either keep the `/wp-content/uploads/2020/…` paths or 301-redirect them to new asset locations. Image SEO traffic for "Prime Andrea / Luisa / Büro" should not be discarded.
8. **RSS feed URLs** (`?feed=rss2`). Low priority but if any aggregators subscribe, 301 to a new feed or kill cleanly with 410.

### Quick wins to ADD in the redesign (currently absent)
- Real `<h1>` (e.g. "Prime Consulting GmbH — Beratung in Neuenkirch") and a proper H2 outline for each section
- `<meta name="description">` in DE / ES / PT (≈150 chars each) — currently missing entirely
- Open Graph + Twitter Card tags (for WhatsApp, LinkedIn, X previews)
- JSON-LD `LocalBusiness` / `ProfessionalService` schema (address, phone, opening hours, geo, sameAs, areaServed = Luzern/Neuenkirch/Schweiz) — huge GEO/AI-search win
- Real `robots.txt` (allow all, declare sitemap location, optionally allow/disallow specific AI bots per business decision)
- Real `sitemap.xml` (or `wp-sitemap.xml`) with hreflang annotations for all three languages
- Explicit AI-bot policy decision: today every AI crawler is allowed by default. The redesign is the right moment to consciously allow or block GPTBot / Google-Extended / ClaudeBot / PerplexityBot / CCBot.
- Pretty permalinks: replace `?page_id=149` style with `/leistungen/`, `/team/`, `/kontakt/`, `/impressum/`.
- Favicon + `theme-color` + apple-touch-icon

### Risks specific to this site
- **One-pager → multi-page migration risk:** if the redesign splits content into `/leistungen`, `/team`, `/kontakt`, any external backlink to `https://prime-consulting.ch/` still lands on the homepage (good), but anchor links (`#…`) become invalid. Keep the same German section labels as on-page anchors or as `/leistungen#…` etc.
- **WPML query-string URLs are indexed.** Before launch, export the indexed URL list from Google Search Console and build the complete 301 map.
- **Sitemap & robots.txt currently 404.** The new site MUST publish both at the standard locations — this alone is a measurable improvement vs. the baseline.

### Files saved alongside this baseline
- `/Users/dominicegli/prime/prime-consulting/homepage-raw.html` — full HTML capture of homepage
- `/Users/dominicegli/prime/prime-consulting/robots-original.txt` — captured response (currently 404 HTML)
- `/Users/dominicegli/prime/prime-consulting/sitemap-original.xml` — captured response (currently 404 HTML)
- `/Users/dominicegli/prime/prime-consulting/raw-scrape/links.json` — internal link inventory
- `/Users/dominicegli/prime/prime-consulting/raw-scrape/content.txt` — extracted page text
