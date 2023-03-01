interface DefaultTheme {
  space: number[];
  fontSizes: number[];
  fontWeights: number[];
  width: number[];
  heights: number[];
  colors: {
    text: string;
    background: string;
  };
}

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
};

const lightTheme: DefaultTheme = {
  ...theme,
  colors: {
    text: '#282c34',
    background: '#FFF',
  },
};
const darkTheme: DefaultTheme = {
  ...theme,
  colors: {
    text: '#FFF',
    background: '#282c34',
  },
};

export { DefaultTheme, lightTheme, darkTheme };
