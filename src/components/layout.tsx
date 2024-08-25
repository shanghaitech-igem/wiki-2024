import React from "react";
import * as styles from "../styles/layout.module.scss";
import NavBar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { container, layout } = styles;
  return (
    <div className={layout}>
      <NavBar />
      <main className={container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
