import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddShoplistForm from './AddShoplistForm';
import AddShoplistPreview from './AddShoplistPreview';
import withAuthorization from '../../common/HOC/withAuthorization';

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-left: 320px;
`;

class AddShoplist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      shoplistItems: {
        fruitsvegetables: [],
        bread: [],
        milkyogurts: [],
        meat: [],
        drinks: []
      }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onItemAdd = this.onItemAdd.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onItemAdd(item) {
    const { category: { value } } = item;
    this.setState(prevState => ({
      shoplistItems: {
        ...prevState.shoplistItems,
        [value]: [...prevState.shoplistItems[value], item.name]
      }
    }));
  }

  render() {
    const { title, items, shoplistItems } = this.state;
    return (
      <FlexWrapper>
        <AddShoplistForm title={title} onTitleChange={this.onTitleChange} onItemAdd={this.onItemAdd} />
        <AddShoplistPreview title={title} items={items} shoplistItems={shoplistItems} />
      </FlexWrapper>
    );
  }
}

AddShoplist.contextTypes = {
  authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AddShoplist);
