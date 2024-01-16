"use client";

import Link from "next/link";
import classes from "./HeaderToor.module.css";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const HeaderRoot = () => {
  const pathname = usePathname();

  const linkNar = useMemo(
    () => [
      {
        content: "What we do",
        description: "事業概要",
        active: false,
        href: "",
      },
      {
        content: "Project",
        description: "案件事例",
        active: pathname === "projects",
        href: "/projects",
      },
      {
        content: "Who we are",
        description: "私たちについて",
        active: false,
        href: "",
      },
      {
        content: "Sustainability",
        description: "サステナビリティ",
        active: pathname === "sustainability",
        href: "/sustainability",
      },
      {
        content: "Information",
        description: "案件事例",
        active: false,
        href: "",
      },
      {
        content: "IR",
        description: "株主・投資家向け情報",
        active: false,
        href: "",
      },
    ],
    [pathname]
  );

  return (
    <header className={classes.headerWrapper}>
      <div className={classes.container}>
        <div className={classes.headerInner}>
          <div>
            <Link href="/">
              <img
                src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/logo_w.svg"
                alt="DELIVERY CONSULTING"
              ></img>
            </Link>
          </div>
          <div className={classes.menuBtn}>MENU BTNS</div>
          <div className={classes.globalNavi}>
            <ul className={classes.primaryConts}>
              {linkNar &&
                linkNar.length > 0 &&
                linkNar.map((item: any, i: number) => {
                  return (
                    <li key={i} className={classes.primaryCont}>
                      <div className={classes.primaryContLabel}>
                        <Link
                          href={item.href}
                          className={classes.primaryContLink}
                        >
                          <span className={classes.en}>{item.content}</span>
                          <span className={classes.jp}>{item.description}</span>
                        </Link>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={classes.headerCNV}>
            <ul>
              <li className={classes.headerCNVBtn}>
                <div>
                  <Link href="" className={classes.headerCNBtnLink}>
                    <div className={classes.en}>Recuit</div>
                    <div className={classes.jp}>採用情報</div>
                  </Link>
                </div>
              </li>
              <li className={classes.headerCNVBtn}>
                <div>
                  <Link href="" className={classes.headerCNBtnLink}>
                    <div className={classes.en}>Contact</div>
                    <div className={classes.jp}>採用情報</div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderRoot;
