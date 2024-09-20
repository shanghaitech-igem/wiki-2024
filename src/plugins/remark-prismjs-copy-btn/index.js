import { CONTINUE, visit } from "unist-util-visit";
import parseOptions from "./parse-options.js";

function convertContentsToJavaScriptString(code) {
  return code
    .replace(/"/gm, "&quot;")
    .replace(/`/gm, "\\`")
    .replace(/\$/gm, "\\$");
}

export default (
  { markdownAST },
  {
    buttonText,
    copySvg,
    successSvg,
    customButtonContainerClass,
    customButtonClass,
  }
) => {
  const text = buttonText || "";
  const copyIcon = copySvg || "";
  const successIcon = successSvg || "";
  const containerClass =
    customButtonContainerClass || "gatsby-remark-copy-button-container";
  const buttonClass = customButtonClass || "gatsby-remark-copy-button";

  visit(markdownAST, "code", (node, index, parent) => {
    const language = node.meta ? node.lang + node.meta : node.lang;

    const clipboardButton = parseOptions(language);

    if (clipboardButton === true) {
      let code = parent.children[index].value;
      code = convertContentsToJavaScriptString(code);

      const buttonNode = {
        type: "html",
        value: `
            <div class="${containerClass}">
              <button
                class="${buttonClass}"
                onClick="copyToClipboard(\`${code}\`, this)"
              >
                ${text}${copyIcon}${successIcon}
              </button>
            </div>
        `.trim(),
      };

      const wrapperNode = {
        type: "element",
        tagName: "div",
        children: [buttonNode, node],
      };

      // Replace the original code node with the wrapper node
      parent.children.splice(index, 1, wrapperNode);
    }
  });

  return markdownAST;
};
