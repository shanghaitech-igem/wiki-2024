import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Favicon from "../components/favicon";
import * as styles from "../styles/modules/index.module.scss";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <header className={styles.heading}>Welcome!</header>
      <h3 style={{ textAlign: "center" }}>
        Welcome to ShanghaiTech's 2024 iGEM wiki page!
      </h3>
    </Layout>
  );
};

export const Head: React.FC = () => {
  return (
    <>
      <Seo title="Home" />
      <Favicon />
    </>
  );
};

export default IndexPage;
