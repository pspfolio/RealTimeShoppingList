import React from 'react';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  flex: 1;
`;

const AddShoplistPreview = ({ title, items }) => (
  <FlexWrapper>
    <h2>{title}</h2>
    {items.map(item => (
      <p>
        {item.name} - {item.category.name}
      </p>
    ))}
  </FlexWrapper>
);

export default AddShoplistPreview;
