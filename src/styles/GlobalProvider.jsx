import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";

const GlobalProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
