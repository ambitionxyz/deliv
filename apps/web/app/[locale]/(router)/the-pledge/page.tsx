"use client";

import Link from "next/link";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";
import Recuit from "../../../../components/top/Recruit";

import c from "./Page.module.css";
import { useOs } from "@mantine/hooks";
import { useTranslations } from "next-intl";

const Page = () => {
  const os = useOs();
  const t = useTranslations("Index");

  return (
    <>
      <Headerbackground
        namePage="The PLEDGE"
        image={
          os === "windows"
            ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_pledge.png"
            : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_pledge_sp.png"
        }
        description={t("ManagementPhilosophy")}
      />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>{t("AboutUs")}</span>
        <span>+</span>
        <span>{t("OurOath")} </span>
      </div>

      <div className={c.content}>
        <div className={`${c.section} ${c.narrow}`}>
          <div className={c.pledgeLead}>
            <p>{t("Customers")}</p>
            <p>{t("Stakeholders")}</p>
            <p>
              {t("Formulated")}
              <br />
              {t("Guidepost")}
            </p>
          </div>
          <div className={c.pledgeFrame}>
            <h2 className={c.pledgeTlte}>The PLEDGE</h2>
            <div className={c.pledgeTlteJP}>
              {t("Changing")}
              <br className={c["only-sp"]} />
              {t("Technology")}
            </div>
            <dl>
              <dt>{t("BusinessPartners")}</dt>
              <dd>
                {t("Professionals")}
                <br />
                {t("Construction")}
              </dd>
              <dt>
                {t("Ahead")}
                <br className={c["only-sp"]} />
                {t("DevelopingIT2")}
              </dt>
              <dd>
                {t("Transformation")}
                <br />
                1){t("Architects")}){t("ProjectManagement")}3)
                {t("Competencies")}
              </dd>
              <dt> {t("Healthy")}</dt>
              <dd>
                {t("Foster")}
                <br />
                {t("Industry")}
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <Recuit />
    </>
  );
};

export default Page;
