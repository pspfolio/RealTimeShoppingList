import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { database } from '../../firebase/index';
import AddShoplistForm from './AddShoplistForm';
import AddShoplistPreview from './AddShoplistPreview';
import withAuthorization from '../../common/HOC/withAuthorization';

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
    this.handleShoplistSave = this.handleShoplistSave.bind(this);
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
    database
      .ref()
      .child('shoppinglist')
      .push({ ...this.state });
  }

  render() {
    const { title, shoplistItems: { fruitsvegetables, bread, milkyogurts, meat, drinks } } = this.state;
    return (
      <FlexWrapper>
        <AddShoplistForm title={title} onTitleChange={this.onTitleChange} onItemAdd={this.onItemAdd} />
        <ShoplistPreviewWrapper>
          <ShoplistHeader isPlaceHolder={!title}>{title || 'Title placeholder'}</ShoplistHeader>

          {fruitsvegetables.length > 0 && (
            <AddShoplistPreview categoryName="Hedelmät & Vihannekset" emoji="🥕" items={fruitsvegetables} />
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
