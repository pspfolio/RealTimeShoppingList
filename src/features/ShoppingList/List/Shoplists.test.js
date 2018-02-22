import React from 'react';
import { shallow } from 'enzyme';
import Shoplists from './Shoplists';

test('renders component', () => {
  const wrapper = shallow(<Shoplists />);
  expect(wrapper).toMatchSnapshot();
});
