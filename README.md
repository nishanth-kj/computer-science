# Computer Science Handbook

Static Angular website for computer science pages. Frontend only — no server, no database, no auth.

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

Static files land in `dist/`. The production build generates the sitemap, public site configuration, prerendered pages, and SEO/monetization audits.

## Deploy with GitHub Pages

The workflow at `.github/workflows/deploy.yml` runs tests and a production build for pull requests. Pushes to `main` and manual workflow runs deploy the generated `dist/` directory to GitHub Pages.

For a project site, use the base path selected by GitHub Pages; for the custom domain, configure the Pages domain and DNS correctly. The workflow reads the Pages URL, sets the matching base href, and generates canonical URLs and the sitemap.

## Optional analytics and advertising

Analytics and advertising are disabled by default. The site does not load the configured analytics or AdSense scripts until a visitor chooses to allow optional services. Configure only genuine IDs from accounts you control using GitHub **Settings → Secrets and variables → Actions → Variables**:

- `GA_MEASUREMENT_ID`: Google Analytics web stream ID such as `G-...`.
- `ADSENSE_PUBLISHER_ID`: the publisher ID supplied by your AdSense account, in `ca-pub-0000000000000000` format.
- `ADSENSE_IN_ARTICLE_SLOT`: the numeric in-article ad-unit ID generated in the approved AdSense account.
- `SUPPORT_URL`: a live public HTTPS creator-support/donation page.
- `DIGITAL_PRODUCTS_URL`: a live HTTPS storefront for original downloadable materials.
- `NEWSLETTER_URL`: a live HTTPS signup page with an appropriate privacy notice.

The values are public browser configuration, not secrets. Do not put API keys, private payment tokens, or email-provider secrets in browser code or these public build variables.

### AdSense activation sequence

1. Improve the content and navigation and apply for AdSense in the account that owns the site.
2. After the account supplies a genuine publisher ID, configure `ADSENSE_PUBLISHER_ID`. The build adds Google's publisher verification meta tag to `dist/index.html` and writes the matching authorized seller line to `dist/ads.txt`.
3. After approval, create an in-article ad unit and configure `ADSENSE_IN_ARTICLE_SLOT`. Ads remain disabled unless both publisher and slot IDs are valid and the visitor allows optional services.
4. Inspect `https://computer-science.site/ads.txt` and the homepage source after deploying. The build audit checks that the generated seller record and verification tag match the configured publisher ID.
5. Complete Google's current privacy/consent requirements before enabling advertising for the regions you serve. The site's built-in banner is a basic first-party choice control, not a Google-certified CMP and does not create IAB TCF signals. Google requires a certified CMP integrated with the TCF when serving personalized ads to visitors in the EEA, UK, and Switzerland. Review Google's [publisher CMP requirements](https://support.google.com/adsense/answer/13554116). Do not treat passing the build as AdSense approval or legal compliance.

Never use a placeholder publisher ID or ad-unit ID. Leave the variables empty until the real account values exist. The site cannot request AdSense approval, configure account-side settings, or guarantee acceptance automatically.

## Reader support and sponsorships

The `/support` page explains reader support, the kinds of educational sponsorships considered, and how to contact the maintainer. No donation flow or paid sponsorship inventory is represented as active until a real destination or campaign is configured.

- Reader support: configure `SUPPORT_URL` only after an account and destination are active.
- Sponsorship inquiry: the page links to email; there are no invented visitor, reach, or impression claims. Use actual privacy-respecting analytics and current Search Console data when preparing a media kit.
- Sponsored work: label paid placements near the content, preserve editorial independence, and do not sell favourable technical conclusions.
- Digital products/newsletter: set the URLs only after the storefront or signup page is live.

Use [docs/sponsorship-media-kit.md](docs/sponsorship-media-kit.md) as an internal template. Fill in verified figures before sending it to any prospective sponsor. See [docs/monetization-plan.md](docs/monetization-plan.md) for the wider roadmap and policy checklist.

## Test

```bash
npm test
```

Run the full unit test and build workflow before merging changes. A green build validates the generated site structure; it does not validate the live domain's DNS, AdSense approval, CMP certification, audience metrics, payment links, or sponsorship sales process.

Page specs live next to each screen in `src/app/pages/` (`home.spec.ts`, `library.spec.ts`, …).

## Layout

- `src/data/content/` — catalog and topic data
- `src/lib/` — theme, content helpers, utilities
- `src/app/components/` — layout and article
- `src/app/pages/` — routed pages
- `src/app/app.routes.ts` — home, library, fields, and topic pages
