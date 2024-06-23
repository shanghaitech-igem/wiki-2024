import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Welcome!">
      <h3 style={{ textAlign: 'center' }}>Welcome to ShanghaiTech's 2024 iGEM Wiki page!</h3>
    </Layout>
  )
}


export const Head: React.FC = () => <Seo title="Home Page" />

export default IndexPage
