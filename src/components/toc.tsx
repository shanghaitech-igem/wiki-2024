import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";

import * as modalStyles from "src/styles/modules/modal.module.scss";
import * as collapseStyles from "src/styles/modules/collapse.module.scss";

import * as mdxStyles from "src/styles/modules/mdx.module.scss";

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
  className,
}) => {
  const [activeId, setActiveId] = useState<string>("");

  const headingElementsRef = useRef<{
    [key: string]: IntersectionObserverEntry;
  }>({});

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      headingElementsRef.current = entries.reduce((map, entry) => {
        map[entry.target.id] = entry;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const entry = headingElementsRef.current[key];
        if (entry.isIntersecting) visibleHeadings.push(entry);
      });

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].target.id);
        console.log(visibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px 0px 0px",
    });

    const excludedClasses = [modalStyles.modal, collapseStyles.collapse, 'yetAnotherClass'];

    const headingElements = Array.from(document.querySelectorAll("article h1")).filter(
      (element) => !excludedClasses.some((className) => element.closest(`.${className}`))
    );
    
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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
          <Link
            className={activeId === item.url.slice(1) ? mdxStyles.active : ""}
            to={`${prefix}${item.url}`}
          >
            {item.title}
          </Link>
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

  if (!tableOfContents.items) return <section className={className} />;

  return (
    <section className={className}>
      {renderItems(tableOfContents.items)}
    </section>
  );
};

export default TOC;
