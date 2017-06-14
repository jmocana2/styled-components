import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Tabs, Tab } from '.';

const data = [
  {
    name: 'Ensaladas',
    id: 'Ensaladas',
    content: [
      { id: '234214', name: 'Tomate Bola Gajo' },
      { id: '423423', name: 'Cebolla Pelada' },
      { id: '546546', name: 'Lechuga Romana' },
      { id: '789767', name: 'Arroz Blanco' }
    ]
  },
  {
    name: 'Platos frios',
    id: 'PlatosFrios',
    content: [
      { id: '234214', name: 'Tomates Rellenos de Atun' },
      { id: '423423', name: 'Chupito de gazpacho' },
      { id: '546546', name: 'Patatas Fritas al Natural' },
      { id: '546546', name: 'Patatas Panaderas' },
      { id: '789767', name: 'Salteado Campesino' },
      { id: '789767', name: 'Arroz con Setas' }
    ]
  },
  {
    name: 'Primeros y segundos',
    id: 'PrimerosSegundos',
    content: [
      { id: '234214', name: 'Canelones Boloñesa' },
      { id: '423423', name: 'Lentejas Florentinas' },
      { id: '546546', name: 'Calabacín Salteado con Zanahorias' },
      { id: '789767', name: 'Sopa de Cebolla' },
      { id: '789767', name: 'Bacalao con Tomate' },
      { id: '789767', name: 'Empanada Gallega de Carne' }
    ]
  },
  {
    name: 'Salsas y postres',
    id: 'SalsasPostres',
    content: [
      { id: '234214', name: 'Vinagreta Frutos Secos' },
      { id: '423423', name: 'Guacamole' },
      { id: '546546', name: 'Tartára' },
      { id: '789767', name: 'Fruta Variada' },
      { id: '789767', name: 'Yogures sabores y desnatados' },
      { id: '789767', name: 'Macedonia de Frutas con Zumo de Naranja' }
    ]
  }
];
storiesOf('Tabs', module)
  .add('Horizontal', () => (
    <Tabs>
      {data.map(item => (
        <Tab label={item.name} key={item.id} id={item.id}>
          {item.content.map((content, i) => <p key={i}>{content.name}</p>)}
        </Tab>
      ))}
    </Tabs>
  ))
  .add('Vertical', () => (
    <Tabs vertical>
      {data.map(item => {
        const body = item.content.map((content, i) => (
          <p key={i}>{content.name}</p>
        ));
        return (
          <Tab label={item.name} key={item.id} id={item.id}>
            {body}
          </Tab>
        );
      })}
    </Tabs>
  ));
