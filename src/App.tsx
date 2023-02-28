import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Page from './components/Page/Page';
import { GlobalStyles } from './globalStyles';
import { darkTheme, lightTheme } from './theme';
import Text from './components/Text/Text.styled';
import FlexBox from './components/Box/FlexBox.styled';

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    setTheme(event.matches ? 'dark' : 'light');
  });

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="App">
        <Page>
          <FlexBox minHeight="100vh" justifyContent="center" alignItems="center">
            <Text>Comming soon...</Text>
          </FlexBox>
        </Page>
      </div>
    </ThemeProvider>
  );
}

export default App;
