const { colors } = require('./colors');
const { WORD_HIGHLIGHTER } = require('./constants');

/*
Grammar
# -> #
{ -> {
} -> }
D -> \d+
T -> .+

B -> #D{T}
S -> SBS | T | epsilon
*/

const parseLine = (line) => {
  const blockRegex = /([^#]*)#(\d+){([^}]+)}([^#]*)/;
  let result = [];

  let remainingLine = line;

  while (remainingLine.length) {
    const searchResult = remainingLine.match(blockRegex);
    if (searchResult === null) {
      // No more matches
      result = result.concat([
        { type: 'T', value: remainingLine },
      ]);
      break;
    }
    const [subLine, left, number, value, right] = searchResult;
    remainingLine = remainingLine.slice(subLine.length);
    result = result.concat([
      { type: 'T', value: left },
      { type: 'B', number, value },
      { type: 'T', value: right },
    ]);
  }
  // Drop all empty Ts
  result = result.filter((node) => !(node.type === 'T' && node.value === ''));
  return result;
};

const transformLine = (maxColors) => (parsedLine) => {
  const fixNumber = (n) => ((n - 1) % maxColors) + 1;
  const transformT = (node) => `${node.value}`;
  const transformB = (node) => `<span class="${WORD_HIGHLIGHTER}-${fixNumber(node.number)}">${node.value}</span>`;
  const transformNode = (node) => {
    const transformer = {
      T: transformT,
      B: transformB,
    }[node.type];
    return transformer(node);
  };
  const transformedNodes = parsedLine.map(transformNode);
  return transformedNodes.join('');
};

const renderHtmlInner = (colorsInner, htmlText) => {
  const maxColors = colorsInner.length;
  const lines = htmlText.split('\n');
  const parsedLines = lines.map(parseLine);
  const transformedLines = parsedLines.map(transformLine(maxColors));
  return transformedLines.join('\n');
};

const renderHtml = (block) => renderHtmlInner(colors, block);

module.exports = {
  renderHtmlInner,
  renderHtml,
  parseLine,
  transformLine,
};
