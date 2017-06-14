import React from 'react';
import { storiesOf } from '@kadira/storybook';

import HeaderArticle from '../../core/HeaderArticle';
import BodyArticle from '../BodyArticle';
import FooterArticle from '../../core/FooterArticle';

import Article from '.';

const sources = [
  {
    path: 'http://fotografias.antena3.com/clipping/cmsimages01/2017/05/08/85137FFB-1A2E-47EA-BBF4-148AFE489BFE/',
    img: '14.jpg',
    width: '1024',
    height: '525',
    resources: [
      { img: '64.jpg', media: '(max-width: 360px)' },
      { img: '60.jpg', media: '(max-width: 768px)' },
      { img: '14.jpg', media: '(min-width: 1024px)' }
    ]
  }
];

storiesOf('Article', module)
  .add('Articulo Completo', () => (
    <Article>
      <HeaderArticle
        titleText="Más de 20.000 participantes en la 8ª edición de la carrera Ponle Freno"
        sources={sources}
        datetime="09/05/2017"
        type="news"
      />
      <BodyArticle
        text="Pellentesque consectetur auctor imperdiet. Aenean ornare, orci at vehicula finibus, dui lacus scelerisque dolor, vel pretium velit odio ac ante. Nulla dolor massa, auctor quis justo eget, interdum dictum odio"
      />
      <FooterArticle
        author="Por Anacleto Cateto"
        authorRole="Agente Secreto"
        src="http://placehold.it/45x45"
      />
    </Article>
  ))
  .add('Article sin imagen', () => (
    <Article>
      <HeaderArticle
        titleText="Más de 20.000 participantes en la 8ª edición de la carrera Ponle Freno"
        datetime="09/05/2017"
        type="programs"
      />
      <BodyArticle
        text="Pellentesque consectetur auctor imperdiet. Aenean ornare, orci at vehicula finibus, dui lacus scelerisque dolor, vel pretium velit odio ac ante. Nulla dolor massa, auctor quis justo eget, interdum dictum odio"
      />
      <FooterArticle
        author="Por Anacleto Cateto"
        authorRole="Agente Secreto"
        src="http://placehold.it/45x45"
      />
    </Article>
  ))
  .add('Article sin texto', () => (
    <Article>
      <HeaderArticle
        titleText="Más de 20.000 participantes en la 8ª edición de la carrera Ponle Freno"
        datetime="09/05/2017"
        sources={sources}
        type="sports"
      />
      <FooterArticle
        author="Por Mario Vaquerizo"
        authorRole="Agente Secreto"
        src="http://placehold.it/45x45"
      />
    </Article>
  ));
