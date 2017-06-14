import React from 'react';
import { shallow } from 'enzyme';
import ArticleAuthor from '.';

describe('ArticleAuthor', () => {
  it('dummy test', () => {
    const wrapper = shallow(<ArticleAuthor />);
    expect(true).toBe(true);
  });
});
