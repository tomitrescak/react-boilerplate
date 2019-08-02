export let defaultTheme = {
  paneBackground: '#1F212B',

  bittersweet: '#FF6565',
  black: '#000000',
  carrotOrange: '#F49B22',
  dimGrey: '#707070',
  forestGreen: '#16B220',
  matterhorn: '#4D4D4D',
  sweetCorn: '#FDE26D',
  turquoise: '#2EFFD0',
  white: '#FFFFFF',
  darkTurquoise: '',
  darkBittersweet: ''
};

defaultTheme.darkTurquoise = `rgba(${defaultTheme.turquoise}, 0.4)`;
defaultTheme.darkBittersweet = `rgba(${defaultTheme.bittersweet}, 0.4)`;
