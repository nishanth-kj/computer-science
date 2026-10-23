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
- `SUPPORT_URL` — an active HTTPS donation/support page (for example, a creator platform you have actually enabled).
- `DIGITAL_PRODUCTS_URL` — a live HTTPS storefront for original paid study materials.
- `NEWSLETTER_URL` — a live HTTPS newsletter signup page from a provider you use.

Leave any integration's values unset to keep it disabled. These identifiers are public browser configuration, not secrets. After AdSense approval, replace the comments in `public/ads.txt` with the exact authorized-seller record supplied by Google; never publish a placeholder publisher ID. AdSense approval, consent-platform requirements, and regional policy configuration remain external account tasks.

For local testing, set the same environment variables before `npm run build`. The build writes validated public values to `dist/site-config.js`; source defaults stay empty.

## Monetization and trust

This is a static educational site. Monetization should not compromise the free core curriculum or disguise paid recommendations as editorial advice.

- **Display ads:** Google AdSense support is implemented but remains off until the account is approved and the Actions variables `ADSENSE_PUBLISHER_ID`, `ADSENSE_IN_ARTICLE_SLOT`, and `ADSENSE_LIBRARY_SLOT` are correctly configured. Never commit a fake publisher or slot ID. Configure a certified consent-management platform for regions where Google requires one.
- **Affiliate recommendations:** add only relevant books, courses, developer tools, or hosting/services that have been personally reviewed. Identify affiliate links close to the recommendation and keep `/affiliate-disclosure` current. The project currently has no affiliate URLs or partner IDs configured.
- **Digital products:** offer original revision sheets, interview-workbook PDFs, printable diagrams, or worked-problem packs through a reputable creator checkout. The checkout can be external; do not put payment secrets in frontend code.
- **Sponsorships:** use `/support` to invite relevant education and developer-tool partnerships. Clearly label paid placements and do not sell control over educational conclusions.
- **Reader support:** a donation checkout is not connected yet. Add a real GitHub Sponsors, Ko-fi, or other creator link only after the account is active and the exact destination is confirmed.
- **Courses and workshops:** sell live interview preparation, small-group classes, or advanced labs once the content and capacity exist.
- **Membership or paid progress features:** saved progress across devices, member-only practice sets, subscriptions, and course gating require a backend or a hosted membership platform. They cannot be secured by hiding content in this static bundle.
- **Newsletter, job board, licensing, and team training:** these are later options after there is a real audience and a reliable process for delivering value. Newsletter signup needs an email provider and clear privacy handling.

The order of work matters: make the content genuinely useful and indexable first, then test a small number of relevant affiliate/product offers, and only then optimize ads or sponsorships against measured traffic. Ad revenue is traffic-dependent and is not guaranteed.

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
