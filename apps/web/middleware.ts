import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["jp", "en"],
  defaultLocale: "jp",
});

export const config = {
  matcher: ["/", "/(jp|en)/:path*"],
};
