import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 1em 0;
  border-top: 2px solid #f0edf0;
`;

const ShoplistItem = ({ name, inCart }) => <ListItem className={inCart ? 'inCart' : ''}>{name}</ListItem>;

export default ShoplistItem;
