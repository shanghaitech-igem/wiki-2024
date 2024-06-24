import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Favicon from "../components/favicon";

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Welcome!">
      <h3 style={{ textAlign: "center" }}>
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
