import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Burger from "./Burger"

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </LogoWrapper>
      <Burger />
    </Nav>
  )
}

export default Navbar
