import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

interface DescriptionPageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
      body: string;
    };
  };
}

const DescriptionPage: React.FC<DescriptionPageProps> = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <Layout pageTitle={frontmatter.title}>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  )
}

export const query = graphql`
  query {
    mdx(frontmatter: { type: { eq: "description" } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`

export const Head: React.FC<DescriptionPageProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
)

export default DescriptionPage
