import React, { Component } from 'react';

class Shoplist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopitems: [{ name: 'Maito', shopped: false }, { name: 'Maito', shopped: false }]
    };
  }
  render() {
    const { shopitems } = this.state;
    return shopitems.map(shopitem => <h3>{shopitem.name}</h3>);
  }
}

export default Shoplist;
