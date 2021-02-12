import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderStyle = styled.header`
    background-color: rebeccapurple;
    margin-bottom: 0;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Title = styled.h1`
  margin: 0;
`;
const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
`;
const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <Wrapper>
      <Title>
        <LinkStyle to="/">{siteTitle}</LinkStyle>
      </Title>
    </Wrapper>
  </HeaderStyle>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
