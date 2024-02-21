"use client";

import Link from "next/link";

import c from "./Layout.module.css";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useOs } from "@mantine/hooks";
import { useLocale, useTranslations } from "next-intl";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [restBrg, setRestBgr] = useState<{
    image: string;
    description: string;
  }>({
    image: "",
    description: "",
  });
  const pathName = usePathname();
  const os = useOs();
  const t = useTranslations("Index");
  const locale = useLocale();

  useEffect(() => {
    switch (pathName) {
      case `/${locale}/sustainability/diversityinclusion`:
        setRestBgr({
          image:
            os === "windows"
              ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_586371345%20(1)-2.jpeg"
              : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_586371345%20(2).jpeg",
          description: t("Sustainability"),
        });
        break;
      case "sustainability/healthandsafe":
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_582936229-2.jpeg",
          description: t("Health"),
        });
        break;

      case "sustainability/humanresource":
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_492497598.jpeg",
          description: t("Developing"),
        });
        break;
      case "sustainability/socialresponsibility":
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_492497598.jpeg",
          description: t("Contribution"),
        });
        break;

      case "sustainability/data":
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_587022816.jpeg",
          description: t("Data"),
        });
        break;

      default:
        setRestBgr({
          image:
            os === "windows"
              ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_577490154-1.jpeg"
              : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_577490154%20(1).jpeg",
          description: t("Sustainability"),
        });
    }
  }, [pathName, os]);

  return (
    <>
      <Headerbackground namePage="Sustainability" {...restBrg} />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>{t("Sustainability")}</span>
      </div>
      <div className={c.contents}>
        <div className={c.section}>
          <div className={c.pageIntro}>
            <Link href={`/${locale}/sustainability`}>{t("Message")}</Link>
            <Link href="sustainability/diversityinclusion">
              {t("Diversity")}
            </Link>
            <Link href={`/${locale}/sustainability/healthandsafe`}>
              {t("Health")}
            </Link>
            <Link href={`/${locale}/sustainability/diversityinclusion`}>
              {t("Developing")}
            </Link>
            <Link href={`/${locale}/sustainability/diversityinclusion`}>
              {t("Contribution")}
            </Link>
            <Link href={`/${locale}/sustainability/diversityinclusion`}>
              {t("Data")}
            </Link>
          </div>
          <hr />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
