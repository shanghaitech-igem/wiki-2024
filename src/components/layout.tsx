import React from "react";
import { Link } from "gatsby";
import * as styles from "./layout.module.scss";

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
        {React.Children.map(children, (child, index) => (
          <div
            className={fadeInChild}
            style={{ animationDelay: `${0.3}s` }}
          >
            {child}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Layout;
