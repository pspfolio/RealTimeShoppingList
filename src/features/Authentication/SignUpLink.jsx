import React from 'react';
import { Link } from 'react-router-dom';

const SignUpLink = () => (
  <p>
    Dont have an account? <Link to={'/register'}>Sign up</Link>
  </p>
);

export default SignUpLink;
