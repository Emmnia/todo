import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    body {
        padding: 50px 0 0 0;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        transition: background-color .2s;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.429;
        color: black;
    }

    .container {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`