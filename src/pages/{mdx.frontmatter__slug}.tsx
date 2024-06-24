import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Favicon from "../components/favicon";

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

const DescriptionPage: React.FC<DescriptionPageProps> = ({
  data,
  children,
}) => {
  const { frontmatter } = data.mdx;

  return <Layout pageTitle={frontmatter.title}>{children}</Layout>;
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

export default DescriptionPage;
