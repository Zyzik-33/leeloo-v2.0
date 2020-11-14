import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg'

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Work Sans';
`;

const Navigation = () => (
  <NavigationWrapper>
    <span>leeloo</span>
    {logo}
    <ul>
      <li>about</li>
      <li>gallery</li>
      <li>contact</li>
    </ul>
  </NavigationWrapper>
);

export default Navigation;