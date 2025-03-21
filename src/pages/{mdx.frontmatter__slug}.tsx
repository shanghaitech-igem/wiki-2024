import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";

import Video from "src/components/mdx/video";
import PDF from "src/components/mdx/pdf";
import Audio from "src/components/mdx/audio";
import Image from "src/components/mdx/image";
import Gallery from "src/components/mdx/gallery";
import Modal from "src/components/mdx/modal";
import Plot from "src/components/mdx/plot-lazy";
import Model from "src/components/mdx/model-lazy";
import Collapse from "src/components/mdx/collapse";
import { Tabs, Tab } from "src/components/mdx/tabs";
import Profile from "src/components/mdx/profile";
import BreakCell from "src/components/mdx/break-cell";

const components = {
  img: Image,
  Video,
  PDF,
  Audio,
  Image,
  Gallery,
  Modal,
  Plot,
  Model,
  Collapse,
  Tabs,
  Tab,
  Profile,
  Link,
  BreakCell,
};

import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import Tracer from "src/components/tracer";
import { TocItem } from "src/components/toc";
import TOC from "src/components/toc";

import * as styles from "src/styles/modules/mdx.module.scss";

import "src/styles/global/prismjs.scss";
import "src/styles/global/katex.scss";
import "src/styles/global/footnote.scss";
import "src/styles/global/copy-btn.scss";
import "src/styles/global/header-anchor.scss";
import "src/styles/global/mermaid.scss";

import "prismjs/themes/prism-solarizedlight.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/command-line/prism-command-line.min.css";

const { title, content, toc, article, page } = styles;

import handleCopyTex from "src/plugins/katex-copy-tex";

interface MdxPageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        favicon: string;
        tracer: string | null;
        cursor: string | null;
      };
      tableOfContents: { items: TocItem[] };
    };
  };
  children: React.ReactNode;
}

const MDXPage: React.FC<MdxPageProps> = ({ data, children }) => {
  React.useEffect(() => {
    const footnoteLabel = document.querySelector("#footnote-label");
    if (footnoteLabel) {
      footnoteLabel.textContent = "References";
    }

    // Attach the copy event listener
    document.addEventListener("copy", handleCopyTex);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("copy", handleCopyTex);
    };
  }, []);

  const { frontmatter } = data.mdx;

  return (
    <Layout cursor={frontmatter.cursor}>
      {frontmatter.tracer && (
        <Tracer src={frontmatter.tracer} alt="Tracer Image" />
      )}
      <div className={page}>
        <header className={title}>{frontmatter.title}</header>
        <div className={content}>
          <TOC className={toc} tableOfContents={data.mdx.tableOfContents} />
          <article className={article}>
            <MDXProvider components={components}>{children}</MDXProvider>
          </article>
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
        tracer
        cursor
      }
      tableOfContents
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
