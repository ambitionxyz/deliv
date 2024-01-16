"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import Mv from "../../features/mv/Mv";
import Strength from "../../components/top/Strength";
import Theme from "../../components/top/Theme";
import CaseStudy from "../../components/top/CaseStudy";

import c from "./page.module.css";
import Service from "../../components/top/Service";
import News from "../../components/top/News";
import Recuit from "../../components/top/Recruit";
export default function Page() {
  const pathname = usePathname();

  const linkList = useMemo(
    () => [
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
    ],
    [pathname]
  );

  return (
    <>
      <Mv />
      <div className={c.content}>
        <Strength />
        <Theme linkList={linkList} />
        <CaseStudy />
        <Service />
        <News />
        <Recuit />
      </div>
    </>
  );
}
