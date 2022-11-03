import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background-color: #14213d;
    overflow-y: hidden;
    overflow-X: hidden;
  }
  h2, h4{
        text-align: center;
    }
  *{
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 3px;
    color: #ffffff;
  }
`