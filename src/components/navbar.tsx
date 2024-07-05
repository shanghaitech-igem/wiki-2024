import React, { useState, useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/navbar.module.scss";
import { generateNavItems, NavItemType } from "../utils/generate-nav-Items";

interface NavItemProps {
  item: NavItemType;
  isOpen: boolean;
  onToggle: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, isOpen, onToggle }) => {
  const { navLink, navDropdownBtn, subMenu, subMenuItem, navDropdown } = styles;
  console.log(item);
  return (
    <>
      {item.children.length !== 0 ? (
        <>
          <div className={navDropdown}>
            <a key={item.index} className={navDropdownBtn} onClick={onToggle}>
              {item.name}
            </a>
            {isOpen && (
              <div className={subMenu}>
                {item.children.map((child) => (
                  <Link
                    key={child.index}
                    to={`/${child.slug}`}
                    className={subMenuItem}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <Link to={`/${item.slug}`} className={navLink}>
          {item.name}
        </Link>
      )}
    </>
  );
};

const NavBar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(sort: { relativePath: ASC }) {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `);

  const files = data.allFile.edges.map((edge: any) => edge.node.relativePath);
  const navItems = generateNavItems(files);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navBarRef = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navBarRef.current &&
      !navBarRef.current.contains(event.target as Node)
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
    <>
      {/* Responsive Activator */}
      <input id="bmenub" type="checkbox" className={styles.show} />
      <label
        htmlFor="bmenub"
        className={`${styles.burger} ${styles.pseudo} ${styles.button}`}
      >
        &#9776;
      </label>
      {/* Responsive Activator */}

      <div className={styles.navBar} ref={navBarRef}>
        {navItems.map((item, index) => (
          <NavItem
            key={item.index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </>
  );
};

export default NavBar;
