"use strict";

import { visit } from "unist-util-visit";
import katex from 'katex';
import { unified } from 'unified';
import parse from 'rehype-parse';
import 'katex/contrib/mhchem'; // Modify KaTex module

export default ({ markdownAST }, pluginOptions = {}) => {
  visit(markdownAST, `inlineMath`, node => {
    node.data.hChildren = unified().use(parse, {
      fragment: true,
      position: false
    }).parse(katex.renderToString(node.value, {
      displayMode: false,
      ...pluginOptions
    })).children;
  });

  visit(markdownAST, `math`, node => {
    node.data.hChildren = unified().use(parse, {
      fragment: true,
      position: false
    }).parse(katex.renderToString(node.value, {
      displayMode: true,
      ...pluginOptions
    })).children;
  });
}
