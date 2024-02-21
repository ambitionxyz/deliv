"use client";

import Link from "next/link";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";

import c from "./Page.module.css";
import Recuit from "../../../../components/top/Recruit";
import { useOs } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { fetchDataPersons } from "../../../../api/Project";

const listLeader = [
  {
    img: "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_leader_01.png",
    job: "代表取締役CEO",
    name: "阪口 琢夫",
    des: "九州大学農学部修士課程卒業。アーサーアンダーセンアンドカンパニー(現アクセンチュア)に入社。製造業を中心に官公庁などでIT利活用のコンサルティングに携わる。トランスコスモス株式会社取締役を経て、2003年に当社設立。独自のシステム開発方法論「デリバリーアプローチ」をベースに、システム開発からコンサルティングまで、企業価値の向上を実現する事業を展開。高品質のテクノロジーコンサルティング、IT人材の育成と地位向上による日本社会の発展を目指し事業を推進している。    ",
  },
  {
    img: "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_leader_03.png",
    job: "取締役COO",
    name: "高橋 昌樹",
    des: "東京工業大学大学院理工学研究科修士課程卒業後、アンダーセンコンサルティング（現アクセンチュア）に入社。技術、戦略コンサルティングに従事。SAS Institute Japan、EYアドバイザリーにてデータ分析コンサルティングや事業開発を統括し17年当社入社、2020年取締役就任。2022年８月より現職。",
  },
  {
    img: "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_leader_02.png",
    job: "取締役コンサルティング本部長",
    name: "木村 卓司",
    des: "関西学院大学商学部卒業後、大手IT企業にてプログラマとして2001年にキャリアをスタート。2004年当社参画。製造、情報サービス、教育、公益法人、エネルギー業界の新規サービス立ち上げや業務最適化におけるIT導入コンサルティングに従事。専門であるプロジェクトマネジメントと、エンジニア出身の実装スキルを活かし、多くのデジタルサービスの実現や海外拠点の立ち上げを実施。2018年取締役就任。",
  },
];

const Page = () => {
  const [dataPerson, setDataPerson] = useState<any>([]);
  const locale = useLocale();
  useEffect(() => {
    const fetData = async () => {
      const res = await fetchDataPersons(locale);

      setDataPerson(res.data);
    };

    fetData();
  }, [locale]);

  const os = useOs();
  return (
    <>
      <Headerbackground
        namePage="Leadership"
        image={
          os === "windows"
            ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_leadership.png"
            : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_leadership_sp.png"
        }
        description="リーダーシップ"
      />

      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>事業概要</span>
        <span>+</span>
        <span>コンサルティング </span>
      </div>
      <div className={c.contents}>
        <div className={`${c.section} ${c.pb0}`}>
          <div className={c.pageIntro}>
            <h2 className={c.bdrTitle}>トップメッセージ</h2>
            <div className={c.pageIntroBody}>
              <p>
                当社は、国内外の最新テクノロジーの発掘・評価から日本企業への提案・導入、高品質なITプロジェクトの計画・実現を行うテクノロジーコンサルティングカンパニーです。創業から20年、挑戦・互助・公正を尊重する企業文化を醸成し、独自のシステム構築フレームワーク「デリバリーアプローチ」を磨き続け、コンサルタントの育成に力を注いできました。
                現在、200社を超える企業のデジタル変革を支援する機会をいただき、皆様からの大きな期待を糧に、着実に信頼と実績を積み重ねております。
              </p>
              <ul className={c.disc}>
                <li>
                  モダンとレガシー双方の長所を生かしたシステムの全体最適化
                </li>
                <li>
                  クラウド・SaaSを活用したレガシーシステムのモダナイゼーション
                </li>
                <li>ビジネス変革に欠かせないデータの分析・利活用</li>
                <li>お客様のDX推進を支援するデジタルPMO</li>
              </ul>
              <p>
                これらによって、事業の規模、デジタル化の進展状況に応じた最適な形で、お客様のビジネスのデジタル変革を支援いたします。
              </p>
              <p>
                おかげさまで当社は、2021年7月東京証券取引所マザーズ市場（現グロース市場）へ上場いたしました。これからも独立系テクノロジーコンサルティングカンパニーの強みである公平性・透明性・中立性を活かし、お客様にとって本当に必要なテクノロジーを選定・提案・導入し、デジタル変革を推進してまいります。
                <br />
                これからも、優れたテクノロジーコンサルティングが日本社会の発展につながることを信じ、事業に真摯に取り組んでいきたいと思います。
              </p>
              <p className={c.alignRight}>
                代表取締役CEO
                <br />
                阪口 琢夫
              </p>
            </div>
          </div>
        </div>
        <div className={c.section}>
          <h2 className={c.bdrTitle}>リーダーシップ</h2>
          <ul className={c.leaderList}>
            {dataPerson.map((p: any, i: number) => {
              const currentP = p.attributes;
              return (
                <li key={i}>
                  <div className={c.leaderPhoto}>
                    <img src={currentP.image} />
                  </div>
                  <div className={c.leaderJob}>{currentP.position}</div>
                  <div className={c.leaderName}>{currentP.name}</div>
                  <p>{currentP.background}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Recuit />
    </>
  );
};

export default Page;
