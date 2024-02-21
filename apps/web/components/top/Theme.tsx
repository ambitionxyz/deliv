import Link from "next/link";

import c from "./Theme.module.css";
import { useTranslations } from "next-intl";
interface ThemeProps {
  linkList: {
    href: string;
    title: string;
  }[];
}

const Theme = ({ linkList }: ThemeProps) => {
  const t = useTranslations("Theme");
  return (
    <div className={c.topTheme}>
      <div className={c.hs_cos_wrapper}>
        <div className={c.sectionHeadding}>
          <h2 className={c.sectionTitle}>{t("Solving")}</h2>
          <div className={c.sectionTitleJP}>{t("Tech")}</div>
        </div>
        <div className={c.sectionHeaderLead}>
          <p>
            {t("Formulation")}
            <br />
            {t("Addition")}
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
