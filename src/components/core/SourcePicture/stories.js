import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SourcePicture from '.';

storiesOf('SourcePicture', module)
	.add('Test', () => (
		<SourcePicture srcset="http://placehold.it/400x225" media="(min-width: 360px)" />
  )
);