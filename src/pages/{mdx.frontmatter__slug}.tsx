import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import Video from "src/components/mdx/video";
import PDF from "src/components/mdx/pdf";
import Audio from "src/components/mdx/audio";
import Image from "src/components/mdx/image";
import Modal from "src/components/mdx/modal";
import Plot from "src/components/mdx/plot-loadable";

const components = {
  Video,
  PDF,
  Audio,
  Image,
  Modal,
  Plot,
  img: Image,
};

import Layout from "src/components/layout";
import Seo from "src/components/seo";
import Favicon from "src/components/favicon";
import Tracer from "src/components/tracer";
import { TocItem } from "src/components/toc";
import TOC from "src/components/toc";

import "prismjs/themes/prism-solarizedlight.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/command-line/prism-command-line.min.css";

import "src/styles/global/prismjs.scss";
import "src/styles/global/katex.scss";
import "src/styles/global/footnote.scss";
import "src/styles/global/copy-btn.scss";
import "src/styles/global/header-anchor.scss";

import * as styles from "src/styles/modules/mdx.module.scss";

const { title, content, toc, article } = styles;

import handleCopyTex from "src/plugins/katex-copy-tex";

interface MdxPageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        favicon: string;
        tracer: string | null;
      };
      tableOfContents: { items: TocItem[] };
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
      {frontmatter.tracer && (
        <Tracer src={frontmatter.tracer} alt="Tracer Image" />
      )}
      <header className={title}>{frontmatter.title}</header>
      <div className={content}>
        <TOC className={toc} tableOfContents={data.mdx.tableOfContents} />
        <article className={article}>
          <MDXProvider components={components}>{children}</MDXProvider>
        </article>
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
