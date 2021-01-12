import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding-top: 10px;
`

const MenuStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`

const Menu = () => (
  <Wrapper>
    <MenuStyle>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
    </MenuStyle>
  </Wrapper>
)

export default Menu
