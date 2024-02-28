"use client";

import * as z from "zod";
import { createContext, useContext, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  Fieldset,
  Modal,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";

import c from "./WhatWeDoWrapper.module.css";
import Headerbackground from "../headerBackground/HeaderBackground";
import Link from "next/link";
import { fetchDataProjects } from "../../api/Project";
import Recuit from "../top/Recruit";
import { useLocale, useTranslations } from "next-intl";

const formSchema = z.object({
  company: z.string().min(1, {
    message: "この必須項目を入力してください。",
  }),
  lastname: z.string().min(1, {
    message: "この必須項目を入力してください。",
  }),
  firstname: z.string().min(1, {
    message: "この必須項目を入力してください。",
  }),
  message: z.string().min(1, {
    message: "この必須項目を入力してください。",
  }),
});

const linkList = [
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
  {
    title: "テクノロジー戦略",
    href: "/technology-strategy-consulting",
  },
];

export const WhatWeDoContext = createContext<any>(null);

function WhatWeDoProvider(props: any) {
  const locale = useLocale();

  const [headerBackground, setHeaderBackground] = useState(null);
  const [themes, setThemes] = useState(null);
  const [listProducts, setProducts] = useState<any>([]);
  const [listThemeCharater, setListThemeCharater] = useState<any>([]);
  const [themeLead, setThemeLead] = useState();

  const t = useTranslations("Index");

  useEffect(() => {
    if (themes === null) return;

    const getDataProjectBy = async (type: string) => {
      const dataFetch = await fetchDataProjects(locale);

      const result: any[] = [];
      dataFetch.data.map((item: any) => {
        const themes = item.attributes.Themes;
        themes.map((theme: any, iTheme: number) => {
          result.push(item);
        });
      });

      setProducts(result);
    };
    getDataProjectBy(themes);
  }, [themes, locale]);

  return (
    <WhatWeDoContext.Provider
      value={{
        themes,
        listProducts,
        headerBackground,
        themeLead,
        listThemeCharater,
        setThemeLead,
        setHeaderBackground,
        setListThemeCharater,
        setThemes,
        t,
        locale,
      }}
    >
      {props.children}
    </WhatWeDoContext.Provider>
  );
}

function Content() {
  const {
    headerBackground,
    themeLead,
    listThemeCharater,
    themes,
    listProducts,
    t,
    locale,
  } = useContext(WhatWeDoContext);

  if (
    !headerBackground ||
    !themeLead ||
    !listThemeCharater ||
    !themes ||
    !listProducts
  )
    return <>LOADING...</>;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      lastname: "",
      firstname: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <>
      <Headerbackground {...headerBackground} />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span>+</span>
        <span>{headerBackground.description} </span>
      </div>
      <div className={c.contents}>
        <div className={`${c.section} ${c.pb0}`}>
          <div className={c.themeLead}>
            <p>
              <strong>{themeLead}</strong>
            </p>
          </div>
          <div className={c.themeCharacters}>
            {listThemeCharater.length > 0 &&
              listThemeCharater.map((ch: any, i: number) => {
                return (
                  <div key={i} className={c.themeCharacter}>
                    <div className={c.themeCharacterTitle}>{ch.title}</div>
                    <div className={c.themeCharacterBody}>
                      <p>{ch.body}</p>
                      {ch.image && (
                        <div className={c.imageContent}>
                          <div className={c.image}>
                            <img src={ch.image} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={`${c.section} ${c.pb0} ${c.relationProjects}`}>
          <h2 className={c.bdrTitle}>{t("ProjectExamples")}</h2>
          <div className={c.projectIndex}>
            <div className={c.projectIndexList}>
              {listProducts.length > 0 &&
                listProducts.map((p: any, ip: number) => {
                  const currentProduct = p.attributes;
                  return (
                    <div key={ip} className={c.caseBox}>
                      <div className={c.caseImg}>
                        <img src={currentProduct.image} />
                      </div>
                      <div className={c.caseBody}>
                        <div className={c.caseTitle}>
                          {currentProduct.title}
                        </div>
                        <ul className={c.caseCats}>
                          {currentProduct.Themes.length > 0 &&
                            currentProduct.Themes.map((t: any, it: number) => {
                              return (
                                <li key={it} className={c["cat-theme"]}>
                                  {t.Name}
                                </li>
                              );
                            })}
                        </ul>
                        <div className={c.caseTxt}>
                          {currentProduct.Descriptions.length > 0 &&
                            currentProduct.Descriptions.map(
                              (txt: any, iTxt: number) => {
                                return <p key={iTxt}>{txt.Name}</p>;
                              }
                            )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className={`${c.section} ${c.pb0}`}>
          <h2 className={c.bdrTitle}>
            {themes}
            {t("Inquiries")}
          </h2>
          <div className={c.formArea}>
            <p>{t("RequiredField")}</p>
            <div className={c.formBody}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className={c["form-columns-1"]}>
                  <div className={c["hs-form-field"]}>
                    <TextInput
                      variant="filled"
                      placeholder={t("CompanyName")}
                    />
                    <span className={c["hs-form-required"]}></span>
                  </div>
                </div>

                <div className={c["form-columns-2"]}>
                  <div className={c["hs-form-field2"]}>
                    <TextInput variant="filled" placeholder={t("Surname")} />
                    <span className={c["hs-form-required"]}></span>
                  </div>
                  <div className={c["hs-form-field2"]}>
                    <TextInput variant="filled" placeholder={t("GivenName")} />
                    <span className={c["hs-form-required"]}></span>
                  </div>
                </div>

                <div className={c["form-columns-1"]}>
                  <div className={`${c["hs-form-field"]}`}>
                    <Textarea
                      variant="filled"
                      placeholder={t("ContentOfInquiry")}
                    />
                  </div>
                </div>

                <div className={c["form-columns-1"]}>
                  <h3 className={c.boldTitle}>{t("AboutTheHandling")}</h3>
                  <div className={c.privacyTerms}>
                    {locale === "ja" ? (
                      <Textarea disabled variant="filled">
                        個人情報は、当社の個人情報保護マニュアルや内部規程に従って適正に管理します。
                        個人情報は、お問い合わせ対応の目的で使用いたします。
                        個人情報は、処理のために当社の基準を満たす委託先に業務委託することがあります。
                        　なお、委託先以外の第三者に対しては提供いたしません。
                        個人情報は、ご本人様確認の上、開示・訂正等を行います。
                        個人情報を当社に与えていただくことは任意ですが、情報が不足する場合適切な対応が
                        　実施できないことがあります。
                        個人情報に関するご相談・苦情については、以下の連絡先までお願いします。
                        連絡先
                        株式会社デリバリーコンサルティング　個人情報保護推進事務局
                        info@deliv.co.jp
                        弊社は、いただいた個人情報をお問い合わせへの対応にのみ使用し、他の目的および第三者が利用することはございません。
                        個人情報の保護と管理にあたっては、散逸、紛失、改ざん、漏洩等のないように適切な措置をとり、安全に管理します。
                        また、弊社の個人情報に関する取り扱いについて詳しくは「個人情報保護方針」をご覧ください。
                      </Textarea>
                    ) : (
                      <Textarea disabled variant="filled">
                        Personal information will be managed appropriately in
                        accordance with our personal information protection
                        manual and internal regulations. Personal information
                        will be used for the purpose of responding to inquiries.
                        We may outsource the processing of personal information
                        to subcontractors that meet our standards. Please note
                        that we will not provide your information to any third
                        party other than the outsourcing company. Personal
                        information will be disclosed or corrected after
                        confirming the identity of the individual. Providing
                        personal information to us is voluntary, but if
                        information is insufficient, appropriate measures will
                        be taken. 　It may not be possible to implement it. For
                        inquiries or complaints regarding personal information,
                        please contact us using the contact information below.
                        contact address Delivery Consulting Co., Ltd. Personal
                        Information Protection Promotion Office info@deliv.co.jp
                        We will use the personal information we receive only to
                        respond to your inquiry and will not use it for any
                        other purpose or to any third party. When protecting and
                        managing personal information, we will take appropriate
                        measures to prevent it from being dissipated, lost,
                        falsified, leaked, etc., and manage it safely. For more
                        information about our handling of personal information,
                        please see our "Privacy Policy."
                      </Textarea>
                    )}
                  </div>
                  <p>{t("Confirming")}</p>
                </div>

                <div className={c["form-columns-1"]}>
                  <div className={c.checkBox}>
                    <Checkbox defaultChecked size="xs" label={t("Agree")} />
                  </div>
                </div>

                <div className={c["hs-submit"]}>
                  <Button variant="outline" radius="xs" className={c.btn}>
                    ={t("Send")}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={c.section}>
          <h2 className={c.bdrTitle}>{t("ThemeList")} </h2>
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
      </div>
      <Recuit />
    </>
  );
}

WhatWeDoProvider.Content = Content;

export default WhatWeDoProvider;
