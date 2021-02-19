// https://material.io/resources/color
let colors = [
  '#ff8a80',
  '#e040fb',
  '#3d5afe',
  '#40c4ff',
  '#84ffff',
  '#00e676',
  '#b2ff59',
  '#ff6d00',
];

const registerColors = (newColors) => {
  colors = newColors;
};

module.exports = {
  colors,
  registerColors,
};
