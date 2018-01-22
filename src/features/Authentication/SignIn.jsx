import React from 'react';
import { withRouter } from 'react-router-dom';
import SignInForm from './SignInForm';
import SignUpLink from './SignUpLink';
import PasswordForgetLink from './PasswordForgetLink';

const SignIn = ({ history }) => (
  <div>
    <h1>Sign in</h1>
    <SignInForm history={history} />
    <SignUpLink />
    <PasswordForgetLink />
  </div>
);

export default withRouter(SignIn);
