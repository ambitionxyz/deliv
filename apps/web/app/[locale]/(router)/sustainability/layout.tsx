"use client";

import Link from "next/link";

import c from "./Layout.module.css";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [restBrg, setRestBgr] = useState<{
    image: string;
    description: string;
  }>({
    image: "",
    description: "",
  });
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
    switch (pathName) {
      case "/jp/sustainability/diversityinclusion":
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_586371345%20(1)-2.jpeg",
          description: "サステナビリティ",
        });
        break;
      case "/jp/sustainability/healthandsafe":
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_582936229-2.jpeg",
          description: "健康と安全",
        });
        break;

      case "/jp/sustainability/humanresource":
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_492497598.jpeg",
          description: "人的資源の育成",
        });
        break;
      case "/jp/sustainability/socialresponsibility":
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_492497598.jpeg",
          description: "社会への貢献と責任",
        });
        break;

      case "/jp/sustainability/data":
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_587022816.jpeg",
          description: "データ",
        });
        break;

      default:
        setRestBgr({
          image:
            "https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/AdobeStock_577490154-1.jpeg",
          description: "サステナビリティ",
        });
    }
  }, [pathName]);

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   const storedScrollPosition = sessionStorage.getItem("scrollPosition");
  //   if (storedScrollPosition) {
  //     window.scrollTo(0, parseInt(storedScrollPosition, 10));
  //   }

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <>
      <Headerbackground namePage="Sustainability" {...restBrg} />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>サステナビリティ</span>
      </div>
      <div className={c.contents}>
        <div className={c.section}>
          <div className={c.pageIntro}>
            <Link href="/jp/sustainability">メッセージ</Link>
            <Link href="/jp/sustainability/diversityinclusion">
              ダイバーシティ＆インクルージョン
            </Link>
            <Link href="/jp/sustainability/healthandsafe">健康と安全</Link>
            <Link href="/jp/sustainability/diversityinclusion">
              人的資源の育成
            </Link>
            <Link href="/jp/sustainability/diversityinclusion">
              社会への貢献と責任
            </Link>
            <Link href="/jp/sustainability/diversityinclusion">データ</Link>
          </div>
          <hr />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
