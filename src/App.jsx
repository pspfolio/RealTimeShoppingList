import React from 'react';
import styled from 'styled-components';
import ShopList from './features/Shoplist/Shoplist';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => (
  <FlexWrapper>
    <ShopList />
  </FlexWrapper>
);

export default App;
