import { usePathname } from "next/navigation";
import c from "./Service.module.css";
import { useMemo } from "react";
import Link from "next/link";

const Service = () => {
  const pathname = usePathname();
  //
  const serviceList = useMemo(
    () => [
      {
        title: "経営理念",
        href: "/the-pledge",
        image:
          "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_top_about_01.png",
      },
      {
        title: "経営理念",
        href: "/company_profile",
        image:
          "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_top_about_02.png",
      },
      {
        title: "経営理念",
        href: "/company_profile",
        image:
          "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_top_about_03.png",
      },
      {
        title: "経営理念",
        href: "/company_profile",
        image:
          "https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_top_about_02.png",
      },
    ],
    [pathname]
  );
  return (
    <div className={c.section}>
      <div className={c.sectionHeader}>
        <div className={c.sectionHeadding}>
          <h2 className={c.sectionTitle}>Who we are</h2>
          <div className={c.sectionTitleJP}>私たちについて</div>
        </div>
      </div>
      <ul className={c.topServiceList}>
        {serviceList.length > 0 &&
          serviceList.map((service, index) => {
            return (
              <li key={index}>
                <Link href={service.href} className={c.arrow02}>
                  <div className={c.topServiceListImg}>
                    <img src={service.image} />
                  </div>
                  <div className={c.topServiceListTitle}>{service.title}</div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Service;
