import Link from "next/link";
import c from "./Recuit.module.css";
import { useTranslations } from "next-intl";

const Recuit = () => {
  const t = useTranslations("Recuit");
  return (
    <div className={c.recruitCNV}>
      <ul>
        <li>
          <Link href="/recuit" className={c.arrow02}>
            <img src="https://www.deliv.co.jp/hubfs/6255088/corp_2022/files/images/img_foot_cnv_01.png" />
            <div className={c.recruitCNVText}>
              <div className={c.recruitCNVTitle}>
                {t("NewGraduateRecruitment")}
              </div>
              <p> {t("Professional")}</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/recuit" className={c.arrow02}>
            <img src="	https://www.deliv.co.jp/hubfs/6255088/corp_2022/files/images/img_foot_cnv_02.png" />
            <div className={c.recruitCNVText}>
              <div className={c.recruitCNVTitle}>
                {t("NewGraduateRecruitment")}
              </div>
              <p> {t("Utilizing")}</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Recuit;
