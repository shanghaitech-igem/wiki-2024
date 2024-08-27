import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
import remarkGfm from "remark-gfm";

const config = {
  siteMetadata: {
    title: `ShanghaiTech 2024 iGEM Wiki`,
    siteUrl: `https://2024.igem.wiki/shanghaitech-china`,
    favicon: `https://static.igem.org/websites/common/2022/favicons/favicon.svg`,
  },
  pathPrefix: `/shanghaitech-china`,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            remarkGfm, // Add GitHub Flavored Markdown (GFM) support
          ],
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`, // Adds GitHub-style hover links to headers in your markdown files when they’re rendered.
          `gatsby-remark-smartypants`, // Replaces “dumb” punctuation marks with “smart” punctuation marks using the retext-smartypants plugin.
          {
            resolve: `@jpfulton/gatsby-remark-copy-button`,
            options: {
              // Provide a text label for the copy button.
              // Default: null
              buttonText: null,
              // Provide a complete SVG tag string to replace the default
              // copy icon. Be sure to include a class of "copy-icon" on your custom
              // SVG tag when using this option.
              copySvg: null,
              // Provide a complete SVG tag string to replace the default
              // success icon.  Be sure to include a class of "success-icon" on your custom
              // SVG tag when using this option.
              successSvg: null,
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
              showLineNumbers: true,
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
                user: "root",
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
            resolve: `gatsby-plugin-purgecss`,
            options: {
              printRejected: true, // Print removed selectors and processed file names
              develop: false, // Enable while using `gatsby develop`
              // tailwind: true, // Enable tailwindcss support
              ignore: [], // Ignore files/folders
              purgeOnly: ["navbar.module.scss"], // Purge only these files/folders
              purgeCSSOptions: {
                // https://purgecss.com/configuration.html#options
                safelist: [
                  /^nav/,
                  "sub-menu",
                  "sub-menu-item",
                  "brand",
                  "logo",
                  "pseudo",
                  "button",
                  "show",
                  "blockquote",
                  "table",
                  "thead",
                  "tr",
                  "th",
                  "td",
                  "tbody",
                ], // Don't remove this selector
              },
              // More options defined here https://purgecss.com/configuration.html#options
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
        ],
      },
    },
  ],
};

export default config;
