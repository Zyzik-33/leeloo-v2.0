import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../../assets/logo.svg'

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Work Sans';
`;

const LogoWrapper = styled.div`
  width: 100px;
  margin-right: 10px;
`;


const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 400;
  margin-left: 32px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Navigation = () => (
  <NavigationWrapper>
    <LogoWrapper>
      <img src={logo} alt='logo'/>
    </LogoWrapper>
    <NavigationList>
      <NavigationListItem>
        <Link to='/about'>about</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to='/gallery'>gallery</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to='/contact'>contact</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;