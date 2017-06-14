import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ArticleAuthor from '.';

storiesOf('ArticleAuthor', module).add('Test', () => (
  <ArticleAuthor
    author="Por Anacleto Cateto"
    authorRole="Agente Secreto"
    src="http://placehold.it/45x45"
  />
));
