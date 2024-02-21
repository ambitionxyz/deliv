"use client";

import Link from "next/link";
import { useOs } from "@mantine/hooks";

import { fetchDataProjects } from "../../../../api/Project";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";
import c from "./Page.module.css";
import { useEffect, useState } from "react";
import Recuit from "../../../../components/top/Recruit";
import { useLocale, useTranslations } from "next-intl";

const Page = () => {
  const [data, setData] = useState<object[]>();
  const locale = useLocale();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchDataProjects(locale);
      console.log(res.data);
      setData(res.data);
    };

    fetchData();
  }, [locale]);

  const t = useTranslations("Index");

  const os = useOs();

  return (
    <>
      <Headerbackground
        namePage="Project"
        image={
          os === "windows"
            ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_projects.png"
            : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_projects_sp.png"
        }
        description={t("CaseExample")}
      />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>{t("CaseExample")}</span>
      </div>
      <div className={c.contents}>
        <div className={c.section}>
          <div className={c.projectIndexList}>
            {data &&
              data.length > 0 &&
              data.map((item: any, index: number) => {
                return (
                  <div className={c.caseBox} key={index}>
                    <div className={c.caseImg}>
                      <img src={item.attributes.image} />
                    </div>
                    <div className={c.caseBody}>
                      <div className={c.caseTitle}>{item.attributes.title}</div>
                      <ul className={c.caseCats}>
                        {item.attributes.Themes.map(
                          (theme: any, indexTheme: number) => {
                            return (
                              <li key={indexTheme} className={c["cat-theme"]}>
                                {theme.Name}
                              </li>
                            );
                          }
                        )}
                      </ul>
                      <div className={c.caseTxt}>
                        {item.attributes.Descriptions.map(
                          (des: any, indexDes: number) => {
                            return <p key={indexDes}>{des.Name}</p>;
                          }
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Recuit />
    </>
  );
};

export default Page;
