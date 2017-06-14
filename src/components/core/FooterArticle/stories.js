import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FooterArticle from '.';

storiesOf('FooterArticle', module).add('Footer default', () => (
  <FooterArticle
    author="Por Anacleto Cateto"
    authorRole="Agente Secreto"
    src="http://placehold.it/45x45"
  />
));
