import Link from "next/link";
import c from "./FooterRoot.module.css";
import { MoveUp } from "lucide-react";

const footNavs1 = [
  {
    label: {
      en: "What we do",
      jp: "事業概要",
      labelHref: "",
    },
    content: [
      {
        description: "コンサルティング",
        href: "",
        childlinks: [],
      },
      {
        description: "強みと特長",
        href: "",
        childlinks: [],
      },
      {
        description: "主なテーマ",
        href: "",
        childlinks: [
          { childDescription: "テクノロジー戦略", childHref: "" },
          { childDescription: "アーキテクチャ＆デリバリー", childHref: "" },
          { childDescription: "クラウド", childHref: "" },
          { childDescription: "データ戦略", childHref: "" },
          { childDescription: "データ基盤", childHref: "" },
        ],
      },
    ],
  },
  {
    label: {
      en: "Project",
      jp: "案件事例",
      labelHref: "/projects",
    },
    content: [],
  },
  {
    label: {
      en: "Who we are",
      jp: "私たちについて",
      labelHref: "",
    },
    content: [
      {
        description: "経営理念",
        href: "",
        childlinks: [],
      },
      {
        description: "会社概要",
        href: "",
        childlinks: [
          { childDescription: "テクノロジーパートナー", childHref: "" },
          { childDescription: "関連会社", childHref: "" },
        ],
      },
      {
        description: "リーダーシップ",
        href: "",
        childlinks: [],
      },
      {
        description: "人材育成",
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
      jp: "お知らせ",
      labelHref: "",
    },
    content: [
      {
        description: "プレスリリース",
        href: "",
        childlinks: [],
      },
      {
        description: "ニュース",
        href: "",
        childlinks: [],
      },
      {
        description: "イベント・セミナー情報",
        href: "",
        childlinks: [],
      },
      {
        description: "オンライントレーニング・体験会",
        href: "",
        childlinks: [],
      },
    ],
  },

  {
    label: {
      en: "Recruit",
      jp: "採用情報",
      labelHref: "",
    },
    content: [
      {
        description: "新卒採用",
        href: "",
        childlinks: [],
      },
      {
        description: "キャリア採用",
        href: "",
        childlinks: [],
      },
    ],
  },
  {
    label: {
      en: "Contact",
      jp: "お問い合わせ",
      labelHref: "",
    },
    content: [],
  },
];

const FooterRoot = () => {
  return (
    <footer className={c.footerWrapper}>
      <div className={c.footCNV}>
        <Link href="/contact">
          デリバリーコンサルティングへの
          <br />
          <span>
            サービスや製品に関する
            <br className={c.br} />
            ご相談・お問い合わせ
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
            〒107-6223 東京都港区赤坂9-7-1
            <span>ミッドタウン・タワー23F</span>
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
              <Link href="">個人情報保護方針</Link>
            </li>
            <li className={c.footAsideItemLast}>
              <Link href="">情報セキュリティマネジメントシステム基本方針</Link>
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
              <span>
                「東京本社におけるITコンサルティング事業」で取得しています。
              </span>
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
