import React from 'react';
import { shallow } from 'enzyme';
import ShowShoppingList from './ShowShoppingList';

test('renders component', () => {
  const wrapper = shallow(<ShowShoppingList />);
  expect(wrapper).toMatchSnapshot();
});
