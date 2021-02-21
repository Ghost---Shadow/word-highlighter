const { colors } = require('./colors');
const { WORD_HIGHLIGHTER } = require('./constants');

const generateCssInner = (colorsInner) => {
  const colorToCss = (color, index) => `
  .${WORD_HIGHLIGHTER}-${index + 1} {
    color: ${color}
  }
  `;
  const cssArray = colorsInner.map(colorToCss);
  const cssString = cssArray.join('\n');

  return `
  <style>
  ${cssString}
  </style>
  `;
};

const generateCss = () => generateCssInner(colors);

module.exports = {
  generateCss,
  generateCssInner,
};
