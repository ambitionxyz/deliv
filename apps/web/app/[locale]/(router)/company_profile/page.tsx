import Link from "next/link";
import Headerbackground from "../../../../components/headerBackground/HeaderBackground";

import c from "./Page.module.css";

const listRender = [{ title: "商号", description: "" }];
const Page = () => {
  return (
    <>
      <Headerbackground
        namePage="Company profile"
        image="https://6255088.fs1.hubspotusercontent-na1.net/hubfs/6255088/corp_2022/files/images/kv_company.png"
        description="会社概要"
        anChor={[
          {
            label: "会社概要",
            href: "/jp/company_profile#cp01",
          },
          {
            label: "アクセスマップ",
            href: "https://www.google.com/maps/place/%E6%9D%B1%E4%BA%AC%E3%83%9F%E3%83%83%E3%83%89%E3%82%BF%E3%82%A6%E3%83%B3/@35.6659803,139.7308747,15z/data=!4m6!3m5!1s0x60188b78922e6353:0xeb3e39dbe18da4d6!8m2!3d35.6659803!4d139.7308747!16zL20vMDd3N3Zs?hl=ja&entry=ttu",
          },
          {
            label: "沿革",
            href: "/jp/company_profile#cp03",
          },
        ]}
      />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>事業概要</span>
        <span>+</span>
        <span>コンサルティング </span>
      </div>
      <div className={c.contents}>
        <div className={c.section}>
          <h2 className={c.bdrTitle}>会社概要</h2>
          <div className={c.companyOutline}>
            <dl>
              <dt>商号</dt>
              <dd>
                <p>
                  株式会社デリバリーコンサルティング（Delivery Consulting Inc.)
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
