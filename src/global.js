import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
    box-sizing: border-box;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    height: 100vh;
    font-family: 'Courier Prime', monospace;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryText};
    transition: all 0.25s 0.3s linear;
}
#app {
    height: 100%;
    width: 100%;
}
`;
