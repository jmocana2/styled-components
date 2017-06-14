import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TitleArticle from '.';

storiesOf('TitleArticle', module)
  .add('Default title', () => (
    <TitleArticle
      titleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    />
  ))
  .add('Title 1', () => (
    <TitleArticle
      titleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      format="200"
    />
  ))
  .add('Title 2', () => (
    <TitleArticle
      titleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      format="180"
    />
  ))
  .add('Title 3', () => (
    <TitleArticle
      titleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      format="160"
    />
  ))
  .add('Title 4', () => (
    <TitleArticle
      titleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      format="140"
    />
  ))
  .add('Title 5', () => (
    <TitleArticle
      titleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      format="120"
    />
  ));
