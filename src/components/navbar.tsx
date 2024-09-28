import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "src/styles/modules/navbar.module.scss";
import { generateNavItems, NavItemType } from "src/utils/generate-nav-item";
import parseRemoteURL from "src/utils/remote-url-parser";

interface NavItemProps {
  item: NavItemType;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  return (
    <>
      {item.children !== null ? (
        <div className={styles.navDropdown}>
          <Link to={`#`} key={item.id} className={styles.subMenuRoot}>
            {item.name}
          </Link>
          <div className={styles.subMenu}>
            {item.children.map((child) => (
              <Link
                key={child.id}
                to={`/${child.slug}`}
                className={styles.subMenuLink}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link to={`/${item.slug}`} className={styles.navLink}>
          {item.name}
        </Link>
      )}
    </>
  );
};

const NavBar: React.FC = () => {
  const navItems = generateNavItems();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          logo
        }
      }
    }
  `);

  return (
    <>
      <nav className={styles.navBarGlass}></nav>
      <nav className={styles.navBar}>
        <Link to="/" className={styles.brand}>
          <img
            className={styles.logo}
            src={parseRemoteURL(data.site.siteMetadata.logo)}
          />
        </Link>

        {/* Responsive Activator */}
        <input id="bmenub" type="checkbox" className={styles.show} />
        <label htmlFor="bmenub" className={`${styles.burger}`}>
          &#9776;
        </label>
        {/* Responsive Activator */}
        <div className={styles.navMenu}>
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
