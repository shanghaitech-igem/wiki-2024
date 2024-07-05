import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/navbar.module.scss";

interface NavItemProps {
  item: NavItem;
}

interface NavItem {
  index: number;
  name: string;
  path: string;
  slug: string;
  children?: NavItem[];
}

const generateNavItems = (files: string[]): NavItem[] => {
  const navItems: { [key: string]: NavItem } = {};

  files.forEach((file, index) => {
    const parts = file.split("/");
    let currentLevel: { [key: string]: NavItem } = navItems;

    parts.forEach((part) => {
      const isFile = part.endsWith(".md") || part.endsWith(".mdx");
      const name = part.replace(/^\d+-/, "").replace(/\.mdx?$/, "");
      const displayName = name.charAt(0).toUpperCase() + name.slice(1);
      const path =
        "/" +
        parts
          .slice(0, index + 1)
          .join("/")
          .replace(/\.mdx?$/, "");

      if (!currentLevel[name]) {
        currentLevel[name] = {
          index: index,
          name: displayName,
          path: isFile ? path : "",
          slug: isFile ? name : "",
          children: isFile ? [] : [],
        };
      }

      if (!isFile) {
        currentLevel = currentLevel[name].children as unknown as {
          [key: string]: NavItem;
        };
      }
    });
  });

  const sortNavItems = (items: { [key: string]: NavItem }): NavItem[] => {
    return Object.values(items).sort((a, b) => a.path.localeCompare(b.path));
  };

  const convertToArray = (items: { [key: string]: NavItem }): NavItem[] => {
    return Object.values(items).map((item) => ({
      ...item,
      children: sortNavItems(
        item.children as unknown as { [key: string]: NavItem }
      ),
    }));
  };

  return convertToArray(navItems);
};

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const { navLink, navDropdown, submenu, submenuItem } = styles;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  console.log(item);

  return (
    <div className={navDropdown}>
      {item.children ? (
        <>
          <div className={navLink} onClick={toggleDropdown}>
            {item.name}
          </div>
          {isDropdownOpen && (
            <div className={submenu}>
              {item.children.map(
                (child) => (
                  console.log(child),
                  (
                    <Link
                      key={child.index}
                      to={`/${child.slug}`}
                      className={submenuItem}
                    >
                      {child.name}
                    </Link>
                  )
                )
              )}
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

  return (
    <div className={styles.navBar}>
      {navItems.map((item) => (
        <NavItem key={item.index} item={item} />
      ))}
    </div>
  );
};

export default NavBar;
