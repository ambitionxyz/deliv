"use client";

import Link from "next/link";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";

import c from "./Page.module.css";
import { useOs } from "@mantine/hooks";
const Page = () => {
  const os = useOs();

  return (
    <>
      <Headerbackground
        namePage="先進と成熟の融合"
        image={
          os === "windows"
            ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_strength.png"
            : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_strength_sp.png"
        }
        description="方法論とアーキテクチャ志向、メタ思考力"
        text={[
          "ユーザー要件の実現、生産性と品質の向上、変化への対応力、イノベーションなど、",
          "テクノロジー導入やシステム構築における多様な課題に対する我々の思想が、",
          "アーキテクチャ志向、独自のシステム開発方法論、そしてメタ思考力です。",
        ]}
        anChor={[
          {
            label: "アーキテクチャ志向",
            href: "/jp",
          },
          {
            label: "方法論",
            href: "/jp",
          },
          {
            label: "メタ思考力",
            href: "/jp",
          },
        ]}
      />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>事業概要</span>
        <span>+</span>
        <span>コンサルティング </span>
      </div>
      <div className={c.content}>
        <div className={c.section}>
          <div className={c.coloredColumn}>
            <div className={c.columnBody}>
              <h2 className={c.iconTitle}>
                <span className={c.icon}>
                  <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_project.svg" />
                </span>
                <span className={c.txt}>アーキテクチャ志向</span>
              </h2>
              <p>
                ビジネス要求を満足させるシステムの最終形を予測し、その姿から逆算してシステムの開発を進める思想が当社が重視する「アーキテクチャ志向」です。
                <br />
                システムアーキテクチャ（※）を先行して設計し、そのルールに基づいてシステムの設計・開発計画を行うことによって、高い計画精度、開発生産性、品質特性の確保を実現しています。
              </p>
              <p>
                （※）システムアーキテクチャとは、システムを構成する要素と要素間のインタフェース、設計や実装を行う人間とシステムのインタフェースに関する広義のルールを規定するもの。そのルールに基づいてシステムが設計・開発されることで、システムの品質が確保されます。
              </p>
            </div>
            <div className={c.columnImage}>
              <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_strength_03.png" />
            </div>
          </div>
          <div className={c.coloredColumn}>
            <div className={c.columnBody}>
              <h2 className={c.iconTitle}>
                <span className={c.icon}>
                  <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_method.svg" />
                </span>
                <span className={c.txt}>
                  システム開発方法論（デリバリーアプローチ）
                </span>
              </h2>
              <p>
                システム構築におけるライフサイクル全般を体系的に標準化した、当社独自の「システム開発方法論（デリバリーアプローチ）」を構築しています。この独自の方法論により、当社の高品質かつ独自性のあるコンサルティングを提供する他、各種DXプロジェクトの生産性の向上を実現しています。当アプローチは、PMBOK（Project
                Management Body of
                Knowledge）に準拠し、随時改善点・変更点を反映しながらアップデートされています。
              </p>
            </div>
            <div className={c.columnImage}>
              <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_strength_03.png" />
            </div>
          </div>
          <div className={c.coloredColumn}>
            <div className={c.columnBody}>
              <h2 className={c.iconTitle}>
                <span className={c.icon}>
                  <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_method.svg" />
                </span>
                <span className={c.txt}>
                  システム開発方法論（デリバリーアプローチ）
                </span>
              </h2>
              <p>
                システム構築におけるライフサイクル全般を体系的に標準化した、当社独自の「システム開発方法論（デリバリーアプローチ）」を構築しています。この独自の方法論により、当社の高品質かつ独自性のあるコンサルティングを提供する他、各種DXプロジェクトの生産性の向上を実現しています。当アプローチは、PMBOK（Project
                Management Body of
                Knowledge）に準拠し、随時改善点・変更点を反映しながらアップデートされています。
              </p>
            </div>
            <div className={c.columnImage}>
              <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_strength_03.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
