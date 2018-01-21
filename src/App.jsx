import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Shoplist from './features/Shoplists/Shoplist';
import Shoplists from './features/Shoplists/Shoplists';
import SignIn from './features/Authentication/SignIn';
import SignUp from './features/Authentication/SignUp';
import SignOut from './features/Authentication/SignOut';
import PasswordForget from './features/Authentication/PasswordForget';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => (
  <Router>
    <FlexWrapper>
      <SignOut />
      <Route exact path="/" component={Shoplist} />
      <Route exact path="/list" component={Shoplists} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/pw-forget" component={PasswordForget} />
    </FlexWrapper>
  </Router>
);

export default App;
