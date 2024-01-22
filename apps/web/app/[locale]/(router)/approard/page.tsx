"use client";

import Link from "next/link";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";

import c from "./Page.module.css";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Theme from "../../../../components/top/Theme";
import Recuit from "../../../../components/top/Recruit";
const listRender = [
  {
    image:
      "	https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_strategy.svg",
    esTitle: "Strategy",
    jpTitle: "戦略策定・サービス設計",
    des: "ビジネスゴールから逆算し、最新技術や顧客のデータを活用したサービスやビジネスプロセスを設計。事業の全体最適を実現するアーキテクチャを提案します。",
  },
  {
    image:
      "https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_delivery.svg",

    esTitle: "Delivery",
    jpTitle: "高水準のシステムデリバリー",
    des: "独自のシステム開発方法論やアーキテクチャ構築ガイドラインを活用したプロジェクトマネジメントを推進。高水準かつ標準化されたアーキテクチャ主導のシステム構築を実現します。",
  },
  {
    image:
      "	https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_enablement2.svg",
    esTitle: "Enablement",
    jpTitle: "改善しつづける仕組みの内製化",
    des: "導入されたシステムを内製化し、ビジネス効果を可視化しＰＤＣＡを回し続けるための組織・能力開発を支援。システム導入に終わらない、成果を生み出し続ける仕組みづくりを実現します。",
  },
];
const Page = () => {
  const pathname = usePathname();

  const linkList = useMemo(
    () => [
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
      {
        title: "テクノロジー戦略",
        href: "/technology-strategy-consulting",
      },
    ],
    [pathname]
  );

  return (
    <>
      <Headerbackground
        namePage="テクノロジー戦略の力をその手に"
        image="https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_approach.png"
        description="IT・データ戦略策定からシステムデリバリー、内製化支援まで"
        text={[
          "「戦略策定・システムデリバリー・内製化支援」が一体となった",
          "テクノロジーコンサルティングで、企業のビジネスモデルの変革、新規サービス開発を実現します。",
        ]}
      />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>事業概要</span>
        <span>+</span>
        <span>コンサルティング </span>
      </div>
      <div className={c.contents}>
        <div className={c.section}>
          <div className={c.pageIntro}>
            <h2 className={c.bdrTitle}>
              持続的な企業価値向上を実現する <br />
              テクノロジーコンサルティング
            </h2>
            <div className={c.pageIntroBody}>
              <p>
                デジタル変革の成否は企業価値に大きな影響を与えます。米国アカデミズムでは、デジタル化した企業と従来型企業との間に、生産性に140倍の差が生じたという調査結果もあります。
              </p>
              <p className={c.pMiddle}>
                変革を正しく推進するには、経営視点を理解し、最適化した提案のできるITプロフェッショナルが必要不可欠です。
                私達は、レガシーから最先端まで、テクノロジーへの深い知見をベースに、コンサルティングからシステムの実装、内製化支援までをワンストップで
              </p>
              <p className={c.pMiddle}>
                経営とITを最適な形で繋ぎ、継続的な企業価値向上を実現するサポートを行います。
              </p>
            </div>
          </div>
        </div>
        <div className={c.sectionMV}>
          <img src="https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/img_approach_01.png" />
        </div>
        <div className={c.section2}>
          <h2 className={c.bdrTitle}>新たな価値提供へのコミット</h2>
          <div className={c.colBox}>
            <div className={c.colImage}>
              <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_approach_02.png" />
            </div>
            <div className={c.colText}>
              <h3 className={c.boldTitle}>
                「デジタル技術による顧客への新たな価値提供」というDXの本来の目的に沿い、最新テック・データを活用したプロセス設計、アーキテクチャ志向のシステムデリバリー、内製可能な仕組みと体制構築まで、企業のデジタル変革の全体最適化をワンストップで支援します。
              </h3>
              <div className={c.listRender}>
                {listRender.map((item, i) => {
                  return (
                    <div key={i} className={c.itemRender}>
                      <div className={c.itemTitle}>
                        <span className={c.icon}>
                          <img src={item.image} />
                        </span>
                        <span className={c.blueTitle}>{item.esTitle}</span>
                        <span className={c.jpTitle}>{item.jpTitle}</span>
                      </div>
                      <p className={c.text}>{item.des}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={c.sectionMV}>
          <img src="https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/img_approach_03.png" />
        </div>
        <div className={c.section3}>
          <h2 className={c.bdrTitle}>企業価値を最大化するDLC Value</h2>
          <div className={c.colBox}>
            <div className={c.colImage}>
              <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_approach_04.png" />
            </div>
            <div className={c.colText}>
              <h3 className={c.boldTitle}>
                「デジタル技術による顧客への新たな価値提供」というDXの本来の目的に沿い、最新テック・データを活用したプロセス設計、アーキテクチャ志向のシステムデリバリー、内製可能な仕組みと体制構築まで、企業のデジタル変革の全体最適化をワンストップで支援します。
              </h3>
            </div>
          </div>
        </div>
        <div className={c.section4}>
          <h2 className={c.bdrTitle}>企業価値を最大化するDLC Value</h2>
          {linkList.length > 0 && (
            <ul className={c.linkListCol3}>
              {linkList.map((link, i) => {
                return (
                  <li key={i}>
                    <Link className={c.arrow02} href={link.href}>
                      <div className={c.linkListName}>{link.title}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <Recuit />
    </>
  );
};

export default Page;
