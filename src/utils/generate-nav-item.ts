import { useStaticQuery, graphql } from "gatsby";

export interface NavItemType {
  id: string;
  index: number;
  name: string;
  slug: string;
  children: NavItemType[] | null;
}

interface MdxNode {
  id: string;
  frontmatter: {
    slug: string;
  };
  parent: {
    id: string;
    name: string;
    sourceInstanceName: string;
    relativeDirectory: string;
  };
}

interface MdxEdges {
  node: MdxNode;
}

interface QueryData {
  allMdx: {
    edges: MdxEdges[];
  };
}

// Utility function to format names
const formatName = (name: string): string => {
  return name
    .replace(/^\d+-/, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function generateNavItems(): NavItemType[] {
  const data: QueryData = useStaticQuery(graphql`
    query {
      allMdx(sort: { internal: { contentFilePath: ASC } }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
            parent {
              id
              ... on File {
                name
                sourceInstanceName
                relativeDirectory
              }
            }
          }
        }
      }
    }
  `);

  const navItems: Record<string, NavItemType> = {};

  data.allMdx.edges.forEach(({ node }, index) => {
    const { parent, frontmatter } = node;

    // Skip items from the specific folders
    if (
      parent.sourceInstanceName === "test" ||
      parent.sourceInstanceName === "docs"
    )
      return;

    const { slug } = frontmatter;
    const { id, name, relativeDirectory } = parent;

    // Initialize parent item if it doesn't exist
    if (relativeDirectory) {
      if (!navItems[relativeDirectory]) {
        navItems[relativeDirectory] = {
          id: id,
          index: index,
          name: relativeDirectory,
          slug: "",
          children: [],
        };
      }

      // Add child item
      navItems[relativeDirectory].children?.push({
        id: node.id,
        index: index,
        name: name,
        slug: slug,
        children: null,
      });
    } else {
      // Handle items without a relative directory
      navItems[name] = {
        id: node.id,
        index: index,
        name: name,
        slug: slug,
        children: null,
      };
    }
  });

  // Convert the dictionary to an array
  const navItemsArray = Object.values(navItems);

  // Process names for display
  navItemsArray.forEach((item) => {
    item.name = formatName(item.name);
    item.children?.forEach((child) => {
      child.name = formatName(child.name);
    });
  });

  return navItemsArray;
}

export default generateNavItems;
