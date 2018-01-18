import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log('loog');
  }

  render() {
    return <form onSubmit={this.onSubmit} />;
  }
}

export default SignUpForm;
