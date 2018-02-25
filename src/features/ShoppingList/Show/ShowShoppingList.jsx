import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShoplistItem from './ShowShoplistItem';
import withAuthorization from '../../../common/HOC/withAuthorization';

const ListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

class ShowShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopitems: [{ id: 1, name: 'Maito', inCart: false }, { id: 2, name: 'Banaani', inCart: true }]
    };
  }

  render() {
    return (
      <div>
        <ListWrapper>
          {this.state.shopitems.map(shopitem => (
            <ShoplistItem key={shopitem.id} name={shopitem.name} inCart={shopitem.inCart} />
          ))}
        </ListWrapper>
      </div>
    );
  }
}

ShowShoppingList.contextTypes = {
  authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ShowShoppingList);
