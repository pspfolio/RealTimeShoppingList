import React from 'react';
import { shallow } from 'enzyme';
import AddShoplistPreview from './AddShoplistPreview';

test('renders component', () => {
  const wrapper = shallow(<AddShoplistPreview />);
  expect(wrapper).toMatchSnapshot();
});

test('renders the category name', () => {
  const categoryName = 'Test category';
  const wrapper = shallow(<AddShoplistPreview categoryName={categoryName} />);
  expect(wrapper.find('h3').text()).toEqual(categoryName);
});

test('Preview should render correct amount of Shoplist items', () => {
  const items = ['test1', 'test2'];
  const wrapper = shallow(<AddShoplistPreview items={items} />);
  expect(wrapper.find('.preview-shoplist-item').length).toEqual(items.length);
});
