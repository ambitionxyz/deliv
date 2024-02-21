"use client";

import Link from "next/link";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";

import c from "./Page.module.css";
import { useOs } from "@mantine/hooks";
import { useTranslations } from "next-intl";
const Page = () => {
  const os = useOs();
  const t = useTranslations("Index");

  return (
    <>
      <Headerbackground
        namePage={t("Fusion")}
        image={
          os === "windows"
            ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_strength.png"
            : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_strength_sp.png"
        }
        description={t("Methodology")}
        text={[t("Realizing"), t("OurThoughtsOn"), t("Architecture")]}
        anChor={[
          {
            label: t("ArchitectureOriented"),
            href: "/jp",
          },
          {
            label: t("Methodology2"),
            href: "/jp",
          },
          {
            label: t("Meta"),
            href: "/jp",
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
