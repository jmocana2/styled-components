import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from '.';

storiesOf('Button', module)
  .add('Normal', () => (
    <Button onClick={() => alert('hey there!')}>Click me!</Button>
  ))
  .add('Normal icon', () => (
    <Button icon="icon-cake" onClick={() => alert('hey there!')}>
      Click me!
    </Button>
  ))
  .add('Normal disabled', () => (
    <Button onClick={() => alert('hey there!')} disabled>Click me!</Button>
  ))
  .add('Normal icon disabled', () => (
    <Button icon="icon-cake" onClick={() => alert('hey there!')} disabled>
      Click me!
    </Button>
  ))
  .add('Href', () => <Button href="https://www.google.es">+ Ver más</Button>)
  .add('Href icon', () => (
    <Button href="https://www.google.es" icon="icon-cake">+ Ver más</Button>
  ));
