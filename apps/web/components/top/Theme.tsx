import Link from "next/link";

import c from "./Theme.module.css";
interface ThemeProps {
  linkList: {
    href: string;
    title: string;
  }[];
}

const Theme = ({ linkList }: ThemeProps) => {
  return (
    <div className={c.topTheme}>
      <div className={c.hs_cos_wrapper}>
        <div className={c.sectionHeadding}>
          <h2 className={c.sectionTitle}>高度な技術課題を解決</h2>
          <div className={c.sectionTitleJP}>
            テックアンテナとケイパビリティ開発
          </div>
        </div>
        <div className={c.sectionHeaderLead}>
          <p>
            戦略の策定から設計・開発、内製化支援まで、テクノロジーやデータ利活用のライフサイクルをエンドトゥエンドでカバー。
            <br />
            成熟した技術の深い理解に加え、クラウド、AI、IoT、Web3.0といった先端技術を組み合わせた高度で複雑な技術課題の解決に取り組んでいます。
          </p>
        </div>
      </div>
      {linkList.length > 0 && (
        <ul className={c.linkListCol3}>
          {linkList.map((link, i) => {
            return (
              <li key={i}>
                <Link className={c.arrow02} href={link.href}>
                  <div className={c.linkListName}>{link.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Theme;
