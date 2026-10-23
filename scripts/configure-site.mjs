import fs from "node:fs";

const config = {
  analyticsMeasurementId: process.env.GA_MEASUREMENT_ID?.trim() ?? "",
  adsensePublisherId: process.env.ADSENSE_PUBLISHER_ID?.trim() ?? "",
  adsenseSlots: {
    inArticle: process.env.ADSENSE_IN_ARTICLE_SLOT?.trim() ?? "",
    libraryBanner: process.env.ADSENSE_LIBRARY_SLOT?.trim() ?? "",
  },
};

const output = `// Generated at build time. These browser identifiers are public, not secrets.\nwindow.__CS_SITE_CONFIG__ = Object.freeze(${JSON.stringify(config, null, 2)});\n`;
fs.writeFileSync("dist/site-config.js", output);

const enabled = [
  config.analyticsMeasurementId ? "analytics" : null,
  config.adsensePublisherId && Object.values(config.adsenseSlots).some(Boolean) ? "ads" : null,
].filter(Boolean);
console.log(`site integrations: ${enabled.join(", ") || "disabled"}`);
