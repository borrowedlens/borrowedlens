import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled, { css } from 'styled-components';

import { GlobalStyle } from './global';
import { lightTheme, darkTheme } from './theme';
import sun from './sun.png';
import moon from './moon.png';

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
    border: 2px solid ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.background};
    transition: all 0.25s linear;
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
    background-color: ${(props) => props.theme.primaryColor};
    transform: translateX(0);
    transition: transform 0.25s linear;
    ${(props) =>
        props.themeState === 'dark' &&
        css`
            transform: translateX(23px);
        `}
`;

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
            <Header>
                <h1>my personal site</h1>
                <ToggleDiv onClick={toggleTheme}>
                    <ImageSun src={sun} alt='' />
                    <ImageMoon src={moon} alt='' />
                    <ToggleThumb themeState={theme} />
                </ToggleDiv>
            </Header>
        </ThemeProvider>
    );
}

export default App;
