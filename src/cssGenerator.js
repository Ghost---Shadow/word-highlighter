const { colors } = require('./colors');

const generateCssInner = (colorsInner) => JSON.stringify(colorsInner);

const generateCss = () => generateCssInner(colors);

module.exports = {
  generateCss,
  generateCssInner,
};
