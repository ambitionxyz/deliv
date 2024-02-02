"use client";

import { useEffect, useState } from "react";
import { fetchDataIRs } from "../../../../../api/IR";
import Headerbackground from "../../../../../components/headerBackground/HeaderBackground";

import c from "./Page.module.css";
import Link from "next/link";

const tagList = [
  {
    tag: "すべて",
  },
  {
    tag: "決算・適時開示",
  },
  {
    tag: "IR資料",
  },
  {
    tag: "お知らせ",
  },
];

const Page = () => {
  const [year, setYear] = useState<string>("2023");
  const [currentIRTag, setCurrentIRTag] = useState<string>("すべて");
  const [listIR, setListIR] = useState<any>([]);

  useEffect(() => {
    const getDataIrBy = async () => {
      const dataFetch = await fetchDataIRs();

      const result: any[] = [];

      dataFetch.data.map((item: any) => {
        //filter year
        const currentItem = item.attributes;
        const currentTime = currentItem.time.split(".")[0];

        if (year !== currentTime) {
          return;
        } else {
          if (currentIRTag === "すべて") {
            result.push(item);
          } else {
            //fiter tag
            currentItem.tag.map((t: any) => {
              if (t.tagName === currentIRTag) {
                result.push(item);
              }
            });
          }
        }
      });
      setListIR(result);
    };

    getDataIrBy();
  }, [currentIRTag, year]);

  const handleSelectChange = (event: any) => {
    const selectedOption = event.target.value;
    setYear(selectedOption);
  };

  return (
    <>
      <Headerbackground namePage="IR NEWS" description="IRニュース" />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>IRニュース </span>
      </div>
      <div className={c.contents}>
        <div className={c.section}>
          <div className={c.irNews}>
            <div className={c.eir}>
              <div className={c.s_yearController}>
                <select
                  className={c.s_eirSelect}
                  value={year}
                  onChange={handleSelectChange}
                >
                  <option value="2023">2023年</option>
                  <option value="2022">2022年</option>
                  <option value="2021">2021年</option>
                </select>
              </div>

              <div className={c.s_newsTypeController}>
                <ul className={c.s_eirTab}>
                  {tagList.map((tag: any, indexTag: number) => (
                    <li
                      key={indexTag}
                      onClick={() => {
                        setCurrentIRTag(tag.tag);
                      }}
                      className={`${c.activeTarget} ${
                        currentIRTag === tag.tag ? c.active : ""
                      }`}
                    >
                      <a href="javascript:void(0)">{tag.tag}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${c.s_eirBlock}`}>
                <ul className={c.listedNews}>
                  {listIR.length > 0 &&
                    listIR.map((irItem: any, i: number) => {
                      const ir = irItem.attributes;
                      return (
                        <li key={i}>
                          <div className={c.listedNewsHead}>
                            <div className={c.newsDate}>{ir.time}</div>
                            <ul className={c.newsCats}>
                              {ir.tag.length > 0 &&
                                ir.tag.map((t: any, it: number) => (
                                  <li className={c.newsCat}>{t.tagName}</li>
                                ))}
                            </ul>
                          </div>
                          <div className={c.listedNewsTitle}>
                            <Link target="_blank" href={ir.id_IR}>
                              {ir.title}
                            </Link>
                            <div className={c.s_titleBox_type}>
                              <span>PDF</span>
                            </div>
                            <div className={c.s_titleBox_size}>
                              <span>{`(${ir.size}KB)`}</span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className={`${c.eir_pdfNote} ${c.s_eirBlock}`}>
                <p className={c.eir_pdfNote_item}>
                  <a
                    href="https://get.adobe.com/jp/reader/otherversions/"
                    target="_blank"
                  >
                    <img
                      src="https://ssl4.eir-parts.net/Custom/public/v5parts/9240/jp/20210630/app/img/get_adobe_reader.png"
                      alt="Get Adobe Reader"
                      width="158"
                      height="39"
                      border="0"
                    />
                  </a>
                </p>
                <p className={c.eir_pdfNote_item}>
                  PDF形式のファイルをご覧になるためにはAdobe Readerが必要です。
                  <br />
                  Adobe
                  Readerをお持ちでない場合は、こちらのアイコンからダウンロードして下さい。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
