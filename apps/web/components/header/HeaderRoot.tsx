"use client";

import Link from "next/link";
import classes from "./HeaderToor.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Burger } from "@mantine/core";
import { useDisclosure, useOs } from "@mantine/hooks";

const HeaderRoot = () => {
  const [scrollDistance, setScrollDistance] = useState<boolean>(false);
  const [eHover, setEHover] = useState(null);

  const [opened, { toggle, close }] = useDisclosure();
  const [openedItemNavMobi, handlersItemNavMobi] = useDisclosure();
  const pathname = usePathname();
  const listItemsRefs = useRef<any>([]);
  const os = useOs();
  const linkNar = useMemo(
    () => [
      {
        content: "What we do",
        description: "事業概要",
        active: false,
        top: null,
        href: "",
        megaMenu: [
          {
            title: "コンサルティング",
            megaHref: "/jp/approard",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_01_01.png",
            desImage: [
              {
                contentDesImage: "テクノロジー戦略",
                linkDesImage: "/jp/technology-strategy-consulting",
              },
            ],
            texts: [],
          },
          {
            title: "強みと特長",
            megaHref: "/jp/ourstrength",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_01_02.png",
            texts: [],
          },
          {
            title: "主なテーマ",
            image: null,

            texts: [
              {
                content: "テクノロジー戦略",
                link: "/jp/technology-strategy-consulting",
              },
              {
                content: "モダナイゼーション",
                link: "/jp/modernization",
              },
              {
                content: "エマージングテクノロジー",
                link: "/jp/emerging-technology",
              },
              {
                content: "データビジュアライゼーション",
                link: "/jp/data-visualization",
              },
              {
                content: "AI＆アナリティクス",
                link: "/jp/ai_analytics",
              },
            ],
          },
        ],
      },
      {
        content: "Project",
        description: "案件事例",
        active: pathname === "projects",
        href: "/jp/projects",
        top: null,
      },
      {
        content: "Who we are",
        description: "私たちについて",
        active: false,
        top: null,
        href: "",
        megaMenu: [
          {
            title: "経営理念",
            megaHref: "/jp/the-pledge",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_01.png",
            texts: [],
          },
          {
            title: "会社概要",
            megaHref: "/jp/company_profile",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_02.png",
            desImage: [
              {
                contentDesImage: "テクノロジーパートナー",
                linkDesImage: "/jp/company_profile/products",
              },
              {
                contentDesImage: "関連会社",
                linkDesImage: "/jp/company_profile/associated_company",
              },
            ],
            texts: [],
          },
          {
            title: "リーダーシップ",
            megaHref: "/jp/leadership",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_03.png",
            texts: [],
          },
          {
            title: "人材育成",
            megaHref: "/jp/employee-development-system",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_04.png",
            texts: [],
          },
        ],
      },
      {
        content: "Sustainability",
        description: "サステナビリティ",
        active: pathname === "sustainability",
        href: "/jp/sustainability",
        top: null,
      },
      {
        content: "Information",
        description: "お知らせ",
        active: false,
        href: "",
        top: {
          label: "お知らせトップ",
          link: "/jp/news",
        },
        megaMenu: [
          {
            title: "プレスリリース",
            megaHref: "/jp/news/tag/001-プレスリリース",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_02_01.png",
            texts: [],
          },
          {
            title: "ニュース",
            megaHref: "/jp/news/tag/010-ニュース",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_03_03.png",
            texts: [],
          },
          {
            title: "イベント・セミナー情報",
            megaHref: "/jp/news/tag/020-イベント-セミナー情報",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_03_01.png",
            texts: [],
          },
          {
            title: "オンライントレーニング・体験会",
            megaHref: "/jp/news/tag/030-オンライントレーニング-体験会",
            image:
              "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_03_02.png",
            texts: [],
          },
        ],
      },
      {
        content: "IR",
        description: "株主・投資家向け情報",
        active: false,
        top: {
          label: "株主・投資家向け情報トップ",
          link: "/jp/ir",
        },
        href: "",
        megaMenu: [
          {
            title: "IRニュース",
            image: null,
            megaHref: "/jp/ir/news",
            texts: [],
          },
          {
            title: "主なテーマ",
            image: null,
            texts: [
              {
                content: "エマージングテクノロジー",
                link: "/jp/technology-strategy-consulting",
              },
              {
                content: "データビジュアライゼーション",
                link: "/jp/technology-strategy-consulting",
              },
              {
                content: "ソリューションエンジニアリング",
                link: "/jp/technology-strategy-consulting",
              },
            ],
          },
          {
            title: "財務ハイライト",
            image: null,
            megaHref: "/jp/ir/highlight",
            texts: [],
          },
        ],
      },
    ],
    [pathname]
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
                                            href={`${
                                              megaItem.megaHref
                                                ? megaItem.megaHref
                                                : "/jp/approard"
                                            }`}
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
                                                : "/jp/approard"
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
                      href=""
                      className={`${classes.headerCNBtnLink} ${
                        scrollDistance || opened
                          ? classes["btnCNV--active"]
                          : ""
                      }`}
                    >
                      <div className={classes.en}>Recuit</div>
                      <div className={classes.jp}>採用情報</div>
                    </Link>
                  </div>
                </li>
                <li className={classes.headerCNVBtn}>
                  <div>
                    <Link
                      href=""
                      className={`${classes.headerCNBtnLink} ${
                        scrollDistance || opened
                          ? classes["btnCNV--active"]
                          : ""
                      }`}
                    >
                      <div className={classes.en}>Contact</div>
                      <div className={classes.jp}>採用情報</div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className={classes.headerCNV}>
            <ul>
              <li className={classes.headerCNVBtn}>
                <div>
                  <Link
                    href=""
                    className={`${classes.headerCNBtnLink} ${
                      scrollDistance ? classes["btnCNV--active"] : ""
                    }`}
                  >
                    <div className={classes.en}>Recuit</div>
                    <div className={classes.jp}>採用情報</div>
                  </Link>
                </div>
              </li>
              <li className={classes.headerCNVBtn}>
                <div>
                  <Link
                    href=""
                    className={`${classes.headerCNBtnLink} ${
                      scrollDistance ? classes["btnCNV--active"] : ""
                    }`}
                  >
                    <div className={classes.en}>Contact</div>
                    <div className={classes.jp}>採用情報</div>
                  </Link>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderRoot;
