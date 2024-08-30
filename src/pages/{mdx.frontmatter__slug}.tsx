import * as React from "react";
import { graphql } from "gatsby";

import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/command-line/prism-command-line.min.css";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Favicon from "../components/favicon";

import "../styles/global/prismjs.scss";
import "../styles/global/katex.scss";
import "../styles/global/footnote.scss";
import "../styles/global/copy-btn.scss";
import "../styles/global/mdx.scss";

import * as styles from "../styles/modules/mdx.module.scss";

import handleCopyTex from "../plugins/katex-copy-tex";

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

  React.useEffect(() => {
    // Attach the copy event listener
    document.addEventListener("copy", handleCopyTex);
  
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("copy", handleCopyTex);
    };
  }, []);

  const { frontmatter } = data.mdx;

  return (
    <Layout>
      <header className={styles.heading}>{frontmatter.title}</header>
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
