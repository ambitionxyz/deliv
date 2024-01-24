import Link from "next/link";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";
import Recuit from "../../../../components/top/Recruit";

import c from "./Page.module.css";

const Page = () => {
  return (
    <>
      <Headerbackground
        namePage="The PLEDGE"
        image="https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_pledge.png"
        description="経営理念"
      />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>私たちについて</span>
        <span>+</span>
        <span>私たちの誓い </span>
      </div>

      <div className={c.content}>
        <div className={`${c.section} ${c.narrow}`}>
          <div className={c.pledgeLead}>
            <p>顧客、株主の皆様、そして全社員。</p>
            <p>
              あらゆるステークホルダーに向けて、「私たちデリバリーコンサルティングの誓い」という形で、
            </p>
            <p>
              経営理念「The PLEDGE」を2021年5月に策定しました。
              <br />
              私たちが「何者であり、これからどうなっていくのか」を指し示す道標です。
            </p>
          </div>
          <div className={c.pledgeFrame}>
            <h2 className={c.pledgeTlte}>The PLEDGE</h2>
            <div className={c.pledgeTlteJP}>
              日本のITサービスを変える
              <br className={c["only-sp"]} />
              テクノロジーコンサルティング
            </div>
            <dl>
              <dt>企業を変革するビジネスパートナー</dt>
              <dd>
                我々はレガシーと最先端の双方を熟知したITプロフェッショナル集団。
                <br />
                システム構築から内製化まで高付加価値サービスを提供し、クライアントのビジネスモデル変革や新規サービス開発を実現します。
              </dd>
              <dt>
                時代が求める、時代に先駆ける
                <br className={c["only-sp"]} />
                IT人材を育成
              </dt>
              <dd>
                デジタル技術が企業変革を加速する時代。
                <br />
                1)世界レベルのテックナレッジによりシステムを最適構築するアーキテクト、2)
                デジタル変革を成功に導くプロジェクトマネジメント、3)
                システム内製化を具現するイネーブルメントの３つをコアコンピタンスとしたITプロフェッショナルを育成します。
              </dd>
              <dt>健全な企業文化と健全な経営</dt>
              <dd>
                挑戦・互助・公正を尊重する企業文化を育み、楽しく豊かに働く環境を提供。
                <br />
                日本を支えるITサービス産業の一員として正々堂々と経営を行い、社会の発展に貢献します。
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <Recuit />
    </>
  );
};

export default Page;
