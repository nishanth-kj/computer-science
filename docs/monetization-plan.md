# Monetization plan for Computer Science Handbook

This plan is based on the current static Angular site. It has no account system, database, payment backend, or active affiliate/product account configured. A link can point to a third-party checkout, but paid access and cross-device progress cannot be secured in the static frontend alone.

## Best-fit revenue streams

### 1. Original downloadable products
Create material that saves learners time: OS/DBMS/networks revision sheets, interview question packs with worked answers, diagrams, DSA pattern guides, lab exercises, exam revision planners, or a combined computer-science study bundle. Sell through an external storefront and link to it with `DIGITAL_PRODUCTS_URL`. Start with one small product, solve a clear problem, then expand from customer feedback. Do not sell copied textbook material or content that is only a reformat of the free pages.

### 2. Relevant affiliate recommendations
Recommend books, courses, developer tools, hosting platforms, cloud labs, or exam-prep resources where a recommendation genuinely helps the reader. Use a partner program only after acceptance, test links, label commission-bearing links near the recommendation, and retain editorial independence. The site currently has no affiliate links or partner IDs. Update `/affiliate-disclosure` before adding any.

### 3. Sponsorships
Invite appropriate developer-tool companies, technical publishers, training providers, and education platforms to sponsor a clearly labelled site placement, learning path, interactive lab, newsletter issue, or original tutorial. Use the contact route on `/support`. Set a written policy: sponsorship cannot change technical conclusions, rankings, or the editorial direction of an explanation.

### 4. Reader support
Connect an active creator-support page, such as a sponsorship or donation platform. Set `SUPPORT_URL` to its real HTTPS destination. That URL is hidden until configured; this repository does not assume that any support account already exists.

### 5. Display advertising
The site has consent-gated AdSense slots, but AdSense is not enabled by default. Apply only after the site contains enough substantial, original content, its policies and navigation are in good shape, and Google has approved the site. Configure the actual publisher and slot IDs, publish the exact authorised-seller record in `ads.txt`, and complete any required consent-management setup. The code keeps ads off summary-only topic pages and the topic-directory page; don't expand ad placement just to increase ad impressions.

### 6. Newsletter
Publish a useful digest—one original explanation, one exercise, and one project or resource per issue. A newsletter can later earn from disclosed sponsor placements, affiliate recommendations, paid study packs, or course launches. Choose a provider, publish a privacy notice, and set `NEWSLETTER_URL` to a real HTTPS signup page. The link alone does not create an email list.

### 7. Paid learning and services
Offer live interview preparation, small-group classes, GATE/semester revision sessions, mentoring, code walkthroughs, or technical workshops. This can generate revenue before a large advertising audience exists, but requires delivery time and honest descriptions of what buyers receive. Use the existing contact email to test demand before building complex tooling.

### 8. Courses and video
Turn original high-value topics into lessons, screencasts, worked examples, quizzes, and short technical videos. Monetize through course sales, platform revenue where eligible, sponsorships, and relevant affiliate links. The website should remain the reference and search landing page that directs viewers to the full lesson.

### 9. Membership and advanced practice
Potential paid features include larger solved-problem banks, guided quizzes, spaced repetition, saved notes, mock interviews, and downloadable packs. Secure subscriptions, accounts, and member-only content through a trusted course/membership platform or a backend with server-side entitlement checks. Hiding links or content in Angular is not access control.

### 10. Job and internship listings
A curated, paid job board or sponsored listings may fit once developers and students return regularly. Verify postings, label sponsored roles, prohibit pay-to-pretend listings, and avoid launching until there is sufficient employer and learner demand.

### 11. Curriculum licensing and team training
Offer tailored learning paths, internal workshops, or licensed curriculum bundles to colleges, bootcamps, student clubs, and engineering teams. This is relationship-driven rather than pure website advertising; create a clear inquiry and delivery process first.

### 12. Paid quizzes, exam packs, and certificates
Sell original practice tests, explanation-led exam packs, graded mock interviews, or completion certificates with real assessment. Do not imply that a self-issued certificate is accredited or equivalent to a recognised qualification.

### 13. Corporate and recruiting partnerships
Companies may sponsor a systems-design path, interview-preparation series, technical lab, or hiring event. Maintain a clear distinction between education and hiring promotion; never sell candidate information or misrepresent a sponsor.

## Recommended order

1. **Complete the content before scaling ads.** In the current source data, 68 of 195 topic routes have full authored material; the other 127 are summary-only. Expand the most useful missing topics with examples, diagrams, edge cases, sources, and genuinely answered questions. The build logs report this coverage.
2. **Test one paid product.** A focused interview pack or revision bundle is easier to validate than a large course. Link the real storefront using `DIGITAL_PRODUCTS_URL`.
3. **Add only a few high-confidence affiliate recommendations.** Use disclosure language beside the links and track clicks without collecting unnecessary personal data.
4. **Ask for sponsorships after you can show evidence.** Prepare real visitor counts, high-performing topic pages, audience profile, and a concise media kit.
5. **Apply for display ads when content and traffic justify it.** Approval and revenue are not guaranteed. Don't place ads on thin entries, empty pages, or controls that interfere with learning.
6. **Build a newsletter and services only when you can deliver consistently.** Use them to turn one-off search traffic into returning learners.

## Configure the optional site links

In GitHub: **Settings → Secrets and variables → Actions → Variables**, set only the real URLs you have launched:

- `SUPPORT_URL`: public support/donation page.
- `DIGITAL_PRODUCTS_URL`: a live storefront for original material.
- `NEWSLETTER_URL`: the live signup page.

All must be HTTPS. After saving, deploy a commit or run the Pages workflow; the site build exposes only validated public URLs. Do not put private API keys, payment secrets, or email-provider credentials in these variables or browser code. Leave a URL empty until the destination exists.

## Measurement

Use Search Console to track indexed URLs, organic impressions, clicks, CTR, and queries; use consent-respecting analytics for engaged visits and outbound-click events. Check performance by topic and device. Revenue reports should record product conversions, affiliate clicks/conversions, sponsor renewals, and ad revenue separately. Make decisions from actual data rather than estimated visitor counts.

## Trust and policy checklist

- Keep the core curriculum usable without payment.
- Identify affiliate links and sponsored content clearly.
- Never create fake partner links, fake scarcity, fake earnings claims, forced downloads, or ad-heavy doorway pages.
- Keep privacy, terms, and affiliate disclosures consistent with the services actually enabled.
- Configure a Google-certified consent-management platform when required for AdSense traffic and ad types in the EEA, UK, or Switzerland.
- Review current platform, advertising, tax, and consumer-protection requirements before taking payments.
