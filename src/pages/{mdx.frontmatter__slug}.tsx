import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface DescriptionPageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
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
      }
    }
    site {
      siteMetadata {
        favicon
      }
    }
  }
`;

export const Head: React.FC<DescriptionPageProps> = ({ data }) => {
  return (
    <div>
      <Seo title={data.mdx.frontmatter.title} />
      <link key="favicon" rel="icon" href={data.site.siteMetadata.favicon} />
    </div>
  );
};

export default DescriptionPage;
