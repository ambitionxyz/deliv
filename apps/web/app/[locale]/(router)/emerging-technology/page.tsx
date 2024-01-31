"use client";

import { useContext, useEffect } from "react";
import WhatWeDoProvider, {
  WhatWeDoContext,
} from "../../../../components/whatWeDo/WhatWeDoWrapper";
import { useOs } from "@mantine/hooks";

const listThemeCharater = [
  {
    title: "新技術でDX課題をダイナミックに解決",
    body: "時代に即したクラウドネイティブ（クラウド・バイ・デフォルト、フルクラウドコア・アーキテクチャ）での、安定したシステム提案・設計/構築方法を示し、あらゆる課題にダイナミックに対応することが可能です。マイクロサービス化により、機能やサービスの迅速性、優れた回復性、スケーラビリティに対応します。先端技術やクラウドサービスを基にした、非機能要件に答えるプラットフォーム化の提案と実装を導きます。",
  },
  {
    title: "資源の効率化による最大利益を得るPoCと実装",
    body: "ARやVRのビジネス利用、高度な検索やデータの見える化、画像解析やファイルの分類、GPSを用いた施策、ロボット用の提供プラットフォームの概念実証やプランニングを行います。TX（トータル・エクスペリエンス）やハイパー・オートメーションなど、成長を加速するためのエマージングテクノロジーの導入アドバイザリーから統合的なプランニングまでを提供します。",
  },
  {
    title: "技術的なソリューションビジネス",
    body: "アプリケーションやクラウドサービスを組み合わせてより良いシステム化を提案し、ゼロベース・ソリューショニングで各システムやサービスを連携しつつ提案します。アジャイルマインドの適用、アジャイル開発対応（技術的なPDCAの導入指南）やCI/CDの具現化、基幹システムや業務システムとの外部連携インタフェース設計と提供、多様性に対するシステムの柔軟性、黎明期の技術導入支援ソリューションなどにも対応します。",
  },
];

const Page = () => {
  const { setHeaderBackground, setThemeLead, setListThemeCharater, setThemes } =
    useContext(WhatWeDoContext);

  const os = useOs();

  useEffect(() => {
    setHeaderBackground({
      namePage: "Emerging technology",
      image:
        os === "windows"
          ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_theme_06.png"
          : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_theme_06_sp.png",
      description: "エマージングテクノロジー",
    });

    setThemeLead(
      "デジタルテクノロジーの進化と普及によりDX化（デジタルトランスフォーメーション）は、ビジネスにおいて大きなインパクトを与えています。企業はAI、IoT、ビッグデータ処理などのデジタル技術を用いて、業務フローやシーケンスの改善や新たなビジネスモデルの創出だけでなく、優位に立つ競争軸をどう創るのかを求められています。企業ごとに、クラウド上にシステムを刷新して永続的に使えるようにしたい、まずは最新技術のテスト検証したい、他社より優位な強みをシステム実装したい、ダイナミックに対応し経営資源を効率的に実現したいなどのニーズがあります。ピーク期の新しい技術を用いて難易度の高いDX課題を解決することで、レガシーシステムからの脱却に加え、ビジョンと戦略の明確化による成功を実現させることができます。"
    );

    setListThemeCharater(listThemeCharater);

    setThemes("モダナイゼーション");
  }, [os]);

  return <WhatWeDoProvider.Content />;
};

export default Page;
