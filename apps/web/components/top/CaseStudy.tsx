import { usePathname } from "next/navigation";
import c from "./CaseStudy.module.css";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

//fetch data
const CaseStudy = () => {
  const pathname = usePathname();

  const t = useTranslations("CaseStudy");

  const listCaseStudy = useMemo(
    () => [
      {
        nameProject: "大手非鉄金属メーカー向けテクノロジー戦略の策定",
        techs: ["テクノロジー戦略", "クラウド"],
        image:
          "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_jirei_01.png",
        description:
          "大手非鉄金属メーカーでは、設定した多数のDXテーマを実現させるためのシステム基盤のTo-Be像（理想形）を必要としていた。" +
          "当社のアプリケーションからクラウドまで、幅広いIT知見を活用したコンサルティングによって、SoE/SoR/データ連携/DevOps基盤等のITシステム各領域において、DXテーマに相応しいテクノロジーの選択肢を与えることに成功し、同社のDX推進を支援した。",
      },
      {
        nameProject: "マイクロサービスを活用したシステムモダナイゼーション",
        techs: ["テクノロジー戦略", "モダナイゼーション", "クラウド"],
        image:
          "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_jirei_02.png",
        description:
          "大手非鉄金属メーカーでは、設定した多数のDXテーマを実現させるためのシステム基盤のTo-Be像（理想形）を必要としていた。" +
          "当社のアプリケーションからクラウドまで、幅広いIT知見を活用したコンサルティングによって、SoE/SoR/データ連携/DevOps基盤等のITシステム各領域において、DXテーマに相応しいテクノロジーの選択肢を与えることに成功し、同社のDX推進を支援した。",
      },
      {
        nameProject: "大手非鉄金属メーカー向けテクノロジー戦略の策定",
        techs: ["テクノロジー戦略", "クラウド"],
        image:
          "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_jirei_01.png",
        description:
          "大手非鉄金属メーカーでは、設定した多数のDXテーマを実現させるためのシステム基盤のTo-Be像（理想形）を必要としていた。" +
          "当社のアプリケーションからクラウドまで、幅広いIT知見を活用したコンサルティングによって、SoE/SoR/データ連携/DevOps基盤等のITシステム各領域において、DXテーマに相応しいテクノロジーの選択肢を与えることに成功し、同社のDX推進を支援した。",
      },
    ],
    [pathname]
  );

  // const [currentSlide, setCurrentSlide] = useState<number>(1);

  // const totalSlides = listCaseStudy.length || 0;

  // const goToSlide = (slideNumber: number) => {
  //   setCurrentSlide(slideNumber);
  // };

  // const goToPrevSlide = () => {
  //   const newSlide = currentSlide - 1 > 0 ? currentSlide - 1 : totalSlides;
  //   setCurrentSlide(newSlide);
  // };

  // const goToNextSlide = () => {
  //   const newSlide = currentSlide + 1 <= totalSlides ? currentSlide + 1 : 1;
  //   setCurrentSlide(newSlide);
  // };
  return (
    <div className={c.section}>
      <div className={c.sectionHeader}>
        <div className={c.sectionHeadding}>
          <h2 className={c.sectionTitle}>{t("Footprints")}</h2>
          <div className={c.sectionTitleJP}>{t("ProjectExample")}</div>
        </div>
      </div>

      <div className={c.topCasestudyListWrap}>
        {listCaseStudy.length > 0 &&
          listCaseStudy.map((caseStudy, index) => {
            return (
              <div key={index} className={c.slide}>
                <div className={c.image}>
                  <img src={caseStudy.image} />
                  <div className={c.caseTitle}>{caseStudy.nameProject}</div>
                  <ul className={c.caseCats}>
                    {caseStudy.techs.map((tech, iTech) => {
                      return (
                        <li key={iTech} className={c["cat-theme"]}>
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                  <div className={c.caseTxt}>
                    <p>{caseStudy.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        <div className={c.groupBtn}>
          <div className={`${c.btn} ${c.left}`}>
            <ChevronLeft />
          </div>
          <div className={`${c.btn} ${c.right}`}>
            <ChevronRight />
          </div>
        </div>
      </div>

      <div className={c.viewmore}>
        <Link href={"/products"} className={c.arrow02}>
          View All
        </Link>
      </div>
    </div>
  );
};

export default CaseStudy;
