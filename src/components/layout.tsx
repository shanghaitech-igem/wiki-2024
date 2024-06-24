import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/layout.module.scss";
import { renderToString } from "react-dom/server";
import parse from "html-react-parser";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const {
    container,
    navLinks,
    heading,
    navLinkItem,
    navLinkText,
    fadeInChild,
  } = styles;

  const htmlString = renderToString(children);
  // Parse the HTML string into React elements
  const parsedElements = parse(htmlString);
  // Convert parsed elements to an array and filter out non-element nodes
  const filteredElements = React.Children.toArray(parsedElements).filter(
    (child) => React.isValidElement(child)
  );

  // Add styles to each valid child element
  const styledElements = React.Children.map(filteredElements, (child, index) => (
    <div
      className={fadeInChild}
      style={{ animationDelay: `${(index + 1) * 0.2}s` }}
    >
      {child}
    </div>
  ));

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/description" className={navLinkText}>
              Description
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <header className={heading}>{pageTitle}</header>
        {styledElements}
      </main>
    </div>
  );
};

export default Layout;
