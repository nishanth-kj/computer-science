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
node scripts/configure-site.mjs
node scripts/prerender.mjs
```

## Optional analytics and advertising

Analytics and advertising are disabled by default. No third-party script or empty ad placement is rendered without both valid configuration and the visitor's consent. For a GitHub Pages deployment, add these **Actions variables** under **Settings → Secrets and variables → Actions → Variables**:

- `GA_MEASUREMENT_ID` — a Google Analytics web stream ID such as `G-...`.
- `ADSENSE_PUBLISHER_ID` — the approved AdSense client ID in `ca-pub-` format.
- `ADSENSE_IN_ARTICLE_SLOT` and `ADSENSE_LIBRARY_SLOT` — numeric ad-unit IDs created in the approved account.

Leave any integration's values unset to keep it disabled. These identifiers are public browser configuration, not secrets. After AdSense approval, replace the comments in `public/ads.txt` with the exact authorized-seller record supplied by Google; never publish a placeholder publisher ID. AdSense approval, consent-platform requirements, and regional policy configuration remain external account tasks.

For local testing, set the same environment variables before `npm run build`. The build writes validated public values to `dist/site-config.js`; source defaults stay empty.

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
