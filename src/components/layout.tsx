import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/layout.module.scss";
import Navigation from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { container, navLinks, navLinkItem, navLinkText, navDropdown } = styles;

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <Navigation />
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
