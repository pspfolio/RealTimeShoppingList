import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';

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
  </SidebarWrapper>
);

export default Sidebar;
