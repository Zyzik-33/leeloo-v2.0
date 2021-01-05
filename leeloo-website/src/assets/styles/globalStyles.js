import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Work Sans';
    background-color: #f5f0eb;
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Work Sans';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
