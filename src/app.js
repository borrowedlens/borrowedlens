import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { GlobalStyle } from './global';
import { lightTheme, darkTheme } from './theme';
import sun from './sun.png';
import moon from './moon.png';

function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else if (theme === 'dark') {
            setTheme('light');
        }
    };
    const Header = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        width: 100%;
        padding: 10px 50px;
    `;
    const ToggleDiv = styled.div`
        height: 27px;
        width: 50px;
        position: relative;
        border-radius: 30px;
        border: 2px solid ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.contrastBg};
    `;
    const ImageSun = styled.img`
        position: absolute;
        height: 16px;
        width: 16px;
        left: 3px;
        top: 3px;
    `;
    const ImageMoon = styled.img`
        position: absolute;
        height: 16px;
        width: 16px;
        right: 3px;
        top: 3px;
    `;
    const ToggleThumb = styled.div`
        height: 27px;
        width: 27px;
        position: absolute;
        left: -2px;
        top: -2px;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.background};
        transform: ${theme === 'light' ? 'translateX(0)' : 'translateX(20px)' };
        transition: all 0.5s ease-in-out;
    `;
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header>
                <h1>my personal site</h1>
                <ToggleDiv onClick={toggleTheme}>
                    <ImageSun src={sun} alt='' />
                    <ImageMoon src={moon} alt='' />
                    <ToggleThumb />
                </ToggleDiv>
            </Header>
            <button>toggle theme</button>
            <h1>it's a {theme} theme</h1>
        </ThemeProvider>
    );
}

export default App;
