import c from "./HeaderBackground.module.css";
import Link from "next/link";

interface HeaderbackgroundProps {
  image?: string;
  namePage: string;
  description: string;
  text?: string[];
  anChor?: { label: string; href: string }[];
}
const Headerbackground = ({
  image,
  namePage,
  description,
  text,
  anChor,
}: HeaderbackgroundProps) => {
  return (
    <>
      <div className={c.pageHeader}>
        {image && (
          <div className={c.pageKV}>
            <img src={image} />
          </div>
        )}
        <div className={c.heroLead}>
          <h1 className={c.heroLeadTitle}>{namePage}</h1>
          <div className={c.heroLeadTitleJP}>{description}</div>
          {text && (
            <div className={c.heroLeadText}>
              <p>
                {text.map((t, i) => {
                  return (
                    <>
                      {t} <br />
                    </>
                  );
                })}
              </p>
            </div>
          )}
        </div>
      </div>

      {anChor && anChor?.length > 0 && (
        <nav className={c.pageAnchor}>
          <ul>
            {anChor.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Headerbackground;
