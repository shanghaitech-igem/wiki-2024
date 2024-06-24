import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";

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
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          favicon
        }
      }
    }
  `);
  return (
    <div>
      <Seo title="Home" />
      <link
        key="favicon"
        rel="icon"
        href={data.site.siteMetadata.favicon}
      />
    </div>
  );
};

export default IndexPage;
