import React, { Component } from 'react';
import { auth } from '../../firebase';

const InitialState = {
  email: '',
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...InitialState };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...InitialState }));
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={event => this.setState({ email: event.target.value })}
          type="text"
          placeholder="Email address"
        />

        <button disabled={isInvalid} type="submit">
          Reset my password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default PasswordForgetForm;
