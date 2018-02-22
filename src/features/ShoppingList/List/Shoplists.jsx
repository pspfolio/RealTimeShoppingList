import React, { Component } from 'react';
import map from 'lodash/map';
import { Link } from 'react-router-dom';
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
    return (
      <div>
        {map(shoplists, (shoplist, key) => (
          <div>
            <Link to={`list/${key}`}>{shoplist}</Link>
          </div>
        ))}
      </div>
    );
  }
}
export default Shoplists;
