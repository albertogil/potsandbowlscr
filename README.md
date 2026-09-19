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

## Redirects

`redirects.csv` is the reviewed redirect inventory. `.htaccess` applies its permanent redirects at DreamHost as part of the final cutover, so old WordPress links keep working after the static files replace WordPress.
