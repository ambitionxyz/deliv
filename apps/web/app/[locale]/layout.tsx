"use client";

import React from "react";
import HeaderRoot from "../../components/header/HeaderRoot";
import FooterRoot from "../../components/footer/FooterRoot";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderRoot />
      {children}
      <FooterRoot />
    </>
  );
};

export default Layout;
