import React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/modules/mdx.module.scss";

const { toc } = styles;

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
  maxDepth = 6,
  minDepth = 1,
  skip,
  ordered = false,
  prefix = "",
  className
}) => {
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
  if (!tableOfContents.items) return <div className={className} />;

  return <div className={className}>{renderItems(tableOfContents.items)}</div>;
};

export default TOC;
