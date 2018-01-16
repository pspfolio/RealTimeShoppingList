import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Shoplist from './features/Shoplists/Shoplist';
import Shoplists from './features/Shoplists/Shoplists';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => (
  <Router>
    <FlexWrapper>
      <Route exact path="/" component={Shoplist} />
      <Route path="/list" component={Shoplists} />
    </FlexWrapper>
  </Router>
);

export default App;
