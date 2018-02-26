import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../../firebase';

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
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState(() => ({ authUser }));
        } else {
          this.setState(() => ({ authUser: null }));
        }
      });
    }

    render() {
      return <InnerComponent {...this.props} />;
    }
  }

  WithAuthentication.childContextTypes = {
    authUser: PropTypes.object
  };

  return WithAuthentication;
};

export default withAuthentication;
