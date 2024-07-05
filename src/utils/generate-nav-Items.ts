export interface NavItem {
  index: number;
  name: string;
  path: string;
  slug: string;
  children?: NavItem[];
}

export const generateNavItems = (files: string[]): NavItem[] => {
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

export default generateNavItems;
