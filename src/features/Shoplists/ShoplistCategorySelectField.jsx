import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { purple500 } from 'material-ui/styles/colors';

const CategorySelectField = ({ categories, handleCategoryChange, value }) => (
  <SelectField selectedMenuItemStyle={{ color: purple500 }} value={value} onChange={handleCategoryChange}>
    {categories.map(category => (
      <MenuItem key={category.value} insetChildren value={category.value} primaryText={category.name} />
    ))}
  </SelectField>
);

export default CategorySelectField;
