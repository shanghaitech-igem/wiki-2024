import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Favicon from "../components/favicon";
import * as styles from "../styles/modules/index.module.scss";

const {title} = styles;

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <header className={styles.title}>Welcome!</header>
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
