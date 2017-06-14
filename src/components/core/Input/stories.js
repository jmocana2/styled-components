import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '.';

storiesOf('Input', module)
  .add('Normal', () => (
    <Input placeholder="Escribe algo..." label="Dirección" />
  ))
  .add('Normal maxLength 10', () => (
    <Input placeholder="Escribe algo" maxLength={10} />
  ))
  .add('Normal inválido', () => (
    <Input placeholder="Escribe algo..." error="Valor inválido" />
  ))
  .add('Disabled', () => (
    <Input placeholder="Escribe algo" disabled value="Campo deshabilitado :(" />
  ))
  .add('Multiline', () => <Input multiline placeholder="Escribe algo" />)
  .add('Multiline 10 rows', () => (
    <Input multiline placeholder="Escribe algo" rows={10} />
  ))
  .add('Multiline inválido', () => (
    <Input
      multiline
      placeholder="Escribe algo"
      rows={10}
      error="Valor inválido"
    />
  ))
  .add('Multiline disabled', () => (
    <Input
      multiline
      placeholder="Escribe algo"
      disabled
      value="Campo deshabilitado :("
    />
  ));
