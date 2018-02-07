import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { database } from '../../../firebase/index';
import AddShoplistForm from './AddShoplistForm';
import AddShoplistPreview from './AddShoplistPreview';
import withAuthorization from '../../../common/HOC/withAuthorization';

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-left: 320px;
`;

const ShoplistPreviewWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const ShoplistHeader = styled.h2`
  color: ${props => (props.isPlaceHolder ? '#8998AA' : '#393939')};
`;

const initState = {
  title: '',
  shoplistItems: {
    fruitsvegetables: [],
    bread: [],
    milkyogurts: [],
    meat: [],
    drinks: []
  }
};

class AddShoplist extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initState };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onItemAdd = this.onItemAdd.bind(this);
    this.handleShoplistSave = this.handleShoplistSave.bind(this);

    this.ref = database.ref('shoppinglist');
    this.shoppingListRef = this.ref.child('/shoplist');
    this.itemsRef = this.ref.child('/items');
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

  handleShoplistSave(event) {
    event.preventDefault();

    const { title, shoplistItems } = this.state;
    const addeditem = this.shoppingListRef.push(title);
    this.itemsRef.child(`/${addeditem.key}`).set(shoplistItems);

    this.setState({ ...initState });
  }

  render() {
    const { title, shoplistItems: { fruitsvegetables, bread, milkyogurts, meat, drinks } } = this.state;
    return (
      <FlexWrapper>
        <AddShoplistForm title={title} onTitleChange={this.onTitleChange} onItemAdd={this.onItemAdd} />
        <ShoplistPreviewWrapper>
          <ShoplistHeader isPlaceHolder={!title}>{title || 'Title placeholder'}</ShoplistHeader>

          {fruitsvegetables.length > 0 && (
            <AddShoplistPreview categoryName="Hedelmät & Vihannekset" items={fruitsvegetables} />
          )}

          {bread.length > 0 && <AddShoplistPreview categoryName="leivät" items={bread} />}

          {milkyogurts.length > 0 && <AddShoplistPreview categoryName="Maito & Jugurtit" items={milkyogurts} />}

          {meat.length > 0 && <AddShoplistPreview categoryName="Liha" items={meat} />}

          {drinks.length > 0 && <AddShoplistPreview categoryName="Juomat" items={drinks} />}
          <button onClick={this.handleShoplistSave}>Save shoplist</button>
        </ShoplistPreviewWrapper>
      </FlexWrapper>
    );
  }
}

AddShoplist.contextTypes = {
  authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AddShoplist);
