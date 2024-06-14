import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to ShanghaiTech's iGEM Wiki page!</p>
    </Layout>
  )
}

export const Head: React.FC = () => <Seo title="Home Page" />

export default IndexPage
