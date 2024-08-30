'use strict';

const toc = require("mdast-util-toc"); // Import the Table of Contents utility

// Default preferences for TOC generation
const defaultPrefs = {
  tight: false,
  className: "toc",
  ordered: false,
};

// Validate class name for XSS safety
const isValidClassName = (className) => /^[a-zA-Z0-9_-]+$/.test(className);

// Create a TOC from the Markdown AST
const createTOC = (markdownAST, prefs) => {
  const tocMarkdownAST = {
    ...markdownAST,
    children: markdownAST.children.filter(node => node.type === "heading" && node.depth > 0),
  };

  return toc(tocMarkdownAST, {
    maxDepth: 1,
    tight: prefs.tight,
    ordered: prefs.ordered,
    skip: Array.isArray(prefs.exclude) ? prefs.exclude.join("|") : prefs.exclude,
  });
};

// Transformer function to process the Markdown AST and insert a TOC
const transformer = (markdownAST, pluginOptions) => {
  const firstHeadingIndex = markdownAST.children.findIndex(node => node.type === "heading");

  // If no headings are found, exit the function
  if (firstHeadingIndex === -1) return;

  // Merge default preferences with user-defined options
  const prefs = {
    ...defaultPrefs,
    ...pluginOptions,
    className: isValidClassName(pluginOptions.className) ? pluginOptions.className : defaultPrefs.className,
  };

  const result = createTOC(markdownAST, prefs);

  const tocDiv = {
    type: 'element',
    tagName: 'div',
    properties: { className: [prefs.className] },
    children: result.map.children,
  };

  // Insert the generated TOC into the original AST, wrapped by the div
  markdownAST.children.unshift(tocDiv); 
};

module.exports = async ({ markdownAST }, pluginOptions) => {
  transformer(markdownAST, pluginOptions);
};
