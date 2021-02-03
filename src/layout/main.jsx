import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled, {css} from "styled-components";
import PropTypes from "prop-types";

import Header from "./header";
import Menu from "./menu";
import GlobalProvider from "../styles/GlobalProvider";

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;
const FooterStyle = styled.footer`
  margin-top: 2rem;
`;
const LinkStyle = styled(Link)`
  ${({ theme }) => css`
    text-decoration: underline;
    margin-top: 20px;
    padding: 1rem;
    color: ${theme.colors.rebeccapurple};
  `}
`;

const Layout = ({ children, disable = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <GlobalProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Menu />
      <Inner>
        <main>{children}</main>
        <FooterStyle>
          {!disable ? (
            <LinkStyle to="/">Go back to the homepage</LinkStyle>
          ) : null}
        </FooterStyle>
      </Inner>
    </GlobalProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
