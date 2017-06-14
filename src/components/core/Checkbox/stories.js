import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Checkbox from '.';

const handleChange = () => {
  console.log('change fired!');
};

storiesOf('Checkbox', module)
  .add('Unchecked ', () => (
    <Checkbox
      checked={false}
      label="Push notifications"
      onChange={handleChange}
    />
  ))
  .add('Checked', () => (
    <Checkbox checked label="Push notifications" onChange={handleChange} />
  ))
  .add('Disabled', () => (
    <Checkbox
      checked
      label="Push notifications"
      onChange={handleChange}
      disabled
    />
  ));
