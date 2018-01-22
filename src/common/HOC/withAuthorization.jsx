import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { firebase } from '../../firebase';

const withAuthorization = authCondition => ChildComponent => {
  class WithAuthorization extends Component {
    componentDidMount() {
      firebase.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push('/login');
        }
      });
    }
    render() {
      return this.context.authUser ? <ChildComponent /> : null;
    }
  }

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object
  };

  return withRouter(WithAuthorization);
};

export default withAuthorization;
