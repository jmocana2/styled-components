import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { ThemeProvider } from 'styled-components';
import { Antena3 } from '../src/constants/themes/antena3';
import { Sexta } from '../src/constants/themes/sexta';
import { Neox } from '../src/constants/themes/neox';

function loadStories() {
  require('../stories');
}

addDecorator((story) => (
  <ThemeProvider theme={Neox}>
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);