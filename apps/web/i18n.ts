import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["ja", "en"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: {
      ...(await import(`./locales/entries/${locale}.json`)).default,
      ...(await import(`./locales/messages/${locale}.json`)).default,
    },
  };
});
