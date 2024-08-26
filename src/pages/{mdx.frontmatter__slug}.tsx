import * as React from "react";
import { graphql } from "gatsby";

import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/command-line/prism-command-line.min.css";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Favicon from "../components/favicon";

import "../styles/prismjs-config.scss";
import "../styles/katex.scss";
import "../styles/mdx.global.scss";
import * as styles from "../styles/mdx.module.scss";

interface MdxPageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        favicon: string;
      };
    };
    site: {
      siteMetadata: {
        favicon: string;
      };
    };
  };
  children: React.ReactNode;
}

const MDXPage: React.FC<MdxPageProps> = ({ data, children }) => {
  const { frontmatter } = data.mdx;
  const { heading } = styles;

  return (
    <Layout>
      <header className={heading}>{frontmatter.title}</header>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        favicon
      }
    }
  }
`;

export const Head: React.FC<MdxPageProps> = ({ data }) => {
  return (
    <>
      <Seo title={data.mdx.frontmatter.title} />
      <Favicon pageFavicon={data.mdx.frontmatter.favicon} />
    </>
  );
};

export default MDXPage;
