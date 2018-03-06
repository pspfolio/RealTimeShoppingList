import React from 'react';
import styled from 'styled-components';

const ShoplistPreviewItem = styled.p`
  color: #5e7785;

  &.inbasket {
    text-decoration: line-through;
  }
`;

const AddShoplistPreview = ({ items = [], categoryName, handleInCartClick, inCart = {} }) => (
  <div>
    <h3>{`${categoryName}`}</h3>
    {items.map(item => (
      <ShoplistPreviewItem
        onClick={() => handleInCartClick(item.id)}
        className={`preview-shoplist-item ${inCart[item.id] ? 'inbasket' : ''}`}
        key={item.id}
      >
        {item.name}
      </ShoplistPreviewItem>
    ))}
  </div>
);

export default AddShoplistPreview;
