import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

import * as styles from "../styles/modules/layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
