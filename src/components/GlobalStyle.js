import {createGlobalStyle} from "styled-components"

const GlobalStyle= createGlobalStyle`
  button {
    border: 1px solid black;
    border-radius: 20px;
    color: white;
    width: 100px;
    height: 30px;
    background: rgb(14, 23, 44);
    cursor: pointer;
  }
`

export default GlobalStyle;