// https://material-ui.com/customization/color/
let colors = [
  '#f44336',
  '#ffc107',
  '#9c27b0',
  '#ff5722',

  '#3f51b5',
  '#e91e63',
  '#03a9f4',
  '#673ab7',

  '#009688',
  '#2196f3',
  '#8bc34a',
  '#00bcd4',

  '#ffeb3b',
  '#4caf50',
  '#ff9800',
  '#cddc39',
];

const registerColors = (newColors) => {
  colors = newColors;
};

module.exports = {
  colors,
  registerColors,
};
