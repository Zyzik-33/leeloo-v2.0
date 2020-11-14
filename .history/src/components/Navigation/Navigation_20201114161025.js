import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg'

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Work Sans';
`;

const LogoWrapper = styled.div`
  width: 100px;
`;

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 400;
`;

const Navigation = () => (
  <NavigationWrapper>
    <LogoWrapper>
      <img src={logo} alt='logo'/>
    </LogoWrapper>
    <NavigationList>
      <NavigationListItem>about</NavigationListItem>
      <NavigationListItem>gallery</NavigationListItem>
      <NavigationListItem>contact</NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;