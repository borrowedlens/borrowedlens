import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled, { css } from 'styled-components';

import { GlobalStyle } from './global';
import { lightTheme, darkTheme } from './theme';
import sun from './assets/sun.png';
import moon from './assets/moon.png';

const Nav = styled.nav`
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transition: transform 0.25s linear;
    ${(props) =>
        props.navView
            ? css`
                  transform: translateY(0);
              `
            : css`
                  transform: translateY(-65px);
              `};
    border-bottom: 2px solid #5ba0ff;
`;

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
const SampleDiv = styled.div`
    height: 100vh;
`;

function App() {
    const [theme, setTheme] = useState('light');
    const [navView, setNavView] = useState(true);
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const handleScroll = () => {
            let currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                setNavView(false);
            } else {
                setNavView(true);
            }
            prevScrollPos = currentScrollPos;
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
            <Nav navView={navView}>
                <Header>
                    <h1>borrowed lens</h1>
                    <ToggleDiv onClick={toggleTheme}>
                        <ImageSun src={sun} alt='' />
                        <ImageMoon src={moon} alt='' />
                        <ToggleThumb themeState={theme} />
                    </ToggleDiv>
                </Header>
            </Nav>
            <SampleDiv />
            <SampleDiv />
            <SampleDiv />
        </ThemeProvider>
    );
}

export default App;
