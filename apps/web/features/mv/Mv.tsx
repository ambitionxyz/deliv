"use client";

import { useEffect, useRef } from "react";
import c from "./Mv.module.css";
import Link from "next/link";
import { MoveRight, MoveDown } from "lucide-react";
import { useTranslations } from "next-intl";
const Mv = () => {
  const videoRef = useRef<any>(null);

  const t = useTranslations("MV");

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);
  return (
    <div className={c.MvWrapper}>
      <div className={c.movie}>
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          src={
            "//6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/movie/movie02.mp4"
          }
        />
      </div>
      <div className={c.heroBody}>
        <h1 className={c.heroTagline}>
          {t("WithThePowerOfTechnology")}
          <br />
          {t("TransformYourBusiness")}
        </h1>
        <p className={c.en}>Trusted Digital Transformation Partner</p>
      </div>
      <div className={c.heroLead}>
        <h2 className={c.heroLeadTitle}> {t("PowerOfTechnology")}</h2>
        <div className={c.heroLeadTitleJP}>{t("StrategyFormulation")}</div>
        <div className={c.heroLeadText}>
          <p>
            {t("ProductionSupport")}
            <br />
            {t("TechnologyConsulting")}
            <br />
            {t("Realize")}
          </p>
        </div>
        <div className={c.heroLeadBtn}>
          <Link href="" className={c.arrow02}>
            View more
            <MoveRight />
          </Link>
        </div>
      </div>
      <div className={c.scroller}>
        <div className={c.scrollerInner}>
          <MoveDown />
          <span>Scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Mv;
