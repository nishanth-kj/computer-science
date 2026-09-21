# CS

Static Angular website for computer science pages, learning paths, and interview questions. Frontend only — no server, no database, no auth.

## Run locally

```bash
npm install
npm start
```

Opens at [http://localhost:4200](http://localhost:4200).

## Production build

```bash
npm run build
```

Static files land in `dist/` (`index.html` + `404.html` for hosts that fall back on missing paths).

Serve that folder with any static host (GitHub Pages, Netlify, nginx, `npx serve dist`).

## Deploy (GitHub Pages)

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push and pull request: it installs, runs the tests, and builds. On pushes to `main` (or a manual run from the Actions tab) it then publishes `dist/` to GitHub Pages.

One-time setup: in the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

The deploy job reads the site's URL from the Pages settings, so the same workflow works for a project site (`https://<owner>.github.io/<repo>/`) and for a custom domain. It builds with the matching `--base-href` and passes the site URL to the sitemap and prerender scripts as `SITE_ORIGIN`. To test a sub-path build locally:

```bash
SITE_ORIGIN=https://<owner>.github.io/<repo> node scripts/generate-sitemap.mjs
npx ng build --base-href /<repo>/
node scripts/prerender.mjs && cp dist/index.html dist/404.html
```

## Test

```bash
npm test
```

Page specs live next to each screen in `src/app/pages/` (`home.spec.ts`, `graph.spec.ts`, …).

## Layout

- `src/content/` — topic, lab, and path data
- `src/app/lib/` — theme, progress, sim helper, utilities
- `src/app/components/` — layout, article, labs
- `src/app/pages/` — routed pages
- `src/app/app.routes.ts` — one route per section, topic, lab, and path
