import { createGlobalStyle } from 'styled-components';

import CourierPrime from './assets/fonts/CourierPrime-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Courier Prime";
    src: url(${CourierPrime}) format('truetype');
    font-weight: 400;
    font-style: normal;
}
*,
*:before,
*:after {
    box-sizing: border-box;
}
body {
    margin: 0px;
    padding: 0px;
    height: 100vh;
    font-family: 'Courier Prime', monospace;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryText};
    transition: all 0.25s linear;
}
#app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({theme}) => theme.contrastBg} 
}
`;
