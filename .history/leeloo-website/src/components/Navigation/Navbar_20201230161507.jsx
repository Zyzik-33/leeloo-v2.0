import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Burger from "./Burger"

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar
