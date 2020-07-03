import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagramSquare,
    faFacebookSquare,
    faGithubSquare,
    faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

import { GlobalStyle } from './global';
import { lightTheme, darkTheme } from './theme';
import sun from './assets/sun.png';
import moon from './assets/moon.png';
import backgrounds from './images';

const Nav = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: ${(props) => props.theme.background};
    ${(props) =>
        props.navView
            ? css`
                  transform: translateY(0);
              `
            : css`
                  transform: translateY(-65px);
              `};
    border-bottom: 3px solid #5ba0ff;
    transition: all 0.25s linear;
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
    border: 3px solid #5ba0ff;
    background-color: ${(props) => props.theme.contrastBg};
    transition: all 0.25s linear;
`;
const ImageSun = styled.img`
    position: absolute;
    height: 16px;
    width: 16px;
    left: 2px;
    top: 1px;
`;
const ImageMoon = styled.img`
    position: absolute;
    height: 16px;
    width: 16px;
    right: 2px;
    top: 1px;
`;
const ToggleThumb = styled.div`
    height: 24px;
    width: 24px;
    position: absolute;
    left: -3px;
    top: -3px;
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
const PrimaryText = styled.div`
    color: ${(props) => props.theme.primaryText};
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.4s linear;
    ${(props) =>
        props.textView &&
        css`
            opacity: 1;
            transform: translateY(0);
        `};
`;
const ContainerDiv = styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`;
const SecondaryText = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`;
const IconContainers = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
`;
const IconContainer = styled.div`
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.4s ease-in ${(props) => props.delay};
    ${(props) =>
        props.iconsview &&
        css`
            transform: translateY(0);
            opacity: 1;
        `}
`;
const BrandIcon = styled(FontAwesomeIcon)`
    height: 45px;
    font-size: 45px;
    color: #5ba0ff;
    &:hover {
        color: #9fc8ff;
    }
`;
const BigText = styled.div`
    display: ${(props) => props.alignment};
    font-size: ${(props) => props.fsize};
    font-weight: 700;
`;
const ImageDiv = styled.div.attrs((props) => ({
    style: {
        clipPath: `circle(${props.clip} at center)`,
    },
}))`
    height: 80%;
    width: 330px;
    background-image: url(${(props) => backgrounds[props.imageIndex]});
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.25s linear;
    border: 5px solid ${(props) => props.theme.contrastBg};
`;

function App() {
    const [theme, setTheme] = useState('light');
    const [navView, setNavView] = useState(true);
    const [imageIndex, setImageIndex] = useState(true);
    const [clipState, setClipState] = useState('0px');
    const [primaryTextView, setPrimaryTextView] = useState(false);
    const [iconsView, setIconsView] = useState(false);
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        let randomIndex = Math.floor(Math.random() * (6 - 1) + 1);
        setTimeout(() => {
            setPrimaryTextView(true);
        }, 250);
        setImageIndex(randomIndex);
        let iconContainerRect = document.getElementById('icons');
        const handleScroll = () => {
            let currentScrollPos = window.scrollY;
            setClipState(`${currentScrollPos * 3}px`);
            if (currentScrollPos > prevScrollPos + 10) {
                setNavView(false);
            } else {
                setNavView(true);
            }
            prevScrollPos = currentScrollPos - 10;
            if (
                iconContainerRect.getBoundingClientRect().bottom <=
                    (window.innerHeight ||
                document.documentElement.clientHeight) - 40
            ) {
                setIconsView(true);
            }
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
            <ContainerDiv>
                <PrimaryText textView={primaryTextView}>
                    <span>
                        <BigText fsize='32px'>Hi,</BigText> my name is Vivek,
                        and this is my &nbsp;
                        <BigText
                            fsize='32px'
                            alignment='inline'
                            style={{ borderBottom: '3px solid #5ba0ff' }}>
                            page
                        </BigText>
                    </span>
                </PrimaryText>
                <ImageDiv clip={clipState} imageIndex={imageIndex} />
            </ContainerDiv>
            <SecondaryText>
                <IconContainers id='icons'>
                    <IconContainer iconsview={iconsView} delay='0s'>
                        <BrandIcon icon={faGithubSquare} />
                    </IconContainer>
                    <IconContainer iconsview={iconsView} delay='0.25s'>
                        <BrandIcon icon={faFacebookSquare} />
                    </IconContainer>
                    <IconContainer iconsview={iconsView} delay='0.5s'>
                        <BrandIcon icon={faInstagramSquare} />
                    </IconContainer>
                    <IconContainer iconsview={iconsView} delay='0.75s'>
                        <BrandIcon icon={faTwitterSquare} />
                    </IconContainer>
                </IconContainers>
            </SecondaryText>
        </ThemeProvider>
    );
}

export default App;
