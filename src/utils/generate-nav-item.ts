import { useStaticQuery, graphql } from "gatsby";

export interface NavItemType {
  index: number;
  name: string;
  slug: string;
  children: NavItemType[];
}

// Define the structure of the GraphQL query response
interface MdxNode {
  frontmatter: {
    slug: string;
  };
  internal: {
    contentFilePath: string;
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

export function generateNavItems(excludeFiles: string[] = []): NavItemType[] {
  const data: QueryData = useStaticQuery(graphql`
    query {
      allMdx(sort: { internal: { contentFilePath: ASC } }) {
        edges {
          node {
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  // Extract files and slugs from the query result
  const files: string[] = data.allMdx.edges.map((edge: MdxEdges) => edge.node.internal.contentFilePath);
  const slugs: string[] = data.allMdx.edges.map((edge: MdxEdges) => edge.node.frontmatter.slug);

  const navItems: { [key: string]: NavItemType } = {};

  files.forEach((file: string, index: number) => {
    // Normalize the path separator to handle both Windows and Linux paths
    const normalizedFile = file.replace(/\\/g, "/"); 
    
    // Split the path based on the normalized separator
    const parts: string[] = normalizedFile.split("/");

    // Find the index of the "contents" directory or default to 0
    const contentsIndex = parts.indexOf("contents");
    const startIndex = contentsIndex !== -1 ? contentsIndex + 1 : 0;

    let currentLevel: { [key: string]: NavItemType } = navItems;

    parts.slice(startIndex).forEach((part: string, partIndex: number) => {
      const isFile = part.endsWith(".md") || part.endsWith(".mdx");
      const name = part.replace(/^\d+-/, "").replace(/\.mdx?$/, "");
      const displayName = name
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      // Construct the path based on the sliced parts
      const path =
        "/" +
        parts
          .slice(startIndex, startIndex + partIndex + 1)
          .join("/")
          .replace(/\.mdx?$/, "");

      // Check if the name is in the exclude list
      if (excludeFiles.includes(name)) {
        return; // Skip this file
      }

      if (!currentLevel[name]) {
        currentLevel[name] = {
          index: index,
          name: displayName,
          slug: isFile ? slugs[index] : path, // Use the slug for files
          children: [],
        };
      }

      if (!isFile) {
        currentLevel = currentLevel[name].children as unknown as {
          [key: string]: NavItemType;
        };
      }
    });
  });

  const sortNavItems = (items: {
    [key: string]: NavItemType;
  }): NavItemType[] => {
    return Object.values(items).sort((a, b) => (a.index > b.index ? 1 : -1));
  };

  const convertToArray = (items: {
    [key: string]: NavItemType;
  }): NavItemType[] => {
    return Object.values(items).map((item) => ({
      ...item,
      children: sortNavItems(
        item.children as unknown as { [key: string]: NavItemType }
      ),
    }));
  };

  return convertToArray(navItems);
}

export default generateNavItems;
