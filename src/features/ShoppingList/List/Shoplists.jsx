import React, { Component } from 'react';
import map from 'lodash/map';
import { database } from '../../../firebase/index';

class Shoplists extends Component {
  constructor() {
    super();
    this.state = {
      shoplists: null
    };
    this.shoppinglistRef = database.ref('shoppinglist');
  }

  componentDidMount() {
    this.shoppinglistRef.on('value', snapshot => {
      this.setState({
        shoplists: snapshot.val().shoplist
      });
    });
  }

  render() {
    const { shoplists } = this.state;
    return <div>{map(shoplists, (shoplist, key) => <p key={key}>{shoplist}</p>)}</div>;
  }
}
export default Shoplists;
