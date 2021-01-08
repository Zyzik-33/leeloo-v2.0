import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    z-index: 2;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`

const NavigationListItem = styled.li`
  font-weight: 400;
  margin-left: 32px;
  font-size: 16px;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Work Sans";
`

const RightNav = ({ open }) => {
  return (
    <NavigationWrapper>
      <NavigationList open={open}>
        <NavigationListItem>
          <Link to="/about">About</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/gallery">Gallery</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/articles">Articles</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/contact">Contact</Link>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default RightNav
