"use client";

import { useContext, useEffect } from "react";
import WhatWeDoProvider, {
  WhatWeDoContext,
} from "../../../../components/whatWeDo/WhatWeDoWrapper";

const listThemeCharater = [
  {
    title: "ダッシュボードデザイン",
    body: "データの視覚化は、業績や業務効率におけるトレンドや規則性、例外的な事象を瞬時に捉えるのに有効な手段です。豊富な事例に基づくベストプラクティスを活用し、ユースケースに最適なダッシュボードをデザイン・実装します",
  },
  {
    title: "データアプリケーション",
    body: "データのマネタイズや社内でのデータ活用促進のためには、BIなどのデータ可視化ツールによる配布では不十分なケースが少なくありません。データ基盤構築とシステムエンジニアリングを組み合わせ、社内外のデータユーザにデータやインサイトを提供するアプリケーションを設計・構築します。",
  },
  {
    title: "データモデリング＆エンジニアリング",
    body: "ビジネスとデータの知見を活用し、ユースケースの実現に必要なデータモデルを設計するとともに、データソースからデータレイク、データウェアハウス、データマートまでのデータレイヤーの実装を支援します。",
  },
  {
    title: "教育＆内製化",
    body: "社内ユーザーが、自分で視覚化ツールを運用できるよう、内製化に向けたサポートを提供します。ダッシュボード要件整理から設計・構築、公開後の効果測定といった一連のタスクを、クライアント企業の担当メンバーで実施可能となるまで伴走します。",
  },
  {
    title: "Tableau Cloud Migration",
    body: "モダンBIツールTableauの委託先公式サプライヤーとしての豊富な経験と実績を活かし、クラウドベースの「Tableau Cloud　Migration」サービスを提供します。詳しくはこちらをご覧ください。→",
    image: "https://www.deliv.co.jp/hubfs/corp_2022/files/images/bnr_tcm2.png",
  },
];

const Page = () => {
  const { setHeaderBackground, setThemeLead, setListThemeCharater, setThemes } =
    useContext(WhatWeDoContext);

  useEffect(() => {
    setHeaderBackground({
      namePage: "Data visualization",
      image:
        "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_theme_09.png",
      description: "データビジュアライゼーション",
    });

    setThemeLead(
      "データの視覚化は、業績や業務効率におけるトレンドや規則性、例外的な事象を瞬時に捉えるのに有効な手段です。豊富な事例に基づくベストプラクティスを活用し、ユースケースに最適なビジュアライゼーションをデザイン・実装します。"
    );

    setListThemeCharater(listThemeCharater);

    setThemes("データビジュアライゼーション");
  }, []);

  return <WhatWeDoProvider.Content />;
};

export default Page;
