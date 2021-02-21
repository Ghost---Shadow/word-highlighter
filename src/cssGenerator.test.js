const { generateCssInner } = require('./cssGenerator');

describe('cssGenerator', () => {
  describe('generateCssInner', () => {
    it('should render correctly', () => {
      const colors = ['#ff0000', '#00ff00', '#0000ff'];
      const actual = generateCssInner(colors);
      expect(actual).toMatchInlineSnapshot(`
        "
          <style>
          
          .word-highlighter-1 {
            color: #ff0000
          }
          

          .word-highlighter-2 {
            color: #00ff00
          }
          

          .word-highlighter-3 {
            color: #0000ff
          }
          
          </style>
          "
      `);
    });
  });
});
