import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Favicon from "../components/favicon";
import * as styles from "../styles/mdx.module.scss";
import { renderToString } from "react-dom/server";
import parse from "html-react-parser";

interface DescriptionPageProps {
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

const MDXPage: React.FC<DescriptionPageProps> = ({ data, children }) => {
  const { frontmatter } = data.mdx;
  const { slideFadeIn, heading } = styles;

  const htmlString = renderToString(children);
  // Parse the HTML string into React elements
  const parsedElements = parse(htmlString);
  // Convert parsed elements to an array and filter out non-element nodes
  const filteredElements = React.Children.toArray(parsedElements).filter(
    (child) => React.isValidElement(child)
  );

  // Add styles to each valid child element
  const styledElements = React.Children.map(
    filteredElements,
    (child, index) => (
      <div
        className={slideFadeIn}
        style={{ animationDelay: `${(index + 1) * 0.2}s` }}
      >
        {child}
      </div>
    )
  );

  return (
    <Layout>
      <header className={heading}>{frontmatter.title}</header>
      {styledElements}
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

export const Head: React.FC<DescriptionPageProps> = ({ data }) => {
  return (
    <div>
      <Seo title={data.mdx.frontmatter.title} />
      <Favicon pageFavicon={data.mdx.frontmatter.favicon} />
    </div>
  );
};

export default MDXPage;
