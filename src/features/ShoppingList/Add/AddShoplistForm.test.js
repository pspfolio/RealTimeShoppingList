import React from 'react';
import { shallow } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import AddShoplistForm from './AddShoplistForm';

test('renders component', () => {
  const wrapper = shallow(<AddShoplistForm />);
  expect(wrapper).toMatchSnapshot();
});

test('add button is disabled by default', () => {
  const wrapper = shallow(<AddShoplistForm />);
  expect(wrapper.find(RaisedButton).prop('disabled')).toBeTruthy();
});

test('Should enable add button on name state change', () => {
  const wrapper = shallow(<AddShoplistForm />);
  expect(wrapper.find(RaisedButton).prop('disabled')).toBeTruthy();
  wrapper.setState({ name: 'bar' });
  expect(wrapper.find(RaisedButton).prop('disabled')).toBeFalsy();
});
