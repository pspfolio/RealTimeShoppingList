import React, { Component } from 'react';
import Shopitem from './Shopitem';

class Shoplist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopitems: [{ id: 1, name: 'Maito', inCart: false }, { id: 2, name: 'Banaani', inCart: true }]
    };
  }
  render() {
    return (
      <ul>
        {this.state.shopitems.map(shopitem => (
          <Shopitem key={shopitem.id} name={shopitem.name} inCart={shopitem.inCart} />
        ))}
      </ul>
    );
  }
}

export default Shoplist;
