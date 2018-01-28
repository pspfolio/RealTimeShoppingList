import React from 'react';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const ShoplistHeader = styled.h2`
  color: ${props => (props.isPlaceHolder ? '#8998AA' : '#393939')};
`;

const ShoplistItem = styled.p`
  color: #5e7785;
`;

const AddShoplistPreview = ({ title, items }) => (
  <FlexWrapper>
    <ShoplistHeader isPlaceHolder={!title}>{title || 'Title placeholder'}</ShoplistHeader>
    {items.map(item => (
      <ShoplistItem key={item.name}>
        {item.name} - {item.category.name}
      </ShoplistItem>
    ))}
  </FlexWrapper>
);

export default AddShoplistPreview;
