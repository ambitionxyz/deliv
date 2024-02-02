"use client";

import Link from "next/link";
import NewsProvider from "../../../../../components/news/NewWrapper";

import c from "./Page.module.css";

const Page = () => {
  return (
    <NewsProvider.Content>
      <div className={c.contents}>
        <div className={`${c.section} ${c.newsArticle}`}>
          <div className={c.listedNewsHead}>
            <div className={c.newsDate}>2024.01.31</div>
            <ul className={c.newsCats}>
              <li className={c.newsCat}>プレスリリース</li>
            </ul>
          </div>
          <h2 className={c.newsTitle}>
            デリバリーコンサルティング、AI insideと業務提携を締結
            生成AIやデータ基盤構築の領域における戦略的協業を開始
          </h2>
          <div className={c.newsArticleLead}>
            <p>
              　豊富なテクノロジーコンサルティング経験を有する株式会社デリバリーコンサルティング（本社：東京都港区、代表取締役社長：阪口
              琢夫）は、
            </p>
            <br />
            <p>
              　この提携により、デリバリーコンサルティングは、AI inside
              の先進的なAI技術を活用し、企業の業務プロセスの効率化と最適化からデータ基盤の構築まで提供し、クライアント企業におけるデータドリブン経営の実現を支援いたします。また、AI
              inside
              はデリバリーコンサルティングの深い業界知識と経験を活用し、より具体的で実践的なAIソリューションの提供を目指します。
            </p>
            <br />
            <p>
              　両社はこの戦略的協業を通じて、AIビジネスにおけるProof of
              Concept（PoC）の脱却と、AIの確実な業務適用および社会実装を加速させるほか、企業のデジタルトランスフォーメーションを支援し、新たな価値創造を目指します。
            </p>
            <p>
              <img src="https://www.deliv.co.jp/hs-fs/hubfs/undefined-Jan-29-2024-06-31-27-2576-AM.png?width=1529&height=936&name=undefined-Jan-29-2024-06-31-27-2576-AM.png" />
            </p>
            <p>
              <span>◆</span>
              <span>具体的な提携スキーム</span>
            </p>
            <p>
              ✔Heylixや
              <span>AnyData</span>
              などの
              <span>AI</span>
              プラットフォームおよび、
              <span>AI</span>
              モデル開発を含む
              <span>AI inside </span>
              株式会社より提供
            </p>
            <p>
              ✔業務システムと
              <span>AI</span>
              の連携、データ基盤構築サービスを株式会社デリバリーコンサルティングより提供
              <img src="https://www.deliv.co.jp/hs-fs/hubfs/undefined-Jan-30-2024-03-50-40-2929-AM.png?width=1010&height=446&name=undefined-Jan-30-2024-03-50-40-2929-AM.png" />
            </p>
            <p>◆業務提携に際してのコメント</p>
            <p>
              AI inside
              <span />
              株式会社
              <span>代表取締役社長</span>
              CEO 渡久地 択 氏
            </p>
            <p>
              <span>
                株式会社デリバリーコンサルティングとの協業によって、私たちのAIプラットフォームをより多くのビジネス領域に迅速に組み込むことが可能になります。同社の複数業界の深い知見と当社の最先端AIテクノロジーを融合させることで、「AI民主化」をいっそう加速させることができると確信しています。
              </span>
            </p>
            <p></p>
            <p>
              株式会社デリバリーコンサルティング
              <span> CEO </span>
              阪口 琢夫
            </p>
            <p>
              私たちは
              <span>AI inside</span>
              株式会社と手を取り合い、クライアント企業様にとって、より革新的で効果的なソリューションを生み出すことに期待しています。この提携は、両社にとって大きなステップです。
            </p>
            <p>◆詳細プレスリリースは下記からご確認いただけます。</p>
            <p>
              <a
                href="https://prtimes.jp/main/html/rd/p/000000019.000108457.html"
                rel="noopener"
                target="_blank"
              >
                https://prtimes.jp/main/html/rd/p/000000019.000108457.html
              </a>
            </p>
          </div>
        </div>
        <div className={c.pagination}>
          <div className={c.viewmore}>
            <Link href="/jp/news" className={c.arrow02}>
              Back
            </Link>
          </div>
          <div className={c.linkPrev}>
            <Link href="/jp/news/news010-030-16">Prev</Link>
          </div>
        </div>
      </div>
    </NewsProvider.Content>
  );
};

export default Page;
