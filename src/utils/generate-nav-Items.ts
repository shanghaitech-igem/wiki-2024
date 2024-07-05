export interface NavItemType {
  index: number;
  name: string;
  slug: string;
  children?: NavItemType[];
}

export const generateNavItems = (files: string[]): NavItemType[] => {
  const navItems: { [key: string]: NavItemType } = {};

  files.forEach((file, index) => {
    const parts = file.split("/");
    let currentLevel: { [key: string]: NavItemType } = navItems;

    parts.forEach((part, partIndex) => {
      const isFile = part.endsWith(".md") || part.endsWith(".mdx");
      const name = part.replace(/^\d+-/, "").replace(/\.mdx?$/, "");
      const displayName = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      const path =
        "/" +
        parts
          .slice(0, partIndex + 1)
          .join("/")
          .replace(/\.mdx?$/, "");

      if (!currentLevel[name]) {
        currentLevel[name] = {
          index: index,
          name: displayName,
          slug: isFile ? name : "",
          children: isFile ? [] : [],
        };
      }

      if (!isFile) {
        currentLevel = currentLevel[name].children as unknown as {
          [key: string]: NavItemType;
        };
      }
    });
  });

  const sortNavItems = (items: { [key: string]: NavItemType }): NavItemType[] => {
    return Object.values(items).sort((a, b) => a.index > b.index ? 1 : -1);
  };

  const convertToArray = (items: { [key: string]: NavItemType }): NavItemType[] => {
    return Object.values(items).map((item) => ({
      ...item,
      children: sortNavItems(
        item.children as unknown as { [key: string]: NavItemType }
      ),
    }));
  };

  return convertToArray(navItems);
};

export default generateNavItems;
