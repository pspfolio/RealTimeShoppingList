import React from 'react';
import styled from 'styled-components';

const ShoplistItem = styled.p`
  color: #5e7785;
`;

const AddShoplistPreview = ({ items, emoji, categoryName }) => (
  <div>
    <h3>
      {`${categoryName} `}
      {emoji}
    </h3>
    {items.map(item => <ShoplistItem key={item}>{item}</ShoplistItem>)}
  </div>
);

export default AddShoplistPreview;