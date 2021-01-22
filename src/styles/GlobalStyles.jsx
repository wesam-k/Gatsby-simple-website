import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyles = createGlobalStyle`
${reset}
*, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
  }

  `;

export default GlobalStyles;
