import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShoplistItem from './ShowShoplistItem';
import { database } from '../../../firebase/index';
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
      items: [],
      shopitems: [{ id: 1, name: 'Maito', inCart: false }, { id: 2, name: 'Banaani', inCart: true }]
    };

    this.ref = database.ref('shoppinglist');
    this.itemsRef = this.ref.child('/items');
  }

  componentDidMount() {
    this.itemsRef.child('-L4R22GGsFzaoxX337OE').on('value', snap => {
      this.setState({
        items: snap.val()
      });
    });
  }

  render() {
    return (
      <div>
        <ListWrapper>
          <p>{this.state.items.length}</p>
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
