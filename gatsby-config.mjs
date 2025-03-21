import { fileURLToPath } from "url";
import * as path from "path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const config = {
  siteMetadata: {
    title: `ShanghaiTech 2024 iGEM Wiki`,
    siteUrl: `https://2024.igem.wiki/shanghaitech-china`,
    staticServerURL: `https://static.igem.wiki/teams/5174/`,
    favicon: `server/svgs/main-logo-icon.svg`,
    logo: `server/svgs/main-logo.svg`,
  },
  pathPrefix: `/shanghaitech-china`,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  flags: {
    DEV_SSR: true,
  },
  graphqlTypegen: true,
  plugins: [
    // These two plugins are only used in development.
    // `gatsby-plugin-perf-budgets`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents/`,
        ignore: [`**/data/**`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/`,
        ignore: [`**/data/**`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lib`,
        path: `${__dirname}/lib/`,
        ignore: [`**/data/**`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `test`,
        path: `${__dirname}/test/`,
        ignore: [`**/data/**`],
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            remarkGfm, // Add GitHub Flavored Markdown (GFM) support
            remarkMath,
          ],
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`, // Replaces “dumb” punctuation marks with “smart” punctuation marks using the retext-smartypants plugin.
          `gatsby-remark-section-split`, // Splits sections in markdown files into their own pages.
          `gatsby-remark-header-link`, // Adds GitHub-style hover links to headers in markdown files when they’re rendered.
          {
            resolve: `gatsby-remark-mermaid`,
            options: /** @type {import('gatsby-remark-mermaid').Options} */ ({
              mermaidConfig: {
                theme: "neutral",
                themeCSS: ".node rect { fill: #fff; }",
              },
            }),
          },
          {
            // !!! Run `gastby clean` after any changes to this plugin !!!
            resolve: `gatsby-remark-prismjs-copy-btn`,
            options: {
              // Provide a text label for the copy button.
              // Default: null
              buttonText: null,
              // Provide a complete SVG tag string to replace the default
              // copy icon. Be sure to include a class of "copy-icon" on your custom
              // SVG tag when using this option.
              copySvg: `<svg class="copy-icon" height="16" viewBox="0 0 16 16" width="16">
                          <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                          <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>`,
              // Provide a complete SVG tag string to replace the default
              // success icon.  Be sure to include a class of "success-icon" on your custom
              // SVG tag when using this option.
              successSvg: `<svg class="success-icon" height="16" viewBox="0 0 16 16" width="16">
                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                           </svg>`,
              // Provide a custom container class for the <div> tag that contains
              // the copy button to apply custom styling.
              // Default: "gatsby-remark-copy-button-container"
              customButtonContainerClass: "copy-button-container",
              // Provide a custom button class for the copy button to apply
              // custom styling.
              // Default: "gatsby-remark-copy-button"
              customButtonClass: "copy-button",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              // require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "user",
                host: "localhost",
                global: true,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
              trust: true,
              output: "htmlAndMathml",
            },
          },
          {
            resolve: `gatsby-plugin-nprogress`,
            options: {
              // Disable the loading spinner.
              showSpinner: false,
            },
          },
        ],
      },
    },
  ],
};

export default config;
