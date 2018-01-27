import React, { Component } from 'react';

class ShoplistForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: ''
    };

    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(event) {
    const { name, category } = this.state;
    const { onItemAdd } = this.props;

    onItemAdd({ name, category });

    this.setState({ name: '', category: '' });
    event.preventDefault();
  }

  render() {
    const { name, category } = this.state;
    const { title, onTitleChange } = this.props;

    return (
      <div>
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
          <select value={category} onChange={event => this.setState({ category: event.target.value })} id="category">
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
      </div>
    );
  }
}

export default ShoplistForm;
