import * as React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import * as styles from "src/styles/modules/index.module.scss";

const {title} = styles;

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <header className={title}>Welcome!</header>
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
