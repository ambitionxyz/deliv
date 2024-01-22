"use client";

import Link from "next/link";
import { useQuery } from "react-query";

import ROUTER from "../../../../api/Router";
import { fetchDataProjects } from "../../../../api/Project";

import Headerbackground from "../../../../components/headerBackground/HeaderBackground";
import c from "./Page.module.css";
import { useQueryClient } from "@tanstack/react-query";
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

  console.log(data);

  return (
    <>
      <Headerbackground
        namePage="Project"
        image="https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_projects.png"
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
              data.map((item, index) => {
                return (
                  <div className={c.caseBox} key={index}>
                    <div className={c.caseImg}>
                      <img src={item.attributes.image} />
                    </div>
                    <div className={c.caseBody}>
                      <div className={c.caseTitle}>{item.attributes.title}</div>
                      <ul className={c.caseCats}>
                        {item.attributes.themes.content.map(
                          (theme, indexTheme) => {
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
                          (des, indexDes) => {
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
