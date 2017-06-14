import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MenuDia from '.';

const source = [
  {
    text: 'Ensaladas',
    id: 'Ensaladas',
    icon: 'icon-salads',
    content: [
      { id: '234324234', text: 'Tomate Bola Gajo' },
      { id: '234234', text: 'Cebolla Pelada' },
      { id: '2342342', text: 'Lechuga Roamana' },
      { id: '45675', text: 'Arroz Blanco' },
      { id: '451675', text: 'Pasta Cocida' },
      { id: '456275', text: 'Zanahoria Rallada' },
      { id: '453675', text: 'Mais Grano' },
      { id: '153675', text: 'Aceituna verde' },
      { id: '253675', text: 'Huevo Cocido' },
      { id: '353675', text: 'Atún' },
      { id: '4453675', text: 'Esparragos Tallo' },
      { id: '653675', text: 'Ensalada de Cogollo con Vinagreta ' },
      { id: '473675', text: 'Ensalada de Coliflor con Yogur ' },
      { id: '483675', text: 'Enslada de Escarola' }
    ]
  },
  {
    text: 'Platos frios & Salsas',
    id: 'PlatosFrios',
    icon: 'icon-salsa',
    content: [
      { id: '6756', text: 'Tomates Rellenos de Atun' },
      { id: '56756', text: 'Chupito de gazpacho' },
      { id: '54653434546', text: 'Vinagreta Frutos Secos' },
      { id: '546534546', text: 'Guacamole' },
      { id: '7897345367', text: 'Tartara' },
      { id: '7897645567', text: 'Mil Islas' }
    ]
  },
  {
    text: 'Guarniciones',
    id: 'Guarniciones',
    icon: 'icon-guarniciones',
    content: [
      { id: '234234', text: 'Patatas a lo Pobre' },
      { id: '5465334546', text: 'Patatas Panaderas' },
      { id: '232', text: 'Coliflor al Vapor' },
      { id: '8973645567', text: 'Coditos al Aroma de Campo' }
    ]
  },
  {
    text: 'Primeros & segundos',
    id: 'PrimerosSegundos',
    icon: 'icon-combined-shape',
    content: [
      { id: '234657214', text: 'Sopa de Pollo con Pasta Maravilla' },
      { id: '42334534423', text: 'Arroz Brut' },
      { id: '5465546', text: 'Garbanzos Estofados' },
      { id: '7893463443767', text: 'Borraja salteada con su Ajada' },
      { id: '78953467', text: 'Bacalao con Tomate' },
      { id: '789545767', text: 'Curry de Ternera con Cebolla' },
      { id: '789535767', text: 'Atun con Salsa de Soja' },
      { id: '7895345767', text: 'Cinta de Lomo Plancha' },
      { id: '789354534767', text: 'Alitas de Pollo Fritas' }
    ]
  },
  {
    text: 'Postres',
    id: 'Postres',
    icon: 'icon-cake',
    content: [
      { id: '234214', text: 'Chessecake con Frutos de Bosque' },
      { id: '423423', text: 'Leche Frita con Crema Ligera' },
      { id: '546546', text: 'Macedonia de Frutas' },
      { id: '7897212367', text: 'Crema Catalana' }
    ]
  }
];

const img = 'http://www.nhs.uk/Livewell/Goodfood/PublishingImages/T_0217_eating-healthily_179013608_A.jpg';
const date = 1494257463265;
const title = 'MENÚ';
const subtitle = 'Objetivo bienestar cuida tu salud';

storiesOf('Menú del día', module)
  .add('Vertical normal', () => <MenuDia date={date} source={source} />)
  .add('Vertical especial', () => (
    <MenuDia
      date={date}
      img={img}
      source={source}
      subtitle={subtitle}
      special
      title={title}
    />
  ));
