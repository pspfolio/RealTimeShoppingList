import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const AsyncShoplists = Loadable({
  loader: () => import('./features/ShoppingList/List/Shoplists'),
  loading: Loading
});

const AsyncShowShoppingList = Loadable({
  loader: () => import('./features/ShoppingList/Show/ShowShoppingList'),
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
        <Switch>
          <Route exact path="/" component={AsyncShoplists} />
          <Route path="/add" component={AsyncAddShoplist} />
          <Route path="/login" component={AsyncSignIn} />
          <Route path="/register" component={AsyncSignUp} />
          <Route path="/pw-forget" component={AsyncPasswordForget} />
          <Route path="/item/:id" component={AsyncShowShoppingList} />
        </Switch>
      </FlexWrapper>
    </MuiThemeProvider>
  </Router>
);

App.contextTypes = {
  authUser: PropTypes.object
};

export default WithAuthentication(App);
