import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Dropdown from '.';

const source = [
  { label: 'España', value: 'España' },
  { label: 'Francia', value: 'Francia' },
  { label: 'Portugal', value: 'Portugal' }
];

const onChange = () => {
  alert('fired!');
};

storiesOf('Dropdown', module)
  .add('Active', () => <Dropdown source={source} onChange={onChange} />)
  .add('Disabled', () => (
    <Dropdown source={source} onChange={onChange} disabled />
  ));
