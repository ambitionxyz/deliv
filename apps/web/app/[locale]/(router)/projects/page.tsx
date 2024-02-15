"use client";

import Link from "next/link";
import { useOs } from "@mantine/hooks";

import { fetchDataProjects } from "../../../../api/Project";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";
import c from "./Page.module.css";
import { useEffect, useState } from "react";
import Recuit from "../../../../components/top/Recruit";

const Page = () => {
  const [data, setData] = useState<object[]>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchDataProjects();
      setData(res.data);
    };

    fetchData();
  }, []);

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
        description="案件事例"
      />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>案件事例</span>
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
                        {item.attributes.themes.content.map(
                          (theme: any, indexTheme: number) => {
                            return (
                              <li key={indexTheme} className={c["cat-theme"]}>
                                {theme}
                              </li>
                            );
                          }
                        )}
                      </ul>
                      <div className={c.caseTxt}>
                        {item.attributes.descriptions.content.map(
                          (des: any, indexDes: number) => {
                            return <p key={indexDes}>{des}</p>;
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
