/* eslint-disable */
import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import styled from "styled-components"

// eslint-disable-next-line
// interface HeaderProps {
//   siteTitle: string  // here not any should sting but in the layout return object not find a solution!
// }

const HeaderStyle = styled.header`
  background-color: #333;
  margin-bottom: 0;
`
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`
const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (  
  <HeaderStyle>
    <Wrapper>
      <Title>
        <LinkStyle to="/">{siteTitle}</LinkStyle>
      </Title>
    </Wrapper>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
