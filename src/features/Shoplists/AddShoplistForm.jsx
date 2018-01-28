import React, { Component } from 'react';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

class ShoplistForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: 'fruitsvegetables'
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleAddItem(event) {
    const { name, category } = this.state;
    const { onItemAdd } = this.props;

    onItemAdd({ name, category });

    this.setState({ name: '', category: '' });
    event.preventDefault();
  }

  handleCategoryChange(event) {
    const { target } = event;

    this.setState({ category: { value: target.value, name: target.options[target.selectedIndex].text } });
  }

  render() {
    const { name, category } = this.state;
    const { title, onTitleChange } = this.props;

    return (
      <FlexWrapper>
        <label htmlFor="name">
          Shoppinglist name
          <input id="name" type="text" value={title} onChange={onTitleChange} />
        </label>

        <label htmlFor="item">
          Shoplist item
          <input id="item" type="text" value={name} onChange={event => this.setState({ name: event.target.value })} />
        </label>

        <label htmlFor="category">
          Pick category
          <select value={category.value} onChange={this.handleCategoryChange} id="category">
            <option value="fruitsvegetables">Fruits & Vegetables</option>
            <option value="bread">Bread</option>
            <option value="milkyogurts">Milk & Yogurts</option>
            <option value="meat">Meat</option>
            <option value="drinks">Drinks</option>
          </select>
        </label>

        <button type="button" onClick={this.handleAddItem}>
          Add item
        </button>
      </FlexWrapper>
    );
  }
}

export default ShoplistForm;
