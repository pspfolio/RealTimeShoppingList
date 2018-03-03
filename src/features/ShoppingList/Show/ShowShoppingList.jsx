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
      shoplist: null,
      categories: null
    };

    this.ref = database.ref('shoppinglist');
    this.shoppingListRef = this.ref.child('/shoplist');
    this.itemsRef = this.ref.child('/items');
    this.categoriesRef = database.ref('categories');
  }

  componentDidMount() {
    const { match } = this.props;

    this.itemsRef.child(match.params.id).on('value', snap => {
      this.setState({
        items: snap.val()
      });
    });

    this.shoppingListRef.child(match.params.id).on('value', snap => {
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

  render() {
    const { shoplist, categories, items } = this.state;

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
                <AddShoplistPreview key={shopitem.name} items={shopitem.values} categoryName={shopitem.name} />
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
