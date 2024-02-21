"use client";

import Link from "next/link";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";

import c from "./Page.module.css";
import Recuit from "../../../../components/top/Recruit";
import { useOs } from "@mantine/hooks";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { fetchDataCompanys } from "../../../../api/Project";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const listRender = [{ title: "商号", description: "" }];
const Page = () => {
  const [dataCompany, setDataCompany] = useState<any>();
  const os = useOs();
  const t = useTranslations("Index");
  const locale = useLocale();

  useEffect(() => {
    const fetData = async () => {
      const res = await fetchDataCompanys(locale);
      const data = res.data[0].attributes;

      setDataCompany(data);
    };

    fetData();
  }, [locale]);

  return (
    <>
      <Headerbackground
        namePage="Company profile"
        image={
          os === "windows"
            ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_company.png"
            : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_company_sp.png"
        }
        description={t("CompanyProfile")}
        anChor={[
          {
            label: t("CompanyProfile"),
            href: "/jp/company_profile#cp01",
          },
          {
            label: t("AccessMap"),
            href: "https://www.google.com/maps/place/%E6%9D%B1%E4%BA%AC%E3%83%9F%E3%83%83%E3%83%89%E3%82%BF%E3%82%A6%E3%83%B3/@35.6659803,139.7308747,15z/data=!4m6!3m5!1s0x60188b78922e6353:0xeb3e39dbe18da4d6!8m2!3d35.6659803!4d139.7308747!16zL20vMDd3N3Zs?hl=ja&entry=ttu",
          },
          {
            label: t("History"),
            href: "/jp/company_profile#cp03",
          },
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
        <div className={`${c.section} ${c.pb0}`}>
          <h2 className={c.bdrTitle}>{t("CompanyProfile")}</h2>
          <div className={c.companyOutline}>
            <dl>
              <dt>{t("TradeName")}</dt>
              <dd>
                <p>{dataCompany?.name}</p>
              </dd>
              <dt>{t("BusinessContent")}</dt>
              <dd>
                <p>{dataCompany?.detail}</p>
              </dd>
              <dt>{t("Location")}</dt>
              <dd>
                {dataCompany?.branches?.data?.map((branch: any, i: number) => {
                  const currentBranch = branch.attributes;
                  return (
                    <p key={i}>
                      <strong>{currentBranch.name_branch}</strong>
                      <br />
                      {currentBranch.des}
                      <Link href={currentBranch.location}>
                        アクセスマップはこちら
                      </Link>
                      ]
                    </p>
                  );
                })}
              </dd>
              <dt>設立</dt>
              <dd>
                <p>{dataCompany?.founding}</p>
              </dd>
              <dt>取引銀行</dt>
              <dd>
                <p>{dataCompany?.bank}</p>
              </dd>
              <dt>グループ会社</dt>
              <dd>
                <p>{dataCompany?.group}</p>
              </dd>
              <dt>主要顧客企業</dt>
              <dd>
                <p>
                  {dataCompany?.customers?.data?.map((c: any, ic: number) => {
                    const currentC = c.attributes;
                    return (
                      <>
                        {currentC.Name}
                        <br />
                      </>
                    );
                  })}
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div className={`${c.section} ${c.pb0}`}>
          <div className={c.companyProfileArea}>
            <h2 className={c.bdrTitle}>アクセスマップ</h2>
            <div className={c.accessmap}>
              <div className={c.mapBox}>
                <div className={c.map}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4373589763195!2d139.7313051!3d35.666231499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7896376bff%3A0x4e12eb7c8d74f961!2z44CSMTA3LTAwNTIg5p2x5Lqs6YO95riv5Yy66LWk5Z2C77yZ5LiB55uu77yXIOODn-ODg-ODieOCv-OCpuODs-ODu-OCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1671783971717!5m2!1sja!2sjp"
                    width="600"
                    height="450"
                    data-service="google-maps"
                  ></iframe>
                </div>
                <p>
                  <strong>本社</strong>
                  <br />
                  〒107-6223 東京都港区赤坂9-7-1　ミッドタウン・タワー23F
                </p>
                <div className={c.mapLink}>
                  <Link href="https://goo.gl/maps/92foyTdpZAKDhpki9">
                    Google Maps
                  </Link>
                </div>
              </div>

              <div className={c.mapBox}>
                <div className={c.map}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4373589763195!2d139.7313051!3d35.666231499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7896376bff%3A0x4e12eb7c8d74f961!2z44CSMTA3LTAwNTIg5p2x5Lqs6YO95riv5Yy66LWk5Z2C77yZ5LiB55uu77yXIOODn-ODg-ODieOCv-OCpuODs-ODu-OCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1671783971717!5m2!1sja!2sjp"
                    width="600"
                    height="450"
                    data-service="google-maps"
                  ></iframe>
                </div>
                <p>
                  <strong>本社</strong>
                  <br />
                  〒107-6223 東京都港区赤坂9-7-1　ミッドタウン・タワー23F
                </p>
                <div className={c.mapLink}>
                  <Link href="https://goo.gl/maps/92foyTdpZAKDhpki9">
                    Google Maps
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={c.section}>
          <div className={c.companyProfileArea}>
            <div className={c.pageIntro}>
              <h2 className={c.bdrTitle}>沿革</h2>
              <div className={c.pageIntroBody}>
                <p>
                  デリバリーコンサルティングは、デジタル技術を活用したコンサルティングとシステム開発を通じて、企業のビジネスモデル変革や新規サービス開発を実現するテクノロジーコンサルティングファームです。
                </p>
                <p>
                  2003年の設立以来、テクノロジーに対する深い知見をベースに、システム開発からITコンサルティングにサービスをひろげ、お客様からの高い信用を獲得し、国内外に複数拠点を設け事業を拡大してきました。2016年には、独立系テクノロジーコンサルティングカンパニーとして商号を変更。2021年には東京証券取引所マザーズ市場（現グロース市場）に上場し、さらなる事業の成長を目指しております。
                </p>
              </div>
            </div>
            <div className={c.companyHistory}>
              <dl>
                {dataCompany?.high_lights?.data?.map((h: any, ih: number) => {
                  const currenH = h.attributes;
                  return (
                    <>
                      <dt>{currenH.year}</dt>
                      <dd>
                        <BlocksRenderer content={currenH.content} />
                      </dd>
                    </>
                  );
                })}
                {/* <dt>2003</dt>
                <dd>
                  <p>株式会社デリバリー設立、ITコンサルティング事業を開始</p>
                </dd>

                <dt>2005</dt>
                <dd>
                  <p>
                    ベトナムにデリバリーベトナムを設立し日本向けオフショア開発事業開始
                  </p>
                </dd>

                <dt>2006</dt>
                <dd>
                  <p>タイにデリバリータイを設立し、日本向けBPO事業を開始</p>
                </dd>

                <dt>2008</dt>
                <dd>
                  <p>新卒採用支援ツールPBNext提供開始</p>
                </dd>

                <dt>2011</dt>
                <dd>
                  <p>
                    ベトナムにデリバリーベトナムを設立し日本向けオフショア開発事業開始
                    <br />
                    福岡オフィスを開設、IT人材の活用拡大
                  </p>
                </dd>
                <dt>2013</dt>
                <dd>
                  <p>
                    ベトナムにデリバリーベトナムを設立し日本向けオフショア開発事業開始
                    <br />
                    福岡オフィスを開設、IT人材の活用拡大
                  </p>
                </dd>
                <dt>2014</dt>
                <dd>
                  <p>
                    ベトナムにデリバリーベトナムを設立し日本向けオフショア開発事業開始
                    <br />
                    福岡オフィスを開設、IT人材の活用拡大
                  </p>
                </dd>
                <dt>2018</dt>
                <dd>
                  <p>
                    ベトナムにデリバリーベトナムを設立し日本向けオフショア開発事業開始
                    <br />
                    福岡オフィスを開設、IT人材の活用拡大
                  </p>
                </dd>
                <dt>2023</dt> */}
                {/* <dd>
                  <p>
                    ベトナムにデリバリーベトナムを設立し日本向けオフショア開発事業開始
                    <br />
                    福岡オフィスを開設、IT人材の活用拡大
                  </p>
                </dd> */}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Recuit />
    </>
  );
};

export default Page;
