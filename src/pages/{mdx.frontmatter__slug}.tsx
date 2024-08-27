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

import katexReplaceWithTex from "../utils/katex2tex";

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
  // Return <div class="katex"> element containing node, or null if not found.
  function closestKatex(node: Node): Element | null | undefined {
    // If node is a Text Node, for example, go up to containing Element,
    // where we can apply the `closest` method.
    const element: Element | null | undefined =
      node instanceof Element ? node : node.parentElement;
    return element && element.closest(".katex");
  }

  const handleCopy = (event: ClipboardEvent) => {
    console.log("copy event");
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !event.clipboardData) {
      return; // default action OK if selection is empty or unchangeable
    }

    const clipboardData = event.clipboardData;
    const range = selection.getRangeAt(0); // Now safe to access

    // When start point is within a formula, expand to entire formula.
    const startKatex = closestKatex(range.startContainer);
    if (startKatex) {
      range.setStartBefore(startKatex);
    }

    // Similarly, when end point is within a formula, expand to entire formula.
    const endKatex = closestKatex(range.endContainer);
    if (endKatex) {
      range.setEndAfter(endKatex);
    }

    const fragment = range.cloneContents();
    if (!fragment.querySelector(".katex-mathml")) {
      return; // default action OK if no .katex-mathml elements
    }

    const htmlContents = Array.prototype.map
      .call(fragment.childNodes, (el) =>
        el instanceof Text ? el.textContent : el.outerHTML
      )
      .join("");

    // Preserve usual HTML copy/paste behavior.
    clipboardData.setData("text/html", htmlContents);
    // Rewrite plain-text version.
    console.log(katexReplaceWithTex(fragment).textContent);
    clipboardData.setData(
      "text/plain",
      katexReplaceWithTex(fragment).textContent || ""
    );
    // Prevent normal copy handling.
    event.preventDefault();
  };

  React.useEffect(() => {
    // Attach the copy event listener
    document.addEventListener("copy", handleCopy);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

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
