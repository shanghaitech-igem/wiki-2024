import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

import * as styles from "src/styles/modules/layout.module.scss";

import "src/styles/global/layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
