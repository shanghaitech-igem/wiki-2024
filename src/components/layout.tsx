import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Cursor from "./cursor";

import * as styles from "src/styles/modules/layout.module.scss";

import "src/styles/global/layout.scss";

interface LayoutProps {
  cursor?: string | null;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ cursor, children }) => {
  return (
    <>
      <Cursor svgURL={cursor}>
        <NavBar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </Cursor>
    </>
  );
};

export default Layout;
