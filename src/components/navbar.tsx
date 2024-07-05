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
  const { navLink, navDropdown, submenu, submenuItem } = styles;
  console.log(item);
  return (
    <div className={navDropdown}>
      {item.children.length != 0 ? (
        <>
          <div className={navLink} onClick={onToggle}>
            {item.name}
          </div>
          {isOpen && (
            <div className={submenu}>
              {item.children.map((child) => (
                <Link
                  key={child.index}
                  to={`/${child.slug}`}
                  className={submenuItem}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link to={`/${item.slug}`} className={navLink}>
          {item.name}
        </Link>
      )}
    </div>
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
  );
};

export default NavBar;
