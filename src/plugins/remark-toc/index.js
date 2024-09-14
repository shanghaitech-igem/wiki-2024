import { toc } from "mdast-util-toc"; // Import the Table of Contents utility

// Default preferences for TOC generation
const defaultPrefs = {
  className: "toc",
  ordered: false,
};

// Validate class name for XSS safety
const isValidClassName = (className) => /^[a-zA-Z0-9_-]+$/.test(className) && className != null;

// Create a TOC from the Markdown AST
const createTOC = (markdownAST, prefs) => {
  const tocMarkdownAST = {
    ...markdownAST,
    children: markdownAST.children.filter(node => node.type === "heading" && node.depth > 0),
  };

  return toc(tocMarkdownAST, {
    maxDepth: 1,
    ordered: prefs.ordered,
    skip: Array.isArray(prefs.exclude) ? prefs.exclude.join("|") : prefs.exclude,
  });
};

// Transformer function to process the Markdown AST and insert a TOC
const transformer = (markdownAST, pluginOptions) => {
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
    children: result != null && result.map != undefined ? result.map.children : [],
  };

  // Insert the generated TOC at the beginning
  markdownAST.children.unshift(tocDiv);

  // Wrap the rest of the content in an <article> element
  const articleNode = {
    type: 'element',
    tagName: 'article',
    properties: {},
    children: markdownAST.children.slice(1), // Exclude the TOC
  };

  // Replace the original children with the TOC and article node
  markdownAST.children = [tocDiv, articleNode];
}


export default ({ markdownAST }, pluginOptions) => {
  transformer(markdownAST, pluginOptions);
};
