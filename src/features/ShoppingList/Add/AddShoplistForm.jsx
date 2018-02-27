import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { purple500 } from 'material-ui/styles/colors';
import { database } from '../../../firebase/index';
import ShoplistCategorySelectField from '../ShoplistCategorySelectField';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const styles = {
  underlineStyle: {
    borderColor: purple500
  },
  floatingLabelFocusStyle: {
    color: purple500
  }
};

class ShoplistForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: { value: 'fruitsvegetables', name: 'Fruits & Vegetables' },
      categories: []
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.refCategories = database.ref('categories');
  }

  componentDidMount() {
    this.refCategories.once('value', snap => {
      const categories = map(snap.val(), (category, key) => ({ value: key, name: category }));
      this.setState({ categories });
    });
  }

  handleAddItem(event) {
    const { name, category } = this.state;
    const { onItemAdd } = this.props;

    onItemAdd({ name, category });

    this.setState({ name: '', category: { value: 'fruitsvegetables', name: 'Fruits & Vegetables' } });
    event.preventDefault();
  }

  handleCategoryChange(event, index, value) {
    const { categories } = this.state;
    const { name } = categories.filter(category => category.value === value)[0];
    this.setState({ category: { value, name } });
  }

  render() {
    const { name, category, categories } = this.state;
    const { title, onTitleChange } = this.props;
    return (
      <FlexWrapper>
        <TextField
          hintText="Title of shoplist"
          floatingLabelText="Title"
          value={title}
          onChange={onTitleChange}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />

        <TextField
          hintText="Item name"
          floatingLabelText="Item"
          value={name}
          onChange={event => this.setState({ name: event.target.value })}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />

        <ShoplistCategorySelectField
          categories={categories}
          handleCategoryChange={this.handleCategoryChange}
          value={category.value}
        />

        <RaisedButton
          type="button"
          label="Add item"
          onClick={this.handleAddItem}
          backgroundColor={purple500}
          labelColor="white"
          disabled={name === ''}
        />
      </FlexWrapper>
    );
  }
}

export default ShoplistForm;
