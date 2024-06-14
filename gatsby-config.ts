import type { GatsbyConfig } from "gatsby";

module.exports = {
  pathPrefix: `/shanghaitech-china`,
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Shanghaitech iGEM Wiki`,
    siteUrl: `https://2024.igem.wiki/shanghaitech-china`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};

export default config;
