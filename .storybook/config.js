import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../src/constants/themes';

function loadStories() {
  require('../stories');
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);