import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Switch from '.';

const handleChange = () => {
  console.log('change fired!');
};

storiesOf('Switch', module)
  .add('Check', () => (
    <Switch
      checked={false}
      label="Push notifications"
      onChange={handleChange}
    />
  ))
  .add('Checked by default', () => (
    <Switch checked label="Push notifications" onChange={handleChange} />
  ));
