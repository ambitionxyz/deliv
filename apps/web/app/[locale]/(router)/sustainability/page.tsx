import { title } from "process";
import c from "./Page.module.css";
import { useTranslations } from "next-intl";
const Page = () => {
  const t = useTranslations("Index");
  const listIntro = [
    {
      title: [t("Power"), t("Contributing")],
      body: t("BusinessTransformation"),
    },
    {
      title: [t("Connecting"), t("DevelopingIT")],
      body: t("Perspective"),
    },
    {
      title: [t("Flat"), t("DevelopingIT")],
      body: t("Perspective"),
    },
  ];

  return (
    <>
      <p className={c.p}>{t("Digital")}</p>
      {listIntro.map((item, index) => {
        return (
          <div className={c.pageIntro} key={index}>
            <h2 className={c.bdrTitle}>
              {item.title.map((t, i) => {
                return (
                  <>
                    {t}
                    <br />
                  </>
                );
              })}
            </h2>
            <div className={c.pageIntroBody}>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Page;
