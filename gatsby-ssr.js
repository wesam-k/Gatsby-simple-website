import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/styles/theme"

const GlobalStyles = createGlobalStyle`
 *{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
 }
 body, html{
     font-family:${props=>props.theme.fonts.main};
     height: 100%;
     background-color: ${props=>props.theme.colors.white};
 }
`
export const WrapRootElement = ({ children }) => {
  return (
    <ThemeProvider Theme={Theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
