"use client";

import React from "react";
import HeaderRoot from "../../components/header/HeaderRoot";
import FooterRoot from "../../components/footer/FooterRoot";
import WhatWeDoProvider from "../../components/whatWeDo/WhatWeDoWrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderRoot />
      <WhatWeDoProvider>{children}</WhatWeDoProvider>
      <FooterRoot />
    </>
  );
};

export default Layout;
