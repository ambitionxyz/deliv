"use client";

import { useContext, useEffect } from "react";
import NewsProvider, {
  NewContext,
} from "../../../../components/news/NewWrapper";
import { useOs } from "@mantine/hooks";

interface TagProps {
  params: {
    id: string;
  };
}
const Page = ({ params }: TagProps) => {
  const { setHeaderBackground } = useContext(NewContext);
  const os = useOs();

  useEffect(() => {
    setHeaderBackground({
      namePage: "Information",

      description: "お知らせ",
    });
  }, [os]);

  return <NewsProvider.Content />;
};

export default Page;
