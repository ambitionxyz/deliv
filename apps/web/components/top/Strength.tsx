import Link from "next/link";
import c from "./Strength.module.css";

const Strength = () => {
  return (
    <div className={c.section}>
      <div className={c.sectionHeader}>
        <div className={c.sectionHeadding}>
          <h2 className={c.sectionTitle}>先進と成熟の融合</h2>
          <div className={c.sectionTitleJP}>
            方法論とアーキテクチャ志向、メタ思考力
          </div>
        </div>
        <div className={c.sectionHeaderLead}>
          <p>
            ユーザ要件の実現、生産性と品質の向上、変化への対応力、技術革新など、テクノロジー導入やシステム構築における多様な課題に対する我々の思想が独自のシステム開発方法論、アーキテクチャ志向、そしてメタ思考力です。
          </p>
          <div className={c.sectionHeaderBtn}>
            <Link href="">View More</Link>
          </div>
        </div>
      </div>
      <div className={c.topStrengthGraph}>
        <img
          src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_top_strength.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Strength;
