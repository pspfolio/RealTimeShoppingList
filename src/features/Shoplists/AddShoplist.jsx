import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddShoplistForm from './AddShoplistForm';
import AddShoplistPreview from './AddShoplistPreview';
import withAuthorization from '../../common/HOC/withAuthorization';

class AddShoplist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      items: []
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onItemAdd = this.onItemAdd.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onItemAdd(item) {
    const { items } = this.state;
    this.setState({ items: [...items, item] });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <AddShoplistForm title={title} onTitleChange={this.onTitleChange} onItemAdd={this.onItemAdd} />
        <AddShoplistPreview />
      </div>
    );
  }
}

AddShoplist.contextTypes = {
  authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AddShoplist);
