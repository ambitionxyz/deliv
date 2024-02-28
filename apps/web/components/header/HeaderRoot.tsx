"use client";

import Link from "next/link";
import classes from "./HeaderToor.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Burger, Switch } from "@mantine/core";
import { useDisclosure, useOs } from "@mantine/hooks";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../../features/locale/LocaleSwitcher";

const HeaderRoot = () => {
  const [scrollDistance, setScrollDistance] = useState<boolean>(false);
  const [eHover, setEHover] = useState(null);

  const [opened, { toggle, close }] = useDisclosure();
  const [openedItemNavMobi, handlersItemNavMobi] = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();
  const os = useOs();

  const listItemsRefs = useRef<any>([]);

  const locale = useLocale();

  const t = useTranslations("Header");

  const linkNar = useMemo(
    () => [
      {
        content: "What we do",
        description: t("WhatWeDo.Description"),
        active: false,
        top: null,
        href: "",
        megaMenu: [
          {
            title: t("WhatWeDo.MegaMenu.Title1"),
            megaHref: `/${locale}/approard`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_01_01.png",
            desImage: [
              {
                contentDesImage: t("WhatWeDo.MegaMenu.ContentDesImage1"),
                linkDesImage: `/${locale}/technology-strategy-consulting`,
              },
            ],
            texts: [],
          },
          {
            title: t("WhatWeDo.MegaMenu.Title2"),
            megaHref: `/${locale}/ourstrength`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_01_02.png",
            texts: [],
          },
          {
            title: t("WhatWeDo.MegaMenu.Title3"),
            image: null,

            texts: [
              {
                content: t("TechnologyStrategy"),
                link: `/${locale}/technology-strategy-consulting`,
              },
              {
                content: t("Modernization"),
                link: `/${locale}/modernization`,
              },
              {
                content: t("EmergingTechnology"),
                link: `/${locale}/emerging-technology`,
              },
              {
                content: t("DataVisualization"),
                link: `/${locale}/data-visualization`,
              },
              {
                content: t("Analytics"),
                link: `/${locale}/ai_analytics`,
              },
            ],
          },
        ],
      },
      {
        content: "Project",
        description: t("Project.Description"),
        active: pathname === "projects",
        href: `/${locale}/projects`,
        top: null,
      },
      {
        content: "Who we are",
        description: t("WhoWeAre.Description"),
        active: false,
        top: null,
        href: "",
        megaMenu: [
          {
            title: t("WhoWeAre.MegaMenu.Title1"),
            megaHref: `/${locale}/the-pledge`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_01.png",
            texts: [],
          },
          {
            title: t("WhoWeAre.MegaMenu.Title2"),
            megaHref: `/${locale}/company_profile`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_02.png",
            desImage: [
              {
                contentDesImage: t("WhoWeAre.MegaMenu.ContentDesImage2"),
                linkDesImage: `/${locale}/company_profile/products`,
              },
              {
                contentDesImage: t("WhoWeAre.MegaMenu.ContentDesImage3"),
                linkDesImage: `/${locale}/company_profile/associated_company`,
              },
            ],
            texts: [],
          },
          {
            title: t("WhoWeAre.MegaMenu.Title3"),
            megaHref: `/${locale}/leadership`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_03.png",
            texts: [],
          },
          {
            title: t("WhoWeAre.MegaMenu.Title4"),
            megaHref: `/${locale}/employee-development-system`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_04.png",
            texts: [],
          },
        ],
      },
      {
        content: "Sustainability",
        description: t("Sustainability.Description"),
        active: pathname === "sustainability",
        href: `/${locale}/sustainability`,
        top: null,
      },
      {
        content: "Information",
        description: t("Information.Description"),
        active: false,
        href: "",
        top: {
          label: t("Information.Label"),
          link: `/${locale}/news`,
        },
        megaMenu: [
          {
            title: t("Information.MegaMenu.Title1"),
            megaHref: `/${locale}/news/tag/001-プレスリリース`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_01.png",
            texts: [],
          },
          {
            title: t("Information.MegaMenu.Title2"),
            megaHref: `/${locale}/news/tag/010-ニュース`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_03_03.png",
            texts: [],
          },
          {
            title: t("Information.MegaMenu.Title3"),
            megaHref: `/${locale}/news/tag/020-イベント-セミナー情報`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_03_01.png",
            texts: [],
          },
          {
            title: t("Information.MegaMenu.Title4"),
            megaHref: `/${locale}/news/tag/030-オンライントレーニング-体験会`,
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_03_02.png",
            texts: [],
          },
        ],
      },
      {
        content: "IR",
        description: t("IR.Description"),
        active: false,
        top: {
          label: t("IR.Label"),
          link: `/${locale}/ir`,
        },
        href: "",
        megaMenu: [
          {
            title: t("IR.MegaMenu.Title1"),
            image: null,
            megaHref: `/${locale}/ir/news`,
            texts: [],
          },
          {
            title: t("IR.MegaMenu.Title2"),
            image: null,
            texts: [
              {
                content: t("EmergingTechnology"),
                link: `/${locale}/technology-strategy-consulting`,
              },
              {
                content: t("DataVisualization"),
                link: `/${locale}/technology-strategy-consulting`,
              },
              {
                content: t("SolutionEngineering"),
                link: `/${locale}/technology-strategy-consulting`,
              },
            ],
          },
          {
            title: t("IR.MegaMenu.Title3"),
            image: null,
            megaHref: `/${locale}/ir/highlight`,
            texts: [],
          },
        ],
      },
    ],
    [pathname, locale]
  );

  const handleMouseOver = (index: number) => {
    if (listItemsRefs) {
      const currentE = listItemsRefs.current[index];

      const getContent = currentE.outerText.split("\n")[0];

      setEHover(getContent);
    }
  };

  const handleScroll = () => {
    const scrollDistanceCurrent = window.scrollY;

    if (scrollDistanceCurrent < 1600) {
      setScrollDistance(false);
    } else {
      setScrollDistance(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <header
      className={`${classes.headerWrapper} ${
        scrollDistance || opened ? classes["headerWrapper--active"] : ""
      }`}
    >
      <div className={classes.container}>
        <div className={classes.headerInner}>
          <div className={classes.siteLogo}>
            <Link href="/">
              {scrollDistance || opened ? (
                <img
                  src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/logo.svg"
                  alt="DELIVERY CONSULTING"
                ></img>
              ) : (
                <img
                  src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/logo_w.svg"
                  alt="DELIVERY CONSULTING"
                ></img>
              )}
            </Link>
          </div>

          <LocaleSwitcher />

          <div className={classes.menuBtn}>
            <Burger
              opened={opened}
              onClick={toggle}
              color={scrollDistance || opened ? "blue" : "white"}
              aria-label="Toggle navigation"
            />
          </div>
          <div
            className={
              opened
                ? `${classes.globalNavi} ${classes.menuOpen}`
                : classes.globalNavi
            }
          >
            <ul className={classes.primaryConts}>
              {linkNar &&
                linkNar.length > 0 &&
                linkNar.map((item: any, i: number) => {
                  return (
                    <li
                      key={i}
                      className={classes.primaryCont}
                      onMouseOver={() => {
                        if (os === "windows") {
                          handleMouseOver(i);
                        }
                      }}
                      onClick={() => {
                        if (
                          item.href === "" &&
                          (os === "ios" || os === "android")
                        ) {
                          handlersItemNavMobi.toggle();
                          handleMouseOver(i);
                        }
                      }}
                      ref={(el) => (listItemsRefs.current[i] = el)}
                    >
                      <div
                        className={
                          item.href !== "" && (os === "ios" || os === "android")
                            ? classes.primaryContLabel
                            : `${classes.primaryContLabel} ${classes.acc}`
                        }
                      >
                        <Link
                          href={item.href}
                          className={classes.primaryContLink}
                        >
                          <span
                            className={`${classes.en} ${
                              scrollDistance ? classes["en--active"] : ""
                            }`}
                          >
                            {item.content}
                          </span>
                          <span
                            className={`${classes.jp} ${
                              scrollDistance ? classes["jp--active"] : ""
                            }`}
                          >
                            {item.description}
                          </span>
                        </Link>
                      </div>
                      {item.href === "" && item.content === eHover && (
                        <div
                          className={`${classes.megaMenu} ${
                            openedItemNavMobi ? classes.openMegaMenu : ""
                          }`}
                        >
                          <div className={classes.megaMenuHeader}>
                            <div className={classes.secondaryContLabel}>
                              <div className={classes.secondaryContLabelEN}>
                                {item.content}
                              </div>
                              <div className={classes.secondaryContLabelJA}>
                                {item.description}
                              </div>
                            </div>
                            {item.top && (
                              <div className={classes.secondaryContTop}>
                                <Link href={item.top.link}>
                                  {item.top.label}
                                </Link>
                              </div>
                            )}
                          </div>
                          <ul className={classes.secondaryConts}>
                            {item.megaMenu &&
                              item.megaMenu.length > 0 &&
                              item.megaMenu.map(
                                (megaItem: any, megaIndex: number) => {
                                  const checkTypeE = megaItem?.image;
                                  if (checkTypeE) {
                                    return (
                                      <li
                                        className={`${classes.secondaryCont}`}
                                        key={megaIndex}
                                      >
                                        <div
                                          className={classes.secondaryContLink}
                                        >
                                          <Link
                                            href={megaItem.megaHref}
                                            className={classes.arrow01}
                                          >
                                            {megaItem.title}
                                          </Link>
                                        </div>
                                        <div
                                          className={classes.secondaryContImage}
                                        >
                                          <img src={megaItem.image} />
                                        </div>
                                        {megaItem.desImage &&
                                          megaItem.desImage.length > 0 && (
                                            <ul
                                              className={
                                                classes.secondaryContLower
                                              }
                                            >
                                              {megaItem.desImage.map(
                                                (
                                                  desI: any,
                                                  desIndex: number
                                                ) => {
                                                  return (
                                                    <li key={desIndex}>
                                                      <Link
                                                        href={desI.linkDesImage}
                                                      >
                                                        {desI.contentDesImage}
                                                      </Link>
                                                    </li>
                                                  );
                                                }
                                              )}
                                            </ul>
                                          )}
                                      </li>
                                    );
                                  } else {
                                    const checkCol = megaItem.texts.length;
                                    return (
                                      <li
                                        key={megaIndex}
                                        className={
                                          checkCol > 4
                                            ? `${classes.secondaryCont} ${classes.col2}`
                                            : `${classes.secondaryCont} ${classes.col5}`
                                        }
                                      >
                                        <div
                                          className={classes.secondaryContLink}
                                        >
                                          <Link
                                            href={`${
                                              megaItem.megaHref
                                                ? megaItem.megaHref
                                                : ""
                                            }`}
                                            className={classes.arrow01}
                                          >
                                            {megaItem.title}
                                          </Link>
                                        </div>

                                        <ul
                                          className={classes.secondaryContLower}
                                        >
                                          {megaItem.texts.map(
                                            (
                                              megaItemText: any,
                                              megaItemIndex: number
                                            ) => {
                                              return (
                                                <li key={megaItemIndex}>
                                                  <Link
                                                    href={megaItemText.link}
                                                  >
                                                    {megaItemText.content}
                                                  </Link>
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </li>
                                    );
                                  }
                                }
                              )}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
            <div className={classes.headerCNV}>
              <ul>
                <li className={classes.headerCNVBtn}>
                  <div>
                    <Link
                      href={`/${locale}/hello`}
                      className={`${classes.headerCNBtnLink} ${
                        scrollDistance || opened
                          ? classes["btnCNV--active"]
                          : ""
                      }`}
                    >
                      <div className={classes.en}>Recuit</div>
                      <div className={classes.jp}>
                        {t("RecruitmentInformation")}
                      </div>
                    </Link>
                  </div>
                </li>
                <li className={classes.headerCNVBtn}>
                  <div>
                    <Link
                      href={`/${locale}/hello`}
                      className={`${classes.headerCNBtnLink} ${
                        scrollDistance || opened
                          ? classes["btnCNV--active"]
                          : ""
                      }`}
                    >
                      <div className={classes.en}>Contact</div>
                      <div className={classes.jp}>{t("Inquiry")}</div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderRoot;
