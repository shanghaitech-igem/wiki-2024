import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/layout.module.scss";
import NavBar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { container, layout, content } = styles;
  const { brand, logo } = styles;
  return (
    <div className={layout}>
      <div className={container}>
        <nav>
          <Link to="/" className={brand}>
            <img
              className={logo}
              src="https://static.igem.org/websites/common/2022/favicons/favicon.svg"
            />
            <span>Home</span>
          </Link>
          <NavBar />
        </nav>
        <main className={content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
