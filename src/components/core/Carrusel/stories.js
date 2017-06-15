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

const source2 = {
  pelicula: {
    titulo: 'Pulp Fiction',
    srcCaratula: 'https://cdn.miramax.com/media/assets/Pulp-Fiction1.png',
    canal: 'Antena 3',
    hora: '11:00 - 12:00'
  }
};

const source3 = {
  pelicula: {
    titulo: 'Pulp Fiction',
    srcCaratula: 'https://cdn.miramax.com/media/assets/Pulp-Fiction1.png',
    canal: 'Neox',
    hora: '11:00 - 12:00'
  }
};

storiesOf('Componente contenedor: Carrusel', module)
  .add('Carrusel', () => (
    <Carrusel>
      <h1> children: Listo para insertar componentes Pelicula!! </h1>
    </Carrusel>
  ))
  .add('Carrusel de películas', () => (
    <Carrusel>
      <Pelicula source={source} canal="sexta" />
      <Pelicula source={source2} infoPosition="top" canal="antena3" />
      <Pelicula source={source3} canal="neox" />
      <Pelicula source={source} canal="sexta" />
    </Carrusel>
  ));
