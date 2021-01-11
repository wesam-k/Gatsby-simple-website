import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from "./header"
import Menu from "./menu"
import "./layout.css"


  const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const FooterStyle= styled.footer`
 margin-top: 2rem;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Menu/>
      <Wrapper>
        <main>{children}</main>
        <FooterStyle >
          © {new Date().getFullYear()}, Built with Wesam
          {` `}
        </FooterStyle>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
