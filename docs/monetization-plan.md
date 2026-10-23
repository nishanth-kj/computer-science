# Monetization plan for the Computer Science Handbook

The website is a static Angular educational reference. It does not have an account system, payment backend, subscriber database, or active affiliate/product account configured. Third-party checkout links can be used without exposing payment secrets to the frontend, but access control and member-only content require a trusted provider or backend.

## Current priorities

### 1. Google AdSense

The code supports a publisher verification meta tag, generated `ads.txt`, and consent-gated in-article ad slots. That is implementation support, not approval. Google reviews the actual site and may reject or request changes.

Before applying, check that the site has original and useful content, clear navigation, a good reading experience, visible contact/about/privacy/terms pages, no broken routes, and no pages whose primary purpose is thin content or ads. The content-depth audit is a signal to guide editorial improvement, not an AdSense approval prediction.

Activation sequence:

1. Review Google's [site readiness guidance](https://support.google.com/adsense/answer/7299563) and improve high-value, summary-only topics.
2. Apply to AdSense and add `computer-science.site` in the account that controls the domain.
3. Once a real publisher ID is supplied, set `ADSENSE_PUBLISHER_ID` in GitHub Actions Variables. The production build will add `<meta name="google-adsense-account" content="ca-pub-…">` to the homepage and generate the corresponding `google.com, pub-…, DIRECT, f08c47fec0942fa0` record in `dist/ads.txt`. The ID in `ads.txt` is the `pub-…` form; it intentionally omits the `ca-` prefix.
4. Deploy, then open `https://computer-science.site/ads.txt` and the homepage source to confirm both are publicly accessible and match the account. Check AdSense's site/ads.txt status and request review through the account.
5. After account approval, create an in-article unit and set `ADSENSE_IN_ARTICLE_SLOT`. Do not add made-up values. Ads stay off unless valid publisher and slot values are configured and the visitor has allowed optional services.
6. Complete required account-side privacy/consent settings before serving ads in the regions you target.

**Consent limitation:** the site's current banner is a basic first-party opt-in/opt-out control. It is not a Google-certified consent management platform and does not send IAB Transparency and Consent Framework signals. Google requires a Google-certified CMP integrated with the TCF when serving personalised ads to users in the EEA, UK, and Switzerland. See [Google's current publisher requirements](https://support.google.com/adsense/answer/13554116). Configure a CMP that meets applicable requirements before targeting those regions; do not claim the current banner satisfies that requirement.

`public/ads.txt` is not a place for placeholders. The build generates a valid seller record from a correctly formatted publisher ID and emits only a comment when no valid ID is configured. A green build is not an AdSense approval or a live-domain verification.

### 2. Sponsorships and reader support

The `/support` page explains the current support model and invites relevant technical/education partnerships. Reader donations remain disconnected until a real support destination is configured through `SUPPORT_URL`.

Good-fit sponsor concepts:
- A clearly labelled sponsored tutorial or code walkthrough with a useful technical learning outcome.
- A relevant learning-resource or interactive-lab sponsorship.
- A clearly labelled developer-tool demonstration that includes limitations and alternatives.

Do not promise placement availability, impressions, click volume, traffic, or outcomes without evidence. Use [the media-kit template](sponsorship-media-kit.md) to prepare outreach, filling only verified numbers from recent GA4 and Search Console reports. If reliable traffic metrics are not available, say so and propose a small test campaign or a non-performance-based collaboration. Pricing should follow actual audience quality, delivery effort, and results—not invented reach.

Every sponsorship must be disclosed at the placement, maintain editorial independence, and avoid claims the product cannot substantiate. Sponsor fit and content review come before payment. Never sell favourable conclusions or change technical rankings in exchange for money.

### 3. Revenue paths to build later

- Original downloadable revision packs, interview workbooks, diagrams, and solved exercises through a reputable storefront.
- Relevant affiliate recommendations, disclosed immediately near the link and described on `/affiliate-disclosure`.
- A newsletter, after there is a provider and a useful, consistent publication schedule.
- Workshops, interview preparation, mentoring, and team training when delivery capacity is available.
- Membership features only when a hosted membership provider or server-side backend can enforce entitlements. Hiding content in Angular is not access control.

## Configuration

Set these values only when the associated account/destination is real and active:

- `ADSENSE_PUBLISHER_ID`: AdSense client ID in `ca-pub-` plus 16 digits.
- `ADSENSE_IN_ARTICLE_SLOT`: numeric slot ID created in AdSense.
- `SUPPORT_URL`: active public HTTPS support/donation page.
- `DIGITAL_PRODUCTS_URL`: active HTTPS storefront for original material.
- `NEWSLETTER_URL`: active HTTPS newsletter signup page with an appropriate privacy notice.
- `GA_MEASUREMENT_ID`: GA4 measurement ID, if analytics has been configured with appropriate notice/consent.

Do not put private API keys, payment secrets, or email-provider credentials in browser variables. The build validates public identifiers and HTTPS destinations.

## Measurement

Use Search Console to monitor indexed pages, search impressions, clicks, CTR, and queries. Use consent-respecting analytics to understand engagement and outbound click events. Record product conversions, sponsorship delivery, and ad revenue separately. Share audience figures only when you can export and date the underlying report.

## Trust and policy checklist

- Keep the core curriculum usable without payment.
- Keep privacy, terms, and disclosures aligned to services actually enabled.
- Label sponsorships clearly on each placement and identify affiliate links close to the recommendation.
- Never create fake partner IDs, placeholder seller records, fake scarcity, forced downloads, or ad-heavy doorway pages.
- Configure a Google-certified CMP where required; review platform, advertising, tax, and consumer-protection rules before accepting payments.
- Review the actual live domain after deployment. The build cannot verify DNS, domain ownership, account approval, consent-platform certification, traffic, or the quality of every lesson.
