import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 10px;
  line-height: 40px;

  &:hover {
    color: #e040fb;
  }
`;

const Navigation = () => (
  <nav>
    <List>
      <li>
        <StyledLink to="/">Frontpage</StyledLink>
      </li>
      <li>
        <StyledLink to="/list">Shopping lists</StyledLink>
      </li>
      <li>
        <StyledLink to="/add">Add shopping list</StyledLink>
      </li>
    </List>
  </nav>
);

export default Navigation;
