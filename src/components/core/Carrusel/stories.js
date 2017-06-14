import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Carrusel from '.';
import Pelicula from '../Pelicula';

const source = {
  pelicula: {
    titulo: 'Pulp Fiction',
    srcCaratula: 'https://cdn.miramax.com/media/assets/Pulp-Fiction1.png',
    canal: 'La Sexta',
    hora: '11:00 - 12:00'
  }
};

storiesOf('Carrusel', module).add('Carrusel', () => (
  <Carrusel>
     <h1> children: Listo para insertar componentes Pelicula!! </h1>
  </Carrusel>
)).add('Carrusel de películas', () => (
  <Carrusel>
     <Pelicula source={source} />
     <Pelicula source={source} infoPosition="top" />
     <Pelicula source={source} />
     <Pelicula source={source} />
  </Carrusel>
));
