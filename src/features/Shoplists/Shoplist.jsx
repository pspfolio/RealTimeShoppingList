import React, { Component } from 'react';
import styled from 'styled-components';
import ShoplistItem from './ShoplistItem';

const ListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

class Shoplist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopitems: [{ id: 1, name: 'Maito', inCart: false }, { id: 2, name: 'Banaani', inCart: true }]
    };
  }

  render() {
    return (
      <ListWrapper>
        {this.context}
        {this.state.shopitems.map(shopitem => (
          <ShoplistItem key={shopitem.id} name={shopitem.name} inCart={shopitem.inCart} />
        ))}
      </ListWrapper>
    );
  }
}

export default Shoplist;
