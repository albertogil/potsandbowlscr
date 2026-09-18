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

The home page, original photographs, and current public menu URLs are represented here. The current menus are retained as optimized visual menus; a future content pass can transcribe them into searchable HTML. WordPress remains live until final approval.

## Redirects

`redirects.csv` is the reviewed redirect inventory. `.htaccess` applies its permanent redirects at DreamHost as part of the final cutover, so old WordPress links keep working after the static files replace WordPress.
