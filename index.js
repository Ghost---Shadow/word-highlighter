const { renderHtml } = require('./src/renderer');
const { generateCss } = require('./src/cssGenerator');
const { colors, registerColors } = require('./src/colors');

const WORD_HIGHLIGHTER = 'word-highlighter';

if (document) {
  const css = generateCss();
  const headDom = document.getElementsByTagName('head').item(0);
  headDom.innerHTML += css;
  document.addEventListener('DOMContentLoaded', () => {
    const doms = document.getElementsByClassName(WORD_HIGHLIGHTER);
    for (let i = 0; i < doms.length; i += 1) {
      const dom = doms.item(i);
      dom.innerText = renderHtml(dom.innerText);
    }
  });
}

module.exports = {
  WORD_HIGHLIGHTER,
  registerColors,
  colors,
  renderHtml,
  generateCss,
};
