import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface DescriptionPageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
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

  return (
    <Layout pageTitle={frontmatter.title}>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }
`

export const Head: React.FC<DescriptionPageProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default DescriptionPage;
