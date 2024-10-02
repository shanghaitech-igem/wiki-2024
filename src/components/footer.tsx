import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "src/styles/modules/footer.module.scss";
import { generateNavItems, NavItemType } from "src/utils/generate-nav-item";
import { Icon } from "@iconify/react";
import parseRemoteURL from "src/utils/remote-url-parser";

const {
  footer,
  nav,
  submenu,
  navLink,
  submenuSingle,
  info,
  logos,
  mainLogo,
  stuLogo,
  declaration,
  icon,
  communication,
  icons,
  snapgeneLogo,
} = styles;

interface NavItemProps {
  item: NavItemType;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  if (item.children !== null) {
    return (
      <div className={submenu}>
        <h3>{item.name}</h3>
        {item.children.map((child) => (
          <Link key={child.id} to={`/${child.slug}`} className={navLink}>
            {child.name}
          </Link>
        ))}
      </div>
    );
  } else {
    return null; // We will handle single items separately
  }
};

const Footer: React.FC = () => {
  const navItems = generateNavItems();
  const singleNavItems = navItems.filter((item) => item.children === null);

  return (
    <footer className={footer}>
      <div className={nav}>
        {navItems
          .filter((item) => item.children !== null)
          .map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        <div className={submenuSingle}>
          {singleNavItems.map((item) => (
            <Link key={item.id} to={`/${item.slug}`} className={navLink}>
              <h3>{item.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      <div className={info}>
        <div className={logos}>
          <a
            href="https://gitlab.igem.org/2024/shanghaitech-china#shanghaitech---igem-2024-wiki-repository"
            target="_blank"
            rel="noreferrer"
            className={mainLogo}
          >
            <img
              src={parseRemoteURL("server/svgs/main-logo-bar.svg")}
              alt="Logo"
            />
          </a>
          <a
            href="https://www.shanghaitech.edu.cn/"
            target="_blank"
            rel="noreferrer"
            className={stuLogo}
          >
            <img
              src={parseRemoteURL("server/svgs/stu-logo-bar.svg")}
              alt="Logo"
            />
          </a>
          <a
            href="https://www.snapgene.com/"
            target="_blank"
            rel="noreferrer"
            className={snapgeneLogo}
          >
            <img
              src={parseRemoteURL("server/svgs/snapgene-logo-bar.svg")}
              alt="Logo"
            />
          </a>
        </div>
        <div className={communication}>
          <p>Follow Us</p>
          <div className={icons}>
            <a
              href="https://www.instagram.com/igemshanghaitech2024"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="mdi:instagram" className={icon} />
            </a>
            <a
              href="https://weibo.com/u/7932645830"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="simple-icons:sinaweibo" className={icon} />
            </a>
            <a
              href="https://mp.weixin.qq.com/s/rOb0rhOsL5qHEfm75Gac3w"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="ic:baseline-wechat" className={icon} />
            </a>

            <a
              href="https://www.youtube.com/@iGEM-ShanghaiTech2024"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="ri:youtube-fill" className={icon} />
            </a>
          </div>
          <p>Contact Us</p>
          <div className={icons}>
            <a href="mailto:igemshanghaitech@163.com">
              <Icon icon="arcticons:netease-mail" className={icon} />
            </a>
            <a href="mailto:igem.shanghaitech.china@gmail.com">
              <Icon icon="mdi:gmail" className={icon} />
            </a>
          </div>
        </div>
      </div>

      <div className={declaration}>
        <p>
          Some photos used for decoration are from Freepik{" "}
          <a href="https://wwww.freepik.com">Freepik</a>.
        </p>
        <p>
          © 2024 - Content on this site is licensed under a{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International license
          </a>
          .
        </p>
        <p>
          The repository used to create this website is available at{" "}
          <a href="https://gitlab.igem.org/2024/shanghaitech-china">
            gitlab.igem.org/2024/shanghaitech-china
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
