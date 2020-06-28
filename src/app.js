import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { lightTheme, darkTheme } from './theme';

function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else if (theme === 'dark') {
            setTheme('light');
        }
    };
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <button onClick={toggleTheme}>toggle theme</button>
            <h1>it's a {theme} theme</h1>
        </ThemeProvider>
    );
}

export default App;
