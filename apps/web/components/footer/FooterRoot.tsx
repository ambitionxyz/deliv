import Link from "next/link";
import c from "./FooterRoot.module.css";
import { MoveUp } from "lucide-react";
import { useTranslations } from "next-intl";

const FooterRoot = () => {
  const t = useTranslations("Footer");
  const footNavs1 = [
    {
      label: {
        en: "What we do",
        jp: t("Business"),
        labelHref: "",
      },
      content: [
        {
          description: t("Consulting"),
          href: "",
          childlinks: [],
        },
        {
          description: t("StrengthsAndFeatures"),
          href: "",
          childlinks: [],
        },
        {
          description: t("MainTheme"),
          href: "",
          childlinks: [
            { childDescription: t("TechnologyStrategy"), childHref: "" },
            { childDescription: t("ArchitectureDelivery"), childHref: "" },
            { childDescription: t("Cloud"), childHref: "" },
            { childDescription: t("DataStrategy"), childHref: "" },
            { childDescription: t("DataInfrastructure"), childHref: "" },
          ],
        },
      ],
    },
    {
      label: {
        en: "Project",
        jp: t("CaseExample"),
        labelHref: "/projects",
      },
      content: [],
    },
    {
      label: {
        en: "Who we are",
        jp: t("AboutUs"),
        labelHref: "",
      },
      content: [
        {
          description: t("ManagementPhilosophy"),
          href: "",
          childlinks: [],
        },
        {
          description: t("CompanyProfile"),
          href: "",
          childlinks: [
            { childDescription: t("TechnologyPartner"), childHref: "" },
            { childDescription: t("Affiliate"), childHref: "" },
          ],
        },
        {
          description: t("Leadership"),
          href: "",
          childlinks: [],
        },
        {
          description: t("Human"),
          href: "",
          childlinks: [],
        },
      ],
    },
  ];

  const footNavs2 = [
    {
      label: {
        en: "Information",
        jp: t("Notice"),
        labelHref: "",
      },
      content: [
        {
          description: t("PressRelease"),
          href: "",
          childlinks: [],
        },
        {
          description: t("News"),
          href: "",
          childlinks: [],
        },
        {
          description: t("Event"),
          href: "",
          childlinks: [],
        },
        {
          description: t("Online"),
          href: "",
          childlinks: [],
        },
      ],
    },

    {
      label: {
        en: "Recruit",
        jp: t("RecruitmentInformation"),
        labelHref: "",
      },
      content: [
        {
          description: t("NewGraduateRecruitment"),
          href: "",
          childlinks: [],
        },
        {
          description: t("Career"),
          href: "",
          childlinks: [],
        },
      ],
    },
    {
      label: {
        en: "Contact",
        jp: t("Inquiry"),
        labelHref: "",
      },
      content: [],
    },
  ];
  return (
    <footer className={c.footerWrapper}>
      <div className={c.footCNV}>
        <Link href="/contact">
          {t("ToDeliveryConsulting")}
          <br />
          <span>
            {t("Regarding")}
            <br className={c.br} />
            {t("Consultation")}
          </span>
        </Link>
      </div>
      <div className={c.footerCont}>
        <div className={c.footHead}>
          <div className={c.companyLogo}>
            <img
              src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/logo.svg"
              alt="DELIVERY CONSULTING"
            />
          </div>
          <p className={c.companyAddress}>
            {t("Address")}
            <span> {t("Midtown")}</span>
          </p>
          <ul className={c.companySNS}>
            <li>
              <Link href="/facebook">
                <img
                  src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_fb.svg"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link href="/facebook">
                <img
                  src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/ico_youtube.svg"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={c.footerNav}>
          <ul className={c.primaryConts}>
            {footNavs1.map((nav, i) => {
              return (
                <li key={i} className={c.primaryCont}>
                  <div className={c.primaryContLabel}>
                    <Link href={nav.label.labelHref}>
                      <span className={c.en}>{nav.label.en}</span>
                      <span className={c.jp}>{nav.label.jp}</span>
                    </Link>
                  </div>
                  <div className={c.accBody}>
                    <ul className={c.secondaryConts}>
                      {nav.content.length > 0 &&
                        nav.content.map((navItem, index) => {
                          return (
                            <li key={index} className={c.secondaryCont}>
                              <div className={c.secondaryContLink}>
                                <Link href={navItem.href}>
                                  {navItem.description}
                                </Link>
                              </div>
                              {navItem.childlinks.length > 0 && (
                                <ul className={c.secondaryContLower}>
                                  {navItem.childlinks.map(
                                    (childLink, indexChildLink) => {
                                      return (
                                        <li key={indexChildLink}>
                                          <Link href={childLink.childHref}>
                                            {childLink.childDescription}
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className={c.primaryConts}>
            {footNavs2.map((nav, i) => {
              return (
                <li key={i} className={c.primaryCont}>
                  <div className={c.primaryContLabel}>
                    <Link href={nav.label.labelHref}>
                      <span className={c.en}>{nav.label.en}</span>
                      <span className={c.jp}>{nav.label.jp}</span>
                    </Link>
                  </div>
                  <div className={c.accBody}>
                    <ul className={c.secondaryConts}>
                      {nav.content.length > 0 &&
                        nav.content.map((navItem, index) => {
                          return (
                            <li key={index} className={c.secondaryCont}>
                              <div className={c.secondaryContLink}>
                                <Link href={navItem.href}>
                                  {navItem.description}
                                </Link>
                              </div>
                              {navItem.childlinks.length > 0 && (
                                <ul className={c.secondaryContLower}>
                                  {navItem.childlinks.map(
                                    (
                                      childLink: any,
                                      indexChildLink: number
                                    ) => {
                                      return (
                                        <li key={indexChildLink}>
                                          <Link href={childLink.childHref}>
                                            {childLink.childDescription}
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className={c.pagetop}>
            <MoveUp color="black" className={c.pagetopIcon} />
            <span>Page top</span>
          </div>
        </div>
      </div>
      <div className={c.footBottom}>
        <div className={c.footAside}>
          <ul>
            <li>
              <Link href="">{t("Privacy")}</Link>
            </li>
            <li className={c.footAsideItemLast}>
              <Link href="">{t("Information")}</Link>
            </li>
          </ul>
          <div className={c.footAsideLeft}>
            <div className={c.footAsideLogo}>
              <img
                src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/logo_iso_footer.png"
                alt=""
              />
            </div>
            <div className={c.footAsideContent}>
              <strong>IS 597908 / IS0 27001:2013</strong>
              <br />
              <span>{t("Acquired")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={c.copyright}>
        Copyright © DELIVERY CONSULTING INC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterRoot;
