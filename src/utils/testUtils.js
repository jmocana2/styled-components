import React from 'react';
import { shallow } from 'enzyme';

const shallowComponent = (Component, props) =>
  shallow(<Component {...props} />);

const checkProps = (Component, prop, value, op) => {
  expect(shallowComponent(Component, { [prop]: value }).instance().props[prop])[
    op
  ](value);
};

export { checkProps };
