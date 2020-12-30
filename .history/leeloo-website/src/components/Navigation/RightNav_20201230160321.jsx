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
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
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

const RightNav = ({ open }) => {
  return (
    <NavigationList open={open}>
      <NavigationListItem>
        <Link to="/about">about</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/gallery">gallery</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">contact</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/articles">articles</Link>
      </NavigationListItem>
    </NavigationList>
  )
}

export default RightNav