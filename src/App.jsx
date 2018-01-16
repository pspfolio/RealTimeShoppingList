import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import ShopList from './features/Shoplist/Shoplist';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => (
  <Router>
    <FlexWrapper>
      <Route path="/" component={ShopList} />
    </FlexWrapper>
  </Router>
);

export default App;
