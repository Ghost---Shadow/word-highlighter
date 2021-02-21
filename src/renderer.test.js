const {
  renderHtmlInner,
  parseLine,
} = require('./renderer');

describe('renderer', () => {
  // describe('renderHtmlInner', () => {
  //   it('should render correctly', () => {
  //     const code = '#1{Hello} #2{World}';
  //     const actual = renderHtmlInner([], code);
  //     expect(actual).toMatchInlineSnapshot('"#1{HELLO} #2{WORLD}"');
  //   });
  // });
  describe('parseLine', () => {
    it('happy path', () => {
      const line = 'Text 0 #1{Text 1} Text 2 #2{Text 3} Text 4';
      const parsed = parseLine(line);
      const expected = [
        {
          type: 'T',
          value: 'Text 0 ',
        },
        {
          type: 'B',
          number: '1',
          value: 'Text 1',
        },
        {
          type: 'T',
          value: ' Text 2 ',
        },
        {
          type: 'B',
          number: '2',
          value: 'Text 3',
        },
        {
          type: 'T',
          value: ' Text 4',
        },
      ];
      expect(parsed).toEqual(expected);
    });
  });
});
