import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Shoplist from './features/Shoplists/Shoplist';
import Shoplists from './features/Shoplists/Shoplists';
import AddShoplist from './features/Shoplists/AddShoplist';
import SignIn from './features/Authentication/SignIn/SignIn';
import SignUp from './features/Authentication/SignUp/SignUp';
import PasswordForget from './features/Authentication/PasswordForget/PasswordForget';
import Sidebar from './features/Sidebar';
import WithAuthentication from './common/HOC/WithAuthentication';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Lato';
`;

const App = (props, { authUser }) => (
  <Router>
    <FlexWrapper>
      {authUser && <Sidebar />}
      <Route exact path="/" component={Shoplist} />
      <Route exact path="/list" component={Shoplists} />
      <Route exact path="/Add" component={AddShoplist} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/pw-forget" component={PasswordForget} />
    </FlexWrapper>
  </Router>
);

App.contextTypes = {
  authUser: PropTypes.object
};

export default WithAuthentication(App);
