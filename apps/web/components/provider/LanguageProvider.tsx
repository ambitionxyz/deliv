"use client";

import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";

export const LanguagesProvider = ({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: AbstractIntlMessages;
  children: React.ReactNode;
}) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};
