import fs from "node:fs";

function validHttpsUrl(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" && url.hostname ? url.toString() : "";
  } catch {
    return "";
  }
}

const config = {
  analyticsMeasurementId: process.env.GA_MEASUREMENT_ID?.trim() ?? "",
  adsensePublisherId: process.env.ADSENSE_PUBLISHER_ID?.trim() ?? "",
  adsenseSlots: {
    inArticle: process.env.ADSENSE_IN_ARTICLE_SLOT?.trim() ?? "",
    libraryBanner: process.env.ADSENSE_LIBRARY_SLOT?.trim() ?? "",
  },
  supportUrl: validHttpsUrl(process.env.SUPPORT_URL ?? ""),
  digitalProductsUrl: validHttpsUrl(process.env.DIGITAL_PRODUCTS_URL ?? ""),
  newsletterUrl: validHttpsUrl(process.env.NEWSLETTER_URL ?? ""),
};

const output = `// Generated at build time. These browser identifiers are public, not secrets.\nwindow.__CS_SITE_CONFIG__ = Object.freeze(${JSON.stringify(config, null, 2)});\n`;
fs.writeFileSync("dist/site-config.js", output);

const enabled = [
  config.analyticsMeasurementId ? "analytics" : null,
  config.adsensePublisherId && Object.values(config.adsenseSlots).some(Boolean) ? "ads" : null,
  config.supportUrl ? "support checkout" : null,
  config.digitalProductsUrl ? "digital products" : null,
  config.newsletterUrl ? "newsletter" : null,
].filter(Boolean);
console.log(`site integrations: ${enabled.join(", ") || "disabled"}`);
