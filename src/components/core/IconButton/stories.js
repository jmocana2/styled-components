import React from 'react';
import { storiesOf } from '@kadira/storybook';
import IconButton from '.';

storiesOf('IconButton', module)
  .add('Normal icon', () => (
    <IconButton icon="icon-cake" onClick={() => alert('hey there!')} />
  ))
  .add('Normal disabled', () => (
    <IconButton icon="icon-cake" onClick={() => alert('hey there!')} disabled />
  ))
  .add('Href icon', () => (
    <IconButton href="https://www.google.es" icon="icon-cake" />
  ))
  .add('Small button', () => <IconButton icon="icon-cake" small />)
  .add('Big icon', () => <IconButton icon="icon-cake" big />);
