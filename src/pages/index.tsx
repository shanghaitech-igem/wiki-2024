import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Favicon from "../components/favicon";
import * as styles from "../styles/index.module.scss";

const IndexPage: React.FC = () => {
  const { slideFadeIn, heading } = styles;

  return (
    <Layout>
      <header className={heading}>Welcome!</header>
      <h3 className={slideFadeIn} style={{ textAlign: "center" }}>
        Welcome to ShanghaiTech's 2024 iGEM wiki page!
      </h3>
    </Layout>
  );
};

export const Head: React.FC = () => {
  return (
    <div>
      <Seo title="Home" />
      <Favicon />
    </div>
  );
};

export default IndexPage;
