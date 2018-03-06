import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import map from 'lodash/map';
import { database } from '../../../firebase/index';
import AddShoplistPreview from '../Add/AddShoplistPreview';
import WithAuthorization from '../../../common/HOC/WithAuthorization';

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
      items: {},
      itemsInCart: {},
      shoplist: null,
      categories: null
    };

    this.ref = database.ref('shoppinglist');
    this.shoppingListByIdRef = this.ref.child('/shoplist').child(props.match.params.id);
    this.shoplistItemsByIdRef = this.ref.child('/items').child(props.match.params.id);
    this.shoplistItemsInCart = this.shoplistItemsByIdRef.child('inCart');
    this.categoriesRef = database.ref('categories');

    this.handleInCartClick = this.handleInCartClick.bind(this);
  }

  componentDidMount() {
    this.shoplistItemsByIdRef.on('value', snap => {
      this.setState({
        items: snap.val()
      });
    });

    this.shoplistItemsInCart.on('value', snap => {
      this.setState({
        itemsInCart: snap.val() || {}
      });
    });

    this.shoppingListByIdRef.on('value', snap => {
      this.setState({
        shoplist: snap.val()
      });
    });

    this.categoriesRef.once('value', snap => {
      this.setState({
        categories: snap.val()
      });
    });
  }

  handleInCartClick(id) {
    this.shoplistItemsInCart.child(id).set(this.state.itemsInCart[id] ? null : true);
  }

  render() {
    const { shoplist, categories, items, itemsInCart } = this.state;

    const categoriesWithValues = map(categories, (category, key) => ({
      name: category,
      values: items[key]
    }));

    return (
      <div>
        <h2>{shoplist}</h2>
        <ListWrapper>
          {categoriesWithValues.map(
            shopitem =>
              shopitem.values && (
                <AddShoplistPreview
                  key={shopitem.name}
                  items={shopitem.values}
                  categoryName={shopitem.name}
                  handleInCartClick={this.handleInCartClick}
                  inCart={itemsInCart || undefined}
                />
              )
          )}
        </ListWrapper>
      </div>
    );
  }
}

ShowShoppingList.contextTypes = {
  authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default WithAuthorization(authCondition)(ShowShoppingList);
