const { colors } = require('./colors');

const renderHtmlInner = (colorsInner, block) => block;

const renderHtml = (block) => renderHtmlInner(colors, block);

module.exports = {
  renderHtmlInner,
  renderHtml,
};
