const { colors } = require('./colors');

const renderHtmlInner = (colorsInner, block) => `${block}`.toLocaleUpperCase();

const renderHtml = (block) => renderHtmlInner(colors, block);

module.exports = {
  renderHtmlInner,
  renderHtml,
};
