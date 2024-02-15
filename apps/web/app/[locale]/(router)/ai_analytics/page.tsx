"use client";

import { useContext, useEffect } from "react";
import WhatWeDoProvider, {
  WhatWeDoContext,
} from "../../../../components/whatWeDo/WhatWeDoWrapper";
import { useOs } from "@mantine/hooks";

const listThemeCharater = [
  {
    title: "プロセスマイニング",
    body: "プロセスマイニングでは、社内システムなどのログデータから、業務プロセスの処理パターン（正常、例外処理、処理頻度、ボトルネック箇所など）の可視化・定量化を実現します。客観的なデータに基づき、業務コスト削減や業務スピードの向上、プロセス最適化によるCO2削減などを支援します。",
  },
  {
    title: "自然言語生成",
    body: "人間が理解できる文章を自動作成するAI（自然言語生成：NLG）を活用し、従来では人間に頼るしかなかった報告書やプレゼンテーション制作の自動化・省力化を支援します。",
  },
  {
    title: "AIエージェント",
    body: "世界が認めたConversational AIで新しい顧客体験を提供するユーザ接点を実現します。今後多くのデジタルサービスで導入されるであろう会話型インターフェースは、ユーザへの細やかな情報提供やサポートを可能にします。Conversational AIの導入から、ユーザによる継続改善の実行まで支援します。",
  },
];

const Page = () => {
  const { setHeaderBackground, setThemeLead, setListThemeCharater, setThemes } =
    useContext(WhatWeDoContext);

  const os = useOs();
  useEffect(() => {
    setHeaderBackground({
      namePage: "AI & Analytics",
      image:
        os === "windows"
          ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_theme_08.png"
          : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_theme_08_sp.png",
      description: "AI＆アナリティクス",
    });

    setThemeLead(
      "データは企業・組織の鏡であり、業務の効率性や業績の実態を映し出すとともに、将来を予測するインサイトを生み出す可能性を持っています。AI&アナリティクスでは、豊富なデータ分析経験に基づき、データの持つ可能性を引き出し、より効率的な業務の実現や業務効果を最大化を支援します。"
    );

    setListThemeCharater(listThemeCharater);

    setThemes("AI＆アナリティクス");
  }, [os]);

  return <WhatWeDoProvider.Content />;
};

export default Page;
