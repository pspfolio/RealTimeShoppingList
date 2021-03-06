import React, { Component } from 'react';
import { authentication } from '../../../firebase';

const InitialState = {
  username: '',
  password: '',
  email: '',
  confirmPassword: '',
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = InitialState;

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(event) {
    const { email, password } = this.state;
    const { history } = this.props;
    authentication
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...InitialState });
        history.push('/');
      })
      .catch(error => this.setState({ error }));

    event.preventDefault();
  }

  onInputChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { username, email, password, confirmPassword, error } = this.state;

    const isInvalid = password !== confirmPassword || password === '' || email === '' || username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.onInputChange('username', event.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={email}
          onChange={event => this.onInputChange('email', event.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          onChange={event => this.onInputChange('password', event.target.value)}
          type="password"
          placeholder="password"
        />
        <input
          value={confirmPassword}
          onChange={event => this.onInputChange('confirmPassword', event.target.value)}
          type="password"
          placeholder="confirm password"
        />
        <button disable={isInvalid} type="submit">
          Sign up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default SignUpForm;
