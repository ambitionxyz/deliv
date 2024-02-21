import Link from "next/link";
import c from "./Strength.module.css";
import { useTranslations } from "next-intl";

const Strength = () => {
  const t = useTranslations("Strength");
  return (
    <div className={c.section}>
      <div className={c.sectionHeader}>
        <div className={c.sectionHeadding}>
          <h2 className={c.sectionTitle}>{t("Fusion")}</h2>
          <div className={c.sectionTitleJP}>{t("Methodology")}</div>
        </div>
        <div className={c.sectionHeaderLead}>
          <p>{t("Our")}</p>
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
