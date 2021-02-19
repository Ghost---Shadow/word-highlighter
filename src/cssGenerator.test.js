const { generateCssInner } = require('./cssGenerator');

describe('cssGenerator', () => {
  describe('generateCssInner', () => {
    it('should render correctly', () => {
      const colors = ['#ff0000', '#00ff00', '#0000ff'];
      const actual = generateCssInner(colors);
      expect(actual).toMatchInlineSnapshot(
        '"[\\"#ff0000\\",\\"#00ff00\\",\\"#0000ff\\"]"',
      );
    });
  });
});
