export default (language) => {
  let clipboardButton = true; // Default to true
  if (!language) {
    return clipboardButton;
  }

  if (language.split(`{`).length > 1) {
    const [splitLanguage, ...options] = language.split(`{`);

    options.forEach((option) => {
      option = option.slice(0, -1);
      const splitOption = option.replace(/ /g, ``).split(`:`);

      if (
        splitOption.length === 2 &&
        splitOption[0] === `clipboardButton` &&
        splitOption[1].trim() === `false`
      ) {
        clipboardButton = false;
      }
    });

    return clipboardButton;
  }

  return clipboardButton;
};
