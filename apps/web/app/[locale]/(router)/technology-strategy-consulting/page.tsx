import Link from "next/link";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";
import { WhatWeDoWrapper } from "../../../../components/whatWeDo/WhatWeDoWrapper";

import c from "./Page.module.css";

const Page = () => {
  return (
    <>
      <Headerbackground
        namePage="Technology strategy"
        image="https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_theme_02.png"
        description="テクノロジー戦略"
      />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>事業概要</span>
        <span>+</span>
        <span>コンサルティング </span>
      </div>
    </>
  );
};

export default WhatWeDoWrapper(Page);
