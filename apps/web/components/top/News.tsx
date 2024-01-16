import { usePathname } from "next/navigation";
import c from "./News.module.css";
import { useMemo } from "react";
import Link from "next/link";

const News = () => {
  const pathName = usePathname();

  const listNews = useMemo(
    () => [
      {
        date: "2024.01.04",
        href: "/",
        cats: ["ニュース", "オンライントレーニング・体験会"],
        title:
          "「ipaSロボ オンライン操作体験会 」2024年2月のスケジュールが決まりました。",
      },
      {
        date: "2024.01.04",
        href: "/",
        cats: ["ニュース", "オンライントレーニング・体験会"],
        title:
          "「ipaSロボ オンライン操作体験会 」2024年2月のスケジュールが決まりました。",
      },
      {
        date: "2024.01.04",
        href: "/",
        cats: ["ニュース", "オンライントレーニング・体験会"],
        title:
          "「ipaSロボ オンライン操作体験会 」2024年2月のスケジュールが決まりました。",
      },
    ],
    [pathName]
  );
  return (
    <div className={`${c.topNews} ${c.section}`}>
      <div className={c.sectionHeader}>
        <div className={c.sectionHeadding}>
          <h2 className={c.sectionTitle}>Information</h2>
          <div className={c.sectionTitleJP}>お知らせ</div>
        </div>
      </div>
      <ul className={c.listedNews}>
        {listNews.length > 0 &&
          listNews.map((news, index) => {
            return (
              <li key={index}>
                <div className={c.listedNewsHead}>
                  <div className={c.newsDate}>{news.date}</div>
                  <ul className={c.newsCats}>
                    {news.cats.map((cat, i) => {
                      return (
                        <li key={i} className={c.newsCat}>
                          {cat}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={c.listedNewsTitle}>
                  <Link href={news.href}>{news.title}</Link>
                </div>
              </li>
            );
          })}
      </ul>
      <div className={c.viewmore}>
        <Link href="/news">View All</Link>
      </div>
    </div>
  );
};

export default News;
