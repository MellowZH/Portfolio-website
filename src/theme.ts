interface DefaultTheme {
  space: number[];
  fontSizes: number[];
  fontWeights: number[];
  width: number[];
  heights: number[];
  colors: {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
  };
}

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  // .... and other styles
};

const lightTheme: DefaultTheme = {
  ...theme,
  colors: {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
  },
};
const darkTheme: DefaultTheme = {
  ...theme,
  colors: {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
  },
};

export { DefaultTheme, lightTheme, darkTheme };
