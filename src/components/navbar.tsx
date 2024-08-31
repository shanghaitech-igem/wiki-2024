import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import * as styles from "../styles/modules/navbar.module.scss";
import { generateNavItems, NavItemType } from "../utils/generate-nav-item";

interface NavItemProps {
  item: NavItemType;
  isOpen: boolean;
  onToggle: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <>
      {item.children.length !== 0 ? (
        <>
          <div className={styles.navDropdown}>
            <a
              key={item.index}
              className={styles.navDropdownBtn}
              onClick={onToggle}
            >
              {item.name}
            </a>
            {isOpen && (
              <div className={styles.subMenu}>
                {item.children.map((child) => (
                  <Link
                    key={child.index}
                    to={`/${child.slug}`}
                    className={styles.subMenuItem}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <Link to={`/${item.slug}`} className={styles.navLink}>
          {item.name}
        </Link>
      )}
    </>
  );
};

const NavBar: React.FC = () => {
  const exclude = ["MDX-test", "MD-test", "style-test", "TOC-test"];
  const navItems = generateNavItems(exclude);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navMenuRef.current &&
      !navMenuRef.current.contains(event.target as Node)
    ) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        <img
          className={styles.logo}
          src="https://static.igem.wiki/teams/5174/icons/main-logo.svg"
        />
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

      <div className={styles.navMenu} ref={navMenuRef}>
        {navItems.map((item, index) => (
          <NavItem
            key={item.index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
