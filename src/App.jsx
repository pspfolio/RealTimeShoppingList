import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loadable from 'react-loadable';
import Loading from './common/Loading/Loading';
import Sidebar from './features/Sidebar';
import WithAuthentication from './common/HOC/WithAuthentication';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Lato';
`;

const AsyncAddShoplist = Loadable({
  loader: () => import('./features/ShoppingList/Add/AddShoplist'),
  loading: Loading
});

const AsyncShoplist = Loadable({
  loader: () => import('./features/ShoppingList/ShoppingList'),
  loading: Loading
});

const AsyncShoplists = Loadable({
  loader: () => import('./features/ShoppingList/List/Shoplists'),
  loading: Loading
});

const AsyncSignIn = Loadable({
  loader: () => import('./features/Authentication/SignIn/SignIn'),
  loading: Loading
});

const AsyncSignUp = Loadable({
  loader: () => import('./features/Authentication/SignUp/SignUp'),
  loading: Loading
});

const AsyncPasswordForget = Loadable({
  loader: () => import('./features/Authentication/PasswordForget/PasswordForget'),
  loading: Loading
});

const App = (props, { authUser }) => (
  <Router>
    <MuiThemeProvider>
      <FlexWrapper>
        {authUser && <Sidebar />}
        <Route exact path="/" component={AsyncShoplist} />
        <Route exact path="/list" component={AsyncShoplists} />
        <Route exact path="/Add" component={AsyncAddShoplist} />
        <Route exact path="/login" component={AsyncSignIn} />
        <Route exact path="/register" component={AsyncSignUp} />
        <Route exact path="/pw-forget" component={AsyncPasswordForget} />
      </FlexWrapper>
    </MuiThemeProvider>
  </Router>
);

App.contextTypes = {
  authUser: PropTypes.object
};

export default WithAuthentication(App);
