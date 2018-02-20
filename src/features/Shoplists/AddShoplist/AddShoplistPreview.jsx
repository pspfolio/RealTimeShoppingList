import React from 'react';
import styled from 'styled-components';

const ShoplistPreviewItem = styled.p`
  color: #5e7785;
`;

const AddShoplistPreview = ({ items = [], categoryName }) => (
  <div>
    <h3>{`${categoryName}`}</h3>
    {items.map(item => (
      <ShoplistPreviewItem className="preview-shoplist-item" key={item}>
        {item}
      </ShoplistPreviewItem>
    ))}
  </div>
);

export default AddShoplistPreview;
