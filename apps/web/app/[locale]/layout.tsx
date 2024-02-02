"use client";

import React from "react";
import HeaderRoot from "../../components/header/HeaderRoot";
import FooterRoot from "../../components/footer/FooterRoot";
import WhatWeDoProvider from "../../components/whatWeDo/WhatWeDoWrapper";
import NewsProvider from "../../components/news/NewWrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderRoot />
      <NewsProvider>
        <WhatWeDoProvider>{children}</WhatWeDoProvider>
      </NewsProvider>
      <FooterRoot />
    </>
  );
};

export default Layout;
