"use client";

import Link from "next/link";
import { useOs } from "@mantine/hooks";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";

import c from "./Page.module.css";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Recuit from "../../../../components/top/Recruit";
import { useTranslations } from "next-intl";

const Page = () => {
  const os = useOs();
  const t = useTranslations("Index");
  const pathname = usePathname();

  const listRender = [
    {
      image:
        "	https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_strategy.svg",
      esTitle: "Strategy",
      jpTitle: t("Strategy"),
      des: t("Backwards"),
    },
    {
      image:
        "https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_delivery.svg",

      esTitle: "Delivery",
      jpTitle: t("HighStandard"),
      des: t("Promotes"),
    },
    {
      image:
        "	https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_enablement2.svg",
      esTitle: "Enablement",
      jpTitle: t("InHouse"),
      des: t("Organizational"),
    },
  ];

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
      <Headerbackground
        namePage={t("PowerOfTechnology")}
        image={
          os === "windows"
            ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_approach.png"
            : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_approach_sp.png"
        }
        description={t("StrategyFormulation")}
        text={[
          ` ${t("ProductionSupport")}`,
          `${t("TechnologyConsulting")} ${t("Realize")}`,
        ]}
      />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>{t("Business")}</span>
        <span>+</span>
        <span>{t("Consulting")} </span>
      </div>
      <div className={c.contents}>
        <div className={c.section}>
          <div className={c.pageIntro}>
            <h2 className={c.bdrTitle}>
              {t("Achieve")} <br />
              {t("Technology")}
            </h2>
            <div className={c.pageIntroBody}>
              <p>{t("Success")}</p>
              <p className={c.pMiddle}>{t("Properly")}</p>
              <p className={c.pMiddle}>{t("Provide")}</p>
            </div>
          </div>
        </div>
        <div className={c.sectionMV}>
          <img
            src={
              os === "windows"
                ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/img_approach_01.png"
                : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/img_approach_01_sp.png"
            }
          />
        </div>
        <div className={c.section2}>
          <h2 className={c.bdrTitle}> {t("Commitment")}</h2>
          <div className={c.colBox}>
            <div className={c.colImage}>
              <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_approach_02.png" />
            </div>
            <div className={c.colText}>
              <h3 className={c.boldTitle}>{t("Purpose")}</h3>
              <div className={c.listRender}>
                {listRender.map((item, i) => {
                  return (
                    <div key={i} className={c.itemRender}>
                      <div className={c.itemTitle}>
                        <span className={c.icon}>
                          <img src={item.image} />
                        </span>
                        <span className={c.blueTitle}>{item.esTitle}</span>
                        <span className={c.jpTitle}>{item.jpTitle}</span>
                      </div>
                      <p className={c.text}>{item.des}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={c.sectionMV}>
          <img
            src={
              os === "windows"
                ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/img_approach_03.png"
                : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/img_approach_03_sp.png"
            }
          />
        </div>
        <div className={c.section3}>
          <h2 className={c.bdrTitle}>{t("DLC")}</h2>
          <div className={c.colBox}>
            <div className={c.colImage}>
              <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_approach_04.png" />
            </div>
            <div className={c.colText}>
              <h3 className={c.boldTitle}>{t("OriginalPurpose")}</h3>
            </div>
          </div>
        </div>
        <div className={c.section4}>
          <h2 className={c.bdrTitle}>{t("DLCMaximizes")}</h2>
          {linkList.length > 0 && (
            <ul className={c.linkListCol3}>
              {linkList.map((link, i) => {
                return (
                  <li key={i}>
                    <Link className={c.arrow02} href={link.href}>
                      <div className={c.linkListName}>{link.title}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <Recuit />
    </>
  );
};

export default Page;
