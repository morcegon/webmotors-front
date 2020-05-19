import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: #f4f4f4;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding-top: 2rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
