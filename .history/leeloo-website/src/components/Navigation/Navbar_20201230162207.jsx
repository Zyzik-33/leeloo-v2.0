import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Burger from "./Burger"
import logo from "../../assets/logo.svg"

const LogoWrapper = styled.div`
  width: 100px;
  margin-right: 2rem;
  padding-bottom: -1rem;
`

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  position: absolute;
  top: 20px;
  left: 30px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
