import Link from "next/link";
import classes from "./MegaMenu.module.css";

interface MegaMenuProps {
  type: string;
}

interface MegaItemWithImageProps {
  href: string;
  title: string;
  image: string;
  seveondary: { lable: string; link: string }[] | null;
}

interface MegaItemFullTextProps {
  href: string;
  title: string;
  subTitle: string;
}

const MegaMenu = ({ type }: MegaMenuProps) => {
  <div className={classes.megaMenu}></div>;
};

const MegaItemWithImage = ({
  href,
  image,
  seveondary,
  title,
}: MegaItemWithImageProps) => {
  return (
    <li className={classes.secondaryCont}>
      <div className={classes.secondaryContLink}>
        <Link href="/jp/approard" className={classes.arrow01}>
          コンサルティング
        </Link>
      </div>
      <div className={classes.secondaryContImage}>
        <img src="https://www.deliv.co.jp/hubfs/corp_2022/files/images/img_head_01_01.png" />
      </div>
      {seveondary && (
        <ul className={classes.secondaryContLower}>
          {seveondary.map((item, i) => {
            return (
              <li>
                <Link href={item.link}>{item.lable}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

const MegaItemWithFullText = () => {
  return (
    <li className={classes.secondaryContText}>
      <div className={classes.secondaryContLink}>
        <Link href="/jp/approard" className={classes.arrow01}>
          コンサルティング
        </Link>
      </div>
    </li>
  );
};

export default MegaMenu;
