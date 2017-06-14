import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Image from '.';

storiesOf('Image', module).add('Imagen', () => (
  <div>
    <Image src="http://placehold.it/1024x525" width="1024" height="525" />
    <Image src="http://placehold.it/45x45" width="45" height="45" round />
  </div>
));
