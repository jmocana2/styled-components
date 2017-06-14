import React from 'react';
import { shallow } from 'enzyme';
import Template from '.';

describe('dummy test', () => {
  it('dummy test', () => {
    const wrapper = shallow(<Template />);
    expect(true).toBe(true);
  });
});
