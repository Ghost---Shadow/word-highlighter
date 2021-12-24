const { renderHtml } = require('./src/renderer');
const { generateCss } = require('./src/cssGenerator');
const { colors, registerColors } = require('./src/colors');
const { WORD_HIGHLIGHTER } = require('./src/constants');

const wordHighlighterRender = () => {
  const doms = document.getElementsByClassName(WORD_HIGHLIGHTER);
  for (let i = 0; i < doms.length; i += 1) {
    const dom = doms.item(i);
    dom.innerHTML = renderHtml(dom.innerText);
  }
};

if (typeof document !== 'undefined') {
  const css = generateCss();
  const headDom = document.getElementsByTagName('head').item(0);
  headDom.innerHTML += css;
  window.wordHighlighterRender = wordHighlighterRender;
  document.addEventListener('DOMContentLoaded', () => {
    wordHighlighterRender();
  });
}

module.exports = {
  WORD_HIGHLIGHTER,
  registerColors,
  colors,
  renderHtml,
  generateCss,
  wordHighlighterRender,
};
