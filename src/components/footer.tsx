import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/modules/footer.module.scss";
import { generateNavItems, NavItemType } from "../utils/generate-nav-item";

const {
  footer,
  nav,
  submenu,
  navLink,
  submenuSingle,
  info,
  logo,
  social,
  declaration,
} = styles;
const Nothing = () => null;

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
        <div>
          <img
            className={logo}
            src="https://static.igem.wiki/teams/5174/test/igem-logo-light.svg"
            alt="Logo"
          />
        </div>
        <div className={social}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              src="https://static.igem.wiki/teams/5174/icons/footer/instagram-icon.svg"
              alt="Instagram"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img
              src="https://static.igem.wiki/teams/5174/icons/footer/twitter-x-icon.svg"
              alt="Twitter"
            />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img
              src="https://static.igem.wiki/teams/5174/icons/footer/youtube-icon.svg"
              alt="YouTube"
            />
          </a>
          <a href="mailto:igemshanghaitech@163.com">
            <img
              src="https://static.igem.wiki/teams/5174/icons/footer/email-icon.svg"
              alt="Email"
            />
          </a>
        </div>
      </div>

      <div className={declaration}>
        <p>
          © 2024 - Content on this site is licensed under a{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International license
          </a>
          .
        </p>
        <p>
          The repository used to create this website is available at{" "}
          <a href="gitlab.igem.org/2024/shanghaitech-china">
            gitlab.igem.org/2024/shanghaitech-china
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
