import React from 'react';
import { shallow } from 'enzyme';
import Article from '.';

describe('dummy test', () => {
  it('dummy test', () => {
    const wrapper = shallow(<Article />);
    expect(true).toBe(true);
  });
});
