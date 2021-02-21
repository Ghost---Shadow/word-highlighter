const { colors } = require('./colors');

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

const astToTransformedLine = (ast) => {

};

const renderHtmlInner = (colorsInner, htmlText) => {
  const lines = htmlText.split('\n');
  const asts = lines.map(parseLine);
  const transformedLines = asts.map(astToTransformedLine);
  return transformedLines.join('\n');
};

const renderHtml = (block) => renderHtmlInner(colors, block);

module.exports = {
  renderHtmlInner,
  renderHtml,
  parseLine,
  astToTransformedLine,
};
