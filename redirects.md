# 301-Redirects — Alte URLs → Neue Anker

Mapping der alten WordPress-`?page_id=…`-URLs auf die entsprechenden Anker der neuen Single-Page-Site.

## Mapping-Tabelle

| Alte URL | Neue URL / Anker | Status |
|---|---|---|
| `/` | `/` | 200 (unverändert) |
| `/?page_id=149` | `/#leistungen` | 301 |
| `/?page_id=173` | `/#zeiten-anfahrt` | 301 |
| `/?page_id=187` | `/#zeiten-anfahrt` | 301 |
| `/?page_id=207` | `/#kontakt` | 301 |
| `/?page_id=342` | `/#kontakt` | 301 |
| `/?page_id=414` | `/#buero` | 301 |
| `/?lang=es` | `/#kontakt` (Phase 2: `/es/`) | 301 |
| `/?lang=pt-pt` | `/#kontakt` (Phase 2: `/pt/`) | 301 |
| `/?page_id=124&lang=es` | `/#kontakt` (Phase 2: `/es/`) | 301 |
| `/wp-content/uploads/2020/02/Prime-Andrea-01-wide.jpg` | `/assets/images/Prime-Andrea-01-wide.jpg` | 301 |
| `/wp-content/uploads/2020/02/Prime-Andrea-Luisa-wide.jpg` | `/assets/images/Prime-Andrea-Luisa-wide.jpg` | 301 |
| `/wp-content/uploads/2020/02/Prime-Buero-02-wide.jpg` | `/assets/images/Prime-Buero-02-wide.jpg` | 301 |
| `/wp-content/uploads/2020/02/Prime-Buero-03-wide.jpg` | `/assets/images/Prime-Buero-03-wide.jpg` | 301 |
| `/wp-content/uploads/2020/02/Prime-Buero-05-wide.jpg` | `/assets/images/Prime-Buero-05-wide.jpg` | 301 |
| `/wp-content/uploads/2020/02/Prime-Logo-PNG.png` | `/assets/images/Prime-Logo-PNG.png` | 301 |
| `/wp-content/uploads/2020/02/Prime-Luisa-01-wide.jpg` | `/assets/images/Prime-Luisa-01-wide.jpg` | 301 |
| `/wp-admin/*` | `/` | 301 |
| `/wp-login.php` | `/` | 301 |

## Netlify `_redirects`

```
# Page redirects (query-string-based → anchor)
/  /?page_id=149  /#leistungen     301
/  /?page_id=173  /#zeiten-anfahrt 301
/  /?page_id=187  /#zeiten-anfahrt 301
/  /?page_id=207  /#kontakt        301
/  /?page_id=342  /#kontakt        301
/  /?page_id=414  /#buero          301

# Sprachvarianten (Phase 1 → CTA-Sektion)
/  /?lang=es      /#kontakt 301
/  /?lang=pt-pt   /#kontakt 301

# Alte Asset-Pfade
/wp-content/uploads/2020/02/Prime-Andrea-01-wide.jpg     /assets/images/Prime-Andrea-01-wide.jpg     301
/wp-content/uploads/2020/02/Prime-Andrea-Luisa-wide.jpg  /assets/images/Prime-Andrea-Luisa-wide.jpg  301
/wp-content/uploads/2020/02/Prime-Buero-02-wide.jpg      /assets/images/Prime-Buero-02-wide.jpg      301
/wp-content/uploads/2020/02/Prime-Buero-03-wide.jpg      /assets/images/Prime-Buero-03-wide.jpg      301
/wp-content/uploads/2020/02/Prime-Buero-05-wide.jpg      /assets/images/Prime-Buero-05-wide.jpg      301
/wp-content/uploads/2020/02/Prime-Logo-PNG.png           /assets/images/Prime-Logo-PNG.png           301
/wp-content/uploads/2020/02/Prime-Luisa-01-wide.jpg      /assets/images/Prime-Luisa-01-wide.jpg      301

# WordPress-Admin-Wege ins Leere → Startseite
/wp-admin/*    /  301!
/wp-login.php  /  301!

# Hinweis: Netlify-Redirect-Engine wertet Query-Strings nur bei Verwendung von `_redirects` mit explizitem `splat`-Mapping korrekt aus.
# Für saubere Auslieferung evtl. besser per Netlify-Edge-Function oder server-side rewrite.
```

## Apache `.htaccess`

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On

  # ----- alte WP-page_id-URLs auf Anker -----
  RewriteCond %{QUERY_STRING} (^|&)page_id=149(&|$)
  RewriteRule ^$ /#leistungen? [R=301,L]

  RewriteCond %{QUERY_STRING} (^|&)page_id=173(&|$)
  RewriteRule ^$ /#zeiten-anfahrt? [R=301,L]

  RewriteCond %{QUERY_STRING} (^|&)page_id=187(&|$)
  RewriteRule ^$ /#zeiten-anfahrt? [R=301,L]

  RewriteCond %{QUERY_STRING} (^|&)page_id=207(&|$)
  RewriteRule ^$ /#kontakt? [R=301,L]

  RewriteCond %{QUERY_STRING} (^|&)page_id=342(&|$)
  RewriteRule ^$ /#kontakt? [R=301,L]

  RewriteCond %{QUERY_STRING} (^|&)page_id=414(&|$)
  RewriteRule ^$ /#buero? [R=301,L]

  # ----- Sprachvarianten (Phase 1: Stub → CTA) -----
  RewriteCond %{QUERY_STRING} (^|&)lang=(es|pt-pt)(&|$)
  RewriteRule ^$ /#kontakt? [R=301,L]

  # ----- Alte Asset-Pfade -----
  RewriteRule ^wp-content/uploads/2020/02/(Prime-[A-Za-z0-9_-]+\.(?:jpg|png))$ /assets/images/$1 [R=301,L]

  # ----- WordPress-Admin-Wege blockieren -----
  RewriteRule ^wp-admin(/.*)?$ / [R=301,L]
  RewriteRule ^wp-login\.php$  / [R=301,L]
</IfModule>
```

## Nginx (Referenz)

```nginx
# innerhalb des server-Blocks
if ($args ~ "page_id=149")  { return 301 /#leistungen; }
if ($args ~ "page_id=173")  { return 301 /#zeiten-anfahrt; }
if ($args ~ "page_id=187")  { return 301 /#zeiten-anfahrt; }
if ($args ~ "page_id=207")  { return 301 /#kontakt; }
if ($args ~ "page_id=342")  { return 301 /#kontakt; }
if ($args ~ "page_id=414")  { return 301 /#buero; }
if ($args ~ "lang=es")      { return 301 /#kontakt; }
if ($args ~ "lang=pt-pt")   { return 301 /#kontakt; }

location ~* ^/wp-content/uploads/2020/02/(Prime-[A-Za-z0-9_-]+\.(jpg|png))$ {
  return 301 /assets/images/$1;
}

location ~* ^/wp-admin(/.*)?$ { return 301 /; }
location  = /wp-login.php     { return 301 /; }
```

## Hinweise

- Alle Redirects sind als **301 (permanent)** angelegt — der Linkjuice aus Google soll vollständig übertragen werden.
- Asset-Pfade unter `/wp-content/uploads/2020/02/…` werden umgeleitet, damit externe Verlinkungen (z. B. von Facebook-Posts) nicht ins Leere laufen.
- Sobald die ES- und PT-Versionen in Phase 2 live sind: `lang=es` / `lang=pt-pt` auf `/es/` resp. `/pt/` umstellen.
