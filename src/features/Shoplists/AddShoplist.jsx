import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withAuthorization from '../../common/HOC/withAuthorization';

class AddShoplist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  render() {
    const { name } = this.state;
    return (
      <form>
        <label htmlFor="name">
          Shoppinglist name
          <input id="name" type="text" value={name} onChange={event => this.setState({ name: event.target.value })} />
        </label>
      </form>
    );
  }
}

AddShoplist.contextTypes = {
  authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AddShoplist);
