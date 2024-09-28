import React from "react";
import { Link } from "gatsby";

export interface TocItem {
  url: string;
  title: string;
  items?: TocItem[];
}

interface TocProps {
  tableOfContents: { items: TocItem[] };
  maxDepth?: number;
  minDepth?: number;
  skip?: string;
  ordered?: boolean;
  prefix?: string;
  className?: string;
}

const TOC: React.FC<TocProps> = ({
  tableOfContents,
  maxDepth = 1,
  minDepth = 1,
  skip,
  ordered = false,
  prefix = "",
  className
}) => {
  // If tableOfContents is null, return null
  if (!tableOfContents) return null;

  const renderItems = (
    items: TocItem[],
    depth: number = 1
  ): React.ReactNode => {
    if (depth > maxDepth) return null;

    const listItems = items
      .filter((item) => {
        const isWithinDepth = depth >= minDepth;
        const matchesSkip = skip
          ? new RegExp(`^(${skip})`, "i").test(item.title)
          : false;
        return isWithinDepth && !matchesSkip;
      })
      .map((item) => (
        <li key={item.url}>
          <Link to={`${prefix}${item.url}`}>{item.title}</Link>
          {item.items && renderItems(item.items, depth + 1)}
        </li>
      ));

    return listItems.length > 0 ? (
      ordered ? (
        <ol>{listItems}</ol>
      ) : (
        <ul>{listItems}</ul>
      )
    ) : null;
  };

  // If tableOfContents.items is empty, return null
  if (!tableOfContents.items) return <section className={className} />;

  return <section className={className}>{renderItems(tableOfContents.items)}</section>;
};

export default TOC;
