import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { purple500 } from 'material-ui/styles/colors';
import ShoplistCategorySelectField from './ShoplistCategorySelectField';

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

const categories = [
  { value: 'fruitsvegetables', name: 'Fruits & Vegetables' },
  { value: 'bread', name: 'Bread' },
  { value: 'milkyogurts', name: 'Milk & Yogurts' },
  { value: 'meat', name: 'Meat' },
  { value: 'drinks', name: 'Drinks' }
];

class ShoplistForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: { value: 'fruitsvegetables', name: 'Fruits & Vegetables' }
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleAddItem(event) {
    const { name, category } = this.state;
    const { onItemAdd } = this.props;

    onItemAdd({ name, category });

    this.setState({ name: '', category: { value: 'fruitsvegetables', name: 'Fruits & Vegetables' } });
    event.preventDefault();
  }

  handleCategoryChange(event, index, value) {
    const { name } = categories.filter(category => category.value === value)[0];
    this.setState({ category: { value, name } });
  }

  render() {
    const { name, category } = this.state;
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
        />
      </FlexWrapper>
    );
  }
}

export default ShoplistForm;
