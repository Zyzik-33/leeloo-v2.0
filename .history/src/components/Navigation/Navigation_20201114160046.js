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

const Navigation = () => (
  <NavigationWrapper>
    <LogoWrapper>
      <img src={logo} alt='logo'/>
    </LogoWrapper>
    <ul>
      <li>about</li>
      <li>gallery</li>
      <li>contact</li>
    </ul>
  </NavigationWrapper>
);

export default Navigation;