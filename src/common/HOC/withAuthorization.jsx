import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

const WithAuthorization = authCondition => ChildComponent => {
  class WrapperComponent extends Component {
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push('/login');
        }
      });
    }
    render() {
      return this.context.authUser ? <ChildComponent {...this.props} /> : null;
    }
  }

  WrapperComponent.contextTypes = {
    authUser: PropTypes.object
  };

  return withRouter(WrapperComponent);
};

export default WithAuthorization;
