import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import Video from "../components/mdx/video";
import PDF from "../components/mdx/pdf";
import Audio from "../components/mdx/audio";
import Image from "../components/mdx/image";
import Plot from "../components/mdx/plot-loadable";

const components = {
  Video,
  PDF,
  Audio,
  Image,
  Plot,
  img: Image,
};

import Layout from "../components/layout";
import Seo from "../components/seo";
import Favicon from "../components/favicon";

import "prismjs/themes/prism-solarizedlight.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/command-line/prism-command-line.min.css";

import "../styles/global/prismjs.scss";
import "../styles/global/katex.scss";
import "../styles/global/footnote.scss";
import "../styles/global/copy-btn.scss";
import "../styles/global/header-anchor.scss";
import "../styles/global/mdx.scss";

import * as styles from "../styles/modules/mdx.module.scss";

const { title, container, content } = styles;

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
      <div className={container}>
        <header className={title}>{frontmatter.title}</header>
        <div className={content}>
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
      </div>
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
