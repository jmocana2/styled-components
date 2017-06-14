import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HeaderArticle from '.';

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

storiesOf('HeaderArticle', module)
  .add('Default header', () => (
    <HeaderArticle
      type="news"
      datetime="2017-05-02"
      titleText="Titular de una noticia cualquiera"
      sources={sources}
    />
  ))
  .add('Header without image', () => (
    <HeaderArticle
      type="programs"
      datetime="2017-05-02"
      titleText="Titular de una noticia cualquiera"
    />
  ));
