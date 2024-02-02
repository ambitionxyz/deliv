"use client";

import { useContext, useEffect } from "react";
import NewsProvider, {
  NewContext,
} from "../../../../../../components/news/NewWrapper";
import { useOs } from "@mantine/hooks";
import { usePathname } from "next/navigation";
const Page = () => {
  const { setHeaderBackground, tag, setTag } = useContext(NewContext);

  const pathName = usePathname();
  const pathSeparate = pathName.split("/");
  const des = pathSeparate[pathSeparate.length - 1]?.split("-")[1] || "";
  const os = useOs();

  useEffect(() => {
    if (tag === "") {
      setTag(decodeURIComponent(des));
    }
  }, []);
  useEffect(() => {
    setHeaderBackground({
      namePage: "Information",
      description: `お知らせ｜${decodeURIComponent(des)}`,
    });
  }, [os]);
  return <NewsProvider.Content />;
};

export default Page;
