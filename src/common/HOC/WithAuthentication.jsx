import React, { Component } from 'react';
import { firebase } from '../../firebase';

const withAuthentication = InnerComponent => {
  class WithAuthentication extends Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    getChildContext() {
      return {
        authUser: this.state.authUser
      };
    }

    componentDidMount() {
      firebase.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState(() => ({ authUser }));
        } else {
          this.setState(() => ({ authUser: null }));
        }
      });
    }

    render() {
      return <InnerComponent />;
    }
  }

  return WithAuthentication;
};

export default withAuthentication;
