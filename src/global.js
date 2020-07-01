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
    transition: all 0.25s linear;
}
#app {
    height: 100%;
    width: 100%;
}
button {
    padding: 10px;
    color: darkgreen;
    border-radius: 5px;
    border: 2px solid darkgreen;
    font-family: 'Courier Prime', monospace;
    cursor: pointer;
}
button:hover {
    color: #fff;
    background-color: darkgreen;
}
button:focus {
    outline: none;
}
`;
