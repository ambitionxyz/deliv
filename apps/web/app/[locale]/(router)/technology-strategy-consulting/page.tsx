"use client";

import { useContext, useEffect } from "react";
import { useOs } from "@mantine/hooks";
import WhatWeDoProvider, {
  WhatWeDoContext,
} from "../../../../components/whatWeDo/WhatWeDoWrapper";
import { useLocale, useTranslations } from "next-intl";

const Page = () => {
  const os = useOs();
  const locale = useLocale();
  const t = useTranslations("Index");

  const { setHeaderBackground, setThemeLead, setListThemeCharater, setThemes } =
    useContext(WhatWeDoContext);

  const listThemeCharater = [
    {
      title: t("Dashboard"),
      body: t("Visualization"),
    },
    {
      title: t("DataModeling"),
      body: t("Insights"),
    },
    {
      title: t("DataApplication"),
      body: t("Monetize"),
    },
    {
      title: t("Education"),
      body: t("SupportForInHouse"),
    },
    {
      title: "Tableau Cloud Migration",
      body: t("Leveraging"),
      image:
        "https://www.deliv.co.jp/hubfs/corp_2022/files/images/bnr_tcm2.png",
    },
  ];

  useEffect(() => {
    setHeaderBackground({
      namePage: "Technology strategy",
      image:
        os === "windows"
          ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_theme_02.png"
          : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_theme_02_sp.png",
      description: "テクノロジー戦略",
    });

    setThemeLead(t("Formulate"));

    setListThemeCharater(listThemeCharater);

    setThemes("テクノロジー戦略");
  }, [os, locale]);

  return <WhatWeDoProvider.Content />;
};

export default Page;
