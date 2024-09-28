// Function to deep copy a node
function cloneNode(node) {
  const newNode = { ...node };
  if (node.children) {
    newNode.children = node.children.map(cloneNode);
  }
  return newNode;
}

export default ({ markdownAST }) => {
  const sections = [];
  let currentSection = { type: "element", tagName: "section", children: [] };

  // Iterate over the top-level children of the markdownAST
  markdownAST.children.forEach((node) => {
    if (
      node.type === "thematicBreak" &&
      node.position.end.offset - node.position.start.offset === 6
    ) {
      // Push the current section if it has children
      if (currentSection.children.length > 0) {
        sections.push(currentSection);
      }
      // Start a new section
      currentSection = { type: "element", tagName: "section", children: [] };
    } else {
      // Clone the node to avoid shared references
      currentSection.children.push(cloneNode(node));
    }
  });

  // Push the last section if it has children
  if (currentSection.children.length > 0) {
    sections.push(currentSection);
  }

  // Replace the top-level children with the new sections
  markdownAST.children = sections;

  return markdownAST;
};
