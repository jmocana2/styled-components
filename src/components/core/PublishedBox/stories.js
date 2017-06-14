import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PublishedBox from '.';

storiesOf('PublishedBox', module)
  .add('Published one day', () => <PublishedBox datetime="2017-05-02" />)
  .add('Published one hour', () => <PublishedBox datetime="2017-05-03" />);
