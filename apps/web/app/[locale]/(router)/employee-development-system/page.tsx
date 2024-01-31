"use client";

import Link from "next/link";
import { useOs } from "@mantine/hooks";

import Headerbackground from "../../../../components/headerBackground/HeaderBackground";
import Recuit from "../../../../components/top/Recruit";

import c from "./Page.module.css";

const Page = () => {
  const os = useOs();
  return (
    <>
      <Headerbackground
        namePage="DLC ACADEMY"
        image={
          os === "windows"
            ? "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_training.png"
            : "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_training_sp.png"
        }
        description="コンサルタント育成のプラットフォーム"
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
            <h2 className={c.bdrTitle}>
              テクノロジーコンサルタントの
              <br />
              最重要コンピテンシー「DLC Value」
            </h2>
            <div className={c.pageIntroBody}>
              <p>
                テクノロジーコンサルタントがITのプロフェッショナルとしてクライアントの持つ課題に対して的確に応えていくためには、高い知性や知識、能力に加え、パフォーマンスに直結するコンピテンシー（※）が重要であると考えています。
              </p>
              <br />
              <br />
              <p>
                当社ではテクノロジーコンサルタントがハイパフォーマンスを発揮するために必要な最重要コンピテンシーを「DLC
                Value」として、あらゆる人材育成のコアに置いています。
              </p>
            </div>
          </div>
        </div>
        <div className={`${c.section} ${c.edsArea}`}>
          <div className={c.coloredColumn}>
            <div className={c.columnBody}>
              <h2 className={c.boldTitle}>教育・評価制度</h2>
              <ul className={c.disc}>
                <li>
                  独自のコンピテンシー定義に基づいた、研修プログラム（座学）と、実践（OJT)の人材育成プログラムを提供
                </li>
                <li>
                  評価制度と連動し、社員全員のモチベーションを維持・向上させながら、コンサルティング未経験者でも「テクノロジーコンサルタント」として成長できる環境を提供
                </li>
              </ul>
              <div className={`${c.columnImage} ${c["only-sp"]}`}>
                <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_training_01.png" />
              </div>
              <h3 className={c.iconTitle}>
                <span className={c.icon}>
                  <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_training.svg" />
                </span>
                <span className={c.txt}>研修プログラム</span>
              </h3>
              <ul className={c.disc}>
                <li>
                  クラス、コンピテンシー定義をふまえた研修体系
                  会社方針にもとづく必須研修、自己学習を促す任意研修等
                </li>
                <li>事業ニーズをふまえた研修の企画開発と運用（体制）</li>
              </ul>
              <h3 className={c.iconTitle}>
                <span className={c.icon}>
                  <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_ojt.svg" />
                </span>
                <span className={c.txt}>実践（OJT）</span>
              </h3>
              <ul className={c.disc}>
                <li>
                  方法論をもとにした案件プランニング、レビュー、フィードバック
                </li>
                <li>
                  コンピテンシーをベースにした業務の実践と上司によるフィードバック
                </li>
              </ul>
              <h3 className={c.iconTitle}>
                <span className={c.icon}>
                  <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_feedback.svg" />
                </span>
                <span className={c.txt}>評価・フィードバック</span>
              </h3>
              <ul className={c.disc}>
                <li>
                  パフォーマンス（実績）評価に加え、キャリアプランをもとに、各人ができていること/改善点のフィードバック
                </li>
              </ul>

              <ul className={c.disc}>
                <li>
                  個人別の育成目標、トレーニング計画を上司と作成共有し、実践と教育・研修プログラムを通じて育てる
                </li>
              </ul>
            </div>
            <div className={`${c.columnImage} ${c.columnImageNone}`}>
              <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_training_01.png" />
            </div>
          </div>

          <div className={c.coloredColumn}>
            <div className={c.columnBody}>
              <h2 className={c.boldTitle}>カリキュラム</h2>
              <ul className={c.disc}>
                <li>
                  コンサルタントとしての最重要コンピテンシー「DLC
                  Value」を必須の講義として土台を構築
                </li>
                <li>
                  その上で独自のシステム開発方法論「デリバリーアプローチ」、テクノロジーとコンサルティングのコアスキル・知識を必須講義とする
                </li>
                <li>
                  その後、必要に応じてテクノロジー、ビジネスついての学習機会を提供
                </li>
              </ul>
            </div>
            <div className={c.columnImage}>
              <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_training_02.png" />
            </div>
          </div>
        </div>
      </div>
      <Recuit />
    </>
  );
};

export default Page;
