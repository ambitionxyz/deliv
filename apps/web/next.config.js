const createNextIntlPlugin = require("next-intl/plugin");

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin("./i18n.ts");

module.exports = withNextIntl({
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
});
