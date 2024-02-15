"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Headerbackground from "../headerBackground/HeaderBackground";

import c from "./NewWrapper.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchDataNews } from "../../api/News";
import { useDisclosure } from "@mantine/hooks";
import Recuit from "../top/Recruit";

export const NewContext = createContext<any>(null);

function NewsProvider(props: any) {
  const [headerBackGround, setHeaderBackground] = useState(null);
  const [tag, setTag] = useState("");
  const [listTag, setListTag] = useState<any>([]);

  useEffect(() => {
    const getDataProjectBy = async () => {
      const dataFetch = await fetchDataNews();
      if (tag === "") {
        setListTag(dataFetch.data);
        return;
      }
      const result: any[] = [];
      dataFetch.data.map((item: any) => {
        const tags = item.attributes.tag;

        if (tags.length > 0) {
          tags.map((t: any, i: number) => {
            if (t.tagName === tag) {
              return result.push(item);
            }
          });
        }
      });
      setListTag(result);
    };
    getDataProjectBy();
  }, [tag]);

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
                    href="/jp/news"
                    className={pathName === "/jp/news" ? c.current : ""}
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
                    href="/jp/news/tag/001-プレスリリース"
                    className={
                      pathName === "/jp/news/tag/001-プレスリリース"
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
                    href="/jp/news/tag/010-ニュース"
                    className={
                      pathName === "/jp/news/tag/010-ニュース" ? c.current : ""
                    }
                  >
                    ニュース
                  </Link>
                </li>
                <li>
                  <Link
                    href="/jp/news/tag/020-イベント-セミナー情報"
                    className={
                      pathName === "/jp/news/tag/020-イベント-セミナー情報"
                        ? c.current
                        : ""
                    }
                  >
                    イベント・セミナー情報
                  </Link>
                </li>
                <li>
                  <Link
                    href="/jp/news/tag/030-オンライントレーニング-体験会"
                    className={
                      pathName ===
                      "/jp/news/tag/030-オンライントレーニング-体験会"
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
                    return (
                      <li key={index}>
                        <div className={c.listedNewsHead}>
                          <div className={c.newsDate}>{currentTag.time}</div>
                          <ul className={c.newsCats}>
                            {currentTag.tag.length > 0 &&
                              currentTag.tag.map((t: any, i: number) => {
                                return (
                                  <li key={i} className={c.newsCat}>
                                    {t.tagName}
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                        <div className={c.listedNewsTitle}>
                          <Link href={`/jp/news/${currentTag.id_new}`}>
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
