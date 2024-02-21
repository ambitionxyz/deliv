"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Headerbackground from "../headerBackground/HeaderBackground";

import c from "./NewWrapper.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchDataNews } from "../../api/News";
import { useDisclosure } from "@mantine/hooks";
import Recuit from "../top/Recruit";
import { useLocale } from "next-intl";

export const NewContext = createContext<any>(null);

function NewsProvider(props: any) {
  const [headerBackGround, setHeaderBackground] = useState(null);
  const [tag, setTag] = useState("");
  const [listTag, setListTag] = useState<any>([]);
  const locale = useLocale();

  useEffect(() => {
    const getDataProjectBy = async () => {
      const dataFetch = await fetchDataNews(locale);
      console.log(dataFetch);
      if (tag === "") {
        setListTag(dataFetch.data);
        return;
      }
      const result: any[] = [];
      dataFetch.data.map((item: any) => {
        const tags = item.attributes.Tags;

        if (tags.length > 0) {
          tags.map((t: any, i: number) => {
            if (t.Name === tag) {
              return result.push(item);
            }
          });
        }
      });
      setListTag(result);
    };
    getDataProjectBy();
  }, [tag, locale]);

  return (
    <NewContext.Provider
      value={{
        headerBackGround,
        setHeaderBackground,
        tag,
        setTag,
        listTag,
        setListTag,
      }}
    >
      {props.children}
    </NewContext.Provider>
  );
}

interface ContentProps {
  children?: React.ReactNode;
}

function Content({ children = null }: ContentProps) {
  const { headerBackGround, listTag, setListTag, setTag } =
    useContext(NewContext);
  const [openedTag, handlers] = useDisclosure(false);

  const pathName = usePathname();
  const locale = useLocale();

  if (!headerBackGround || !listTag) {
    return <>LOADING</>;
  }

  return (
    <>
      <Headerbackground {...headerBackGround} />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span>&gt;</span>
        <span>{headerBackGround.description}</span>
      </div>
      {!children ? (
        <div className={c.contents}>
          <div className={c.section}>
            <div className={c.newsCategories}>
              <div
                onClick={() => handlers.toggle()}
                className={`${c.curentCategory} ${c["only-sp"]} ${
                  openedTag ? c.open : ""
                }`}
              >
                すべて
              </div>
              <ul className={openedTag ? c.openList : ""}>
                <li
                  onClick={() => {
                    setTag("");
                  }}
                >
                  <Link
                    href={`/${locale}/news`}
                    className={pathName === `/${locale}/news` ? c.current : ""}
                  >
                    すべて
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setTag("プレスリリース");
                  }}
                >
                  <Link
                    href={`/${locale}/news/tag/001-プレスリリース`}
                    className={
                      pathName === `/${locale}/news/tag/001-プレスリリース`
                        ? c.current
                        : ""
                    }
                  >
                    プレスリリース
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setTag("ニュース");
                  }}
                >
                  <Link
                    href={`/${locale}/news/tag/010-ニュース`}
                    className={
                      pathName === `/${locale}/news/tag/010-ニュース`
                        ? c.current
                        : ""
                    }
                  >
                    ニュース
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/news/tag/020-イベント-セミナー情報`}
                    className={
                      pathName ===
                      `/${locale}/news/tag/020-イベント-セミナー情報`
                        ? c.current
                        : ""
                    }
                  >
                    イベント・セミナー情報
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/news/tag/030-オンライントレーニング-体験会`}
                    className={
                      pathName ===
                      `/${locale}/news/tag/030-オンライントレーニング-体験会`
                        ? c.current
                        : ""
                    }
                  >
                    オンライントレーニング・体験会
                  </Link>
                </li>
              </ul>
            </div>

            <div className={c.newsIndex}>
              <ul className={c.listedNews}>
                {listTag.length > 0 &&
                  listTag.map((tag: any, index: number) => {
                    const currentTag = tag.attributes;
                    console.log({ currentTag });

                    return (
                      <li key={index}>
                        <div className={c.listedNewsHead}>
                          <div className={c.newsDate}>{currentTag.time}</div>
                          <ul className={c.newsCats}>
                            {currentTag.Tags.length > 0 &&
                              currentTag.Tags.map((t: any, i: number) => {
                                return (
                                  <li key={i} className={c.newsCat}>
                                    {t.Name}
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                        <div className={c.listedNewsTitle}>
                          <Link href={`/${locale}/news/${currentTag.id_new}`}>
                            {currentTag.title}
                          </Link>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={c.pager}>
              <div className={c.btnPrev}>
                <Link className={c["pagination__link--disabled"]} href="" />
              </div>
              <ul>
                <li className={c.current}>
                  <Link href="">1</Link>
                </li>
                <li>
                  <Link href="">2</Link>
                </li>
                <li>
                  <Link href="">3</Link>
                </li>
                <li>
                  <Link href="">4</Link>
                </li>
                <li>
                  <Link href="">5</Link>
                </li>
              </ul>
              <div className={c.btnNext}>
                <Link className={c["pagination__link--next"]} href="" />
              </div>
            </div>
          </div>
          <Recuit />
        </div>
      ) : (
        children
      )}
    </>
  );
}

NewsProvider.Content = Content;

export default NewsProvider;
