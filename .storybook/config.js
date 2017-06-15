import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { ThemeProvider } from 'styled-components';
import { Antena3 } from '../src/constants/themes';

function loadStories() {
  require('../stories');
}

addDecorator((story) => (
  <ThemeProvider theme={Antena3}>
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);