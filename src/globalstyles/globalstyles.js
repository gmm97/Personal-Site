import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Comfortaa', sans-serif;
        background-color: #F8F8F8F8;
        
    }

    html {
        @media screen and (max-width: 560px) {
            font-size: 70%;
  }
    }
`;

export default GlobalStyle;
