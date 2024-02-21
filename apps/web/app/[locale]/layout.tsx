import React from "react";
import HeaderRoot from "../../components/header/HeaderRoot";
import FooterRoot from "../../components/footer/FooterRoot";
import WhatWeDoProvider from "../../components/whatWeDo/WhatWeDoWrapper";
import NewsProvider from "../../components/news/NewWrapper";
import { LanguagesProvider } from "../../components/provider/LanguageProvider";
import { useLocale, useMessages } from "next-intl";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const messages = useMessages();
  const localeProp = useLocale();
  return (
    <>
      <LanguagesProvider locale={localeProp} messages={messages}>
        <HeaderRoot />
        <NewsProvider>
          <WhatWeDoProvider>{children}</WhatWeDoProvider>
        </NewsProvider>
        <FooterRoot />
      </LanguagesProvider>
    </>
  );
};

export default Layout;
