import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

interface Description extends PageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

const Description: React.FC<Description> = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

interface HeadProps extends PageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
      }
    }
  }
}

export const Head: React.FC<HeadProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
)

export default Description
