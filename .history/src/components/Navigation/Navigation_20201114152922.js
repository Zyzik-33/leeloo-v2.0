import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Navigation = () => (
  <NavigationWrapper>
    <span>leeloo</span>
    <ul>
      <li>about</li>
      <li>gallery</li>
      <li>contact</li>
    </ul>
  </NavigationWrapper>
);

export default Navigation;