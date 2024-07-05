import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/layout.module.scss";

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

  files.forEach((file) => {
    const parts = file.split("/");
    let currentLevel: { [key: string]: NavItem } = navItems;

    parts.forEach((part, index) => {
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
          children: isFile ? undefined : [],
        };
      }

      if (!isFile) {
        if (!currentLevel[name].children) {
          currentLevel[name].children = [];
        }
        currentLevel = currentLevel[name].children as unknown as {
          [key: string]: NavItem;
        };
      }
    });
  });

  const sortNavItems = (items: { [key: string]: NavItem }): NavItem[] => {
    return Object.values(items).sort((a, b) => a.path.localeCompare(b.path));
  };

  return sortNavItems(navItems);
};

const NavItemComponent: React.FC<NavItemProps> = ({ item }) => {
  const { navLink, navDropdown } = styles;
  console.log(item);
  return (
    <>
      {item.children ? (
        <>
          <div>
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

const Navigation: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
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
    <>
      {navItems.map((item) => (
        <NavItemComponent key={item.index} item={item} />
      ))}
    </>
  );
};

export default Navigation;
