import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root {
        position: relative;
        min-height: 100vh;
    }

    html {
       box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
        letter-spacing: 0.05rem;
        overflow-y: auto;
        position: relative;
        width: 100%;
        height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    a {
        color: black;
        text-decoration: none;
    }
`;
