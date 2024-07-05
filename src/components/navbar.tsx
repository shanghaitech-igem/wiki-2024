import React, { useState, useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/navbar.module.scss";
import  generateNavItems from "../utils/generate-nav-Items";

interface NavItemProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}

export interface NavItem {
  index: number;
  name: string;
  path: string;
  slug: string;
  children?: NavItem[];
}

const NavItem: React.FC<NavItemProps> = ({ item, isOpen, onToggle }) => {
  const { navLink, navDropdown, submenu, submenuItem } = styles;

  return (
    <div className={navDropdown}>
      {item.children ? (
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
