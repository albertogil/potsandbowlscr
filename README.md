# Pots & Bowls

Static source for [potsandbowlscr.com](https://www.potsandbowlscr.com/).

## Principles

- Plain HTML, CSS, and small progressive-enhancement JavaScript.
- No framework, build step, trackers, or cookies by default.
- Production files are deployed manually from `main` through GitHub Actions only after the DreamHost secrets are configured.
- Never commit WordPress exports, credentials, customer data, or private operational documents.

## Local preview

```sh
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080`.

## Migration status

The home page, original photographs, and current public menu URLs are represented here. The current menus are retained as optimized visual menus; a future content pass can transcribe them into searchable HTML. The static site is live on DreamHost.

## DreamHost deployment

This repository has its **own DreamHost SSH user and document root**. Do not reuse the Pascual SSH user, path, or GitHub secrets.

The following repository-scoped GitHub Actions secrets are configured under **Settings → Secrets and variables → Actions** in `albertogil/potsandbowlscr`:

- `DREAMHOST_SSH_PRIVATE_KEY`
- `DREAMHOST_HOST`
- `DREAMHOST_USER`
- `DREAMHOST_PATH`

Secret values must never be committed or copied into another repository. To publish an approved update, open **Actions → Deploy static site to DreamHost → Run workflow**. The workflow runs only on manual dispatch and uploads the static files from `main`.

## Search Console

Google Search Console uses the URL-prefix property `https://www.potsandbowlscr.com/`. Keep the `google-site-verification` meta tag in `index.html` when editing the page. The submitted sitemap is `sitemap.xml`.

## Analytics

Google Analytics 4 property: **Pots & Bowls**. Measurement ID: `G-0P83R9X73T`. `assets/js/analytics.js` loads the Google tag only after a visitor accepts analytics; keep its matching measurement-ID meta tag on indexable pages. Enhanced measurement is enabled. Do not send personal information through page URLs, forms, or Analytics events.

## Current production setup

- **Hosting:** DreamHost serves the live static site. GitHub stores the source; GitHub Pages is not used because DreamHost handles the custom domain and Apache redirects.
- **Deployment:** Push approved changes to `main`, then manually run **Actions → Deploy static site to DreamHost → Run workflow**. The workflow uses this repository’s own DreamHost secrets and deliberately does not delete unspecified remote files.
- **Search:** Google Search Console and Bing Webmaster Tools are configured for `https://www.potsandbowlscr.com/`; both use the production sitemap. Retain `robots.txt`, `sitemap.xml`, canonical tags, and the Search Console verification tag.
- **SEO:** Indexable pages have titles, descriptions, canonical URLs, Open Graph/Twitter metadata, image alternatives, and Organization/Restaurant JSON-LD structured data for both locations. Google Rich Results Test found 5 valid eligible items on 2026-09-20.
- **Privacy:** The visitor consent notice controls Analytics loading. `/privacy/` is intentionally `noindex`.
- **Performance:** The 2026-09-19 desktop Lighthouse baseline was 97 performance / 95 accessibility / 100 best practices / 100 SEO. After the color adjustment, the 2026-09-20 accessibility follow-up reached 100 with no weighted findings.

### Remaining follow-up

- Add exact street addresses, hours, reservation links, price range, and Google Business Profile URLs before enriching the local-business listings.
- Confirm the current menus, then transcribe the visual menu pages into accessible, searchable HTML while retaining the images.
- Choose an encrypted offsite destination before creating the legacy WordPress archive.
- Review GA4 and Search Console after real visitor traffic has accumulated.

## Redirects

`redirects.csv` is the reviewed redirect inventory. `.htaccess` applies its permanent redirects at DreamHost as part of the final cutover, so old WordPress links keep working after the static files replace WordPress.
