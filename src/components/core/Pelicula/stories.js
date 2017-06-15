import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Pelicula from '.';

const source = {
  pelicula: {
    titulo: 'Pulp Fiction',
    srcCaratula: 'https://cdn.miramax.com/media/assets/Pulp-Fiction1.png',
    canal: 'La Sexta',
    hora: '11:00 - 12:00'
  }
};

storiesOf('Componente cerrado: Pelicula', module)
  .add('info botttom', () => <Pelicula source={source} canal="sexta" />)
  .add('info top', () => <Pelicula source={source} infoPosition="top" canal="sexta" />);
