import React, { useState, useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/modules/navbar.module.scss";
import { generateNavItems, NavItemType } from "../utils/generate-nav-item";

interface NavItemProps {
  item: NavItemType;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const handleSubMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {item.children !== null ? (
        <div className={styles.navDropdown}>
          <button
            key={item.id}
            className={styles.navDropdownBtn}
          >
            {item.name}
          </button>
          <div className={styles.subMenu}>
            {item.children.map((child) => (
              <Link
                key={child.id}
                to={`/${child.slug}`}
                className={styles.subMenuItem}
                onClick={handleSubMenuClick}
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
          favicon
        }
      }
    }
  `);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        <img className={styles.logo} src={data.site.siteMetadata.favicon} />
      </Link>

      {/* Responsive Activator */}
      <input id="bmenub" type="checkbox" className={styles.show} />
      <label
        htmlFor="bmenub"
        className={`${styles.burger} ${styles.pseudo} ${styles.button}`}
      >
        &#9776;
      </label>
      {/* Responsive Activator */}

      <div className={styles.navMenu}>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
