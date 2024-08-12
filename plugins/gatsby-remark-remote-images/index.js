const sizeOf = require('image-size');
const fetch = require('node-fetch');

module.exports = async ({ markdownAST, markdownNode }) => {
  const { visit } = await import('unist-util-visit');

  const getImageDimensions = async (url) => {
    const response = await fetch(url);
    const buffer = await response.buffer();
    const dimensions = sizeOf(buffer);
    return dimensions;
  };

  const processImageNode = async (node, url) => {
    const { width, height } = await getImageDimensions(url);
    const ratio = (height / width) * 100;

    const elasticContainer = `
      <div style="position: relative; width: 100%; padding-bottom: ${ratio}%; overflow: hidden;">
        <img src="${url}" alt="${node.alt || ''}" title="${node.title || ''}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" />
      </div>
    `;

    node.type = 'html';
    node.value = elasticContainer;
  };

  const promises = [];

  // Process inline images
  visit(markdownAST, 'image', (node) => {
    promises.push(processImageNode(node, node.url));
  });

  // Process reference images
  const definitions = {};
  visit(markdownAST, 'definition', (node) => {
    definitions[node.identifier] = node;
  });

  visit(markdownAST, 'imageReference', (node) => {
    const definition = definitions[node.identifier];
    if (definition) {
      promises.push(processImageNode(node, definition.url));
    }
  });

  await Promise.all(promises);
  return markdownAST;
};
