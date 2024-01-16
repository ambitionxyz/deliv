import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["jp", "en"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./locales/messages/${locale}.json`)).default,
    entries: (await import(`./locales/entries/${locale}.json`)).default,
  };
});
