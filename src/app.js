import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled, { css } from 'styled-components';

import { GlobalStyle } from './global';
import { lightTheme, darkTheme } from './theme';
import sun from './sun.png';
import moon from './moon.png';

const Nav = styled.nav`
    border-bottom: 1px solid #5ba0ff;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    width: 100%;
    padding: 10px 50px;
`;
const ToggleDiv = styled.div`
    height: 24px;
    width: 50px;
    position: relative;
    border-radius: 30px;
    border: 2px solid #5ba0ff;
    background-color: ${(props) => props.theme.contrastBg};
    transition: all 0.25s linear;
`;
const ImageSun = styled.img`
    position: absolute;
    height: 16px;
    width: 16px;
    left: 4px;
    top: 2px;
`;
const ImageMoon = styled.img`
    position: absolute;
    height: 16px;
    width: 16px;
    right: 4px;
    top: 2px;
`;
const ToggleThumb = styled.div`
    height: 24px;
    width: 24px;
    position: absolute;
    left: -2px;
    top: -2px;
    border-radius: 50%;
    background-color: #e2e2e2;
    transform: translateX(0);
    transition: transform 0.25s linear;
    border: 1px solid #5ba0ff;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 2px 2px #5ba0ff;
    }
    ${(props) =>
        props.themeState === 'dark' &&
        css`
            transform: translateX(25px);
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
            <Nav>
                <Header>
                    <h1>borrowed lens</h1>
                    <ToggleDiv onClick={toggleTheme}>
                        <ImageSun src={sun} alt='' />
                        <ImageMoon src={moon} alt='' />
                        <ToggleThumb themeState={theme} />
                    </ToggleDiv>
                </Header>
            </Nav>
        </ThemeProvider>
    );
}

export default App;
