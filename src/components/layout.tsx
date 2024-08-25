import React from "react";
import * as styles from "../styles/layout.module.scss";
import NavBar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { container, layout, content } = styles;
  return (
    <div className={layout}>
      <div className={container}>
        <NavBar />
        <main className={content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
