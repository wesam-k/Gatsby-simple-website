import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #F4F4F4;
    padding-top: 10px;
`;
const MenuStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding-left:60px;
`;
const LinkStyle = styled(Link)`
  color: #333;
  text-decoration: none;
`;


const Menu = () => (
  <Wrapper>
    <MenuStyle>
      <li>
        <LinkStyle to="/">Home</LinkStyle>
      </li>
      <li>
        <LinkStyle to="/services">Services</LinkStyle>
      </li>
      <li>
        <LinkStyle to="/recipes/">Recipes</LinkStyle>
      </li>
      <li>
        <LinkStyle to="/about">About</LinkStyle>
      </li>
    </MenuStyle>
  </Wrapper>
);

export default Menu;
