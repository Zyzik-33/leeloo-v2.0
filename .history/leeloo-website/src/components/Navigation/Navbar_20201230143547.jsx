import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Burger from "./Burger"
import logo from "../../assets/logo.svg"

const LogoWrapper = styled.div`
  width: 100px;
  padding: 0;
  margin: 0;
`

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: flex-start;
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
