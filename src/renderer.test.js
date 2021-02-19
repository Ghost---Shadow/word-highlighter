const { renderHtmlInner } = require('./renderer');

describe('renderer', () => {
  describe('renderHtmlInner', () => {
    it('should render correctly', () => {
      const code = '$1{Hello} $2{World}';
      const actual = renderHtmlInner(code);
      expect(actual).toMatchInlineSnapshot('"$1{Hello} $2{World}"');
    });
  });
});
