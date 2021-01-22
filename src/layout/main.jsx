import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

import Header from "./header";
import Menu from "./menu";
import GlobalProvider from "../styles/GlobalProvider"


const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;
const FooterStyle = styled.footer`
  margin-top: 2rem;
`;
const LinkStyle = styled(Link)`
  text-decoration: underline;
  margin-top: 20px;
`;
const Layout = ({ children }) => {
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
      <Wrapper>
        <main>{children}</main>
        <LinkStyle to="/">Go back to the homepage</LinkStyle>
        <FooterStyle>
          © {new Date().getFullYear()}, Built with Wesam
          {` `}
        </FooterStyle>
      </Wrapper>
    </GlobalProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
