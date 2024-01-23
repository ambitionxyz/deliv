"use client";

import { useContext, useEffect } from "react";
import WhatWeDoProvider, {
  WhatWeDoContext,
} from "../../../../components/whatWeDo/WhatWeDoWrapper";

const listThemeCharater = [
  {
    title: "モダナイズ診断",
    body: "企業独自に作られた現行システムを診断し、ビジネスへの阻害要因とシステムモダナイゼーションの必要性を分析します。開発コスト、スピードなどの定量分析と、柔軟性、ガバナンス、セキュリティなどの定性分析を実施。",
  },
  {
    title: "モダナイズ構想",
    body: "ビジネス成長に追従することができるシステム全体像（アーキテクチャ）を検討します。あるべきアーキテクチャと現行システムのギャップを検証しながら、実現に向けたロードマップを作成します。",
  },
  {
    title: "モダナイゼーション",
    body: "ビジネスの変化に対応できるよう、アプリケーションとデータを柔軟に配置しながらシステム変革を実施。レガシーシステムで課題になりがちなシステムをまたぐデータ活用を実現。また、業務がシステム変革に適応できるよう、周辺業務と組織の変革を実施します。",
  },
  {
    title: "内製化",
    body: "単なるアプリケーション開発スキルの習得ではなく、お客様主導の開発プロジェクト実行までをゴールとして内製化のコンサルティングをします。実際のプロジェクトをベースにして、コンサルタントが伴走しながらトレーニングと習熟度評価を行います",
  },
];

const Page = () => {
  const { setHeaderBackground, setThemeLead, setListThemeCharater, setThemes } =
    useContext(WhatWeDoContext);

  useEffect(() => {
    setHeaderBackground({
      namePage: "Modernization",
      image:
        "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_theme_04.png",
      description: "モダナイゼーション",
    });

    setThemeLead(
      "ビジネスやコンプライアンスの変化に迅速に対応するためには、最新の技術や環境に適したシステムの変革が必要です。モダナイゼーションとは、現状稼働している既存システムのプログラムやデータなどのIT資産を活かしながら、これらの資産を様々な手法で最新の技術や環境に適したシステムに変革するソリューションです。"
    );

    setListThemeCharater(listThemeCharater);

    setThemes("モダナイゼーション");
  }, []);

  return <WhatWeDoProvider.Content />;
};

export default Page;
