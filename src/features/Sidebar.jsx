import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';
import SignOut from './Authentication/SignOut/SignOut';

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 280px;
  background-color: #000;
  padding: 15px;
`;

const Sidebar = () => (
  <SidebarWrapper>
    <Navigation />
    <SignOut />
  </SidebarWrapper>
);

export default Sidebar;
