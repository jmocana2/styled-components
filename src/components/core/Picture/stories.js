import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Picture from '.';
import Imagen from '../Image';
import Sources from '../SourcePicture';

storiesOf('Picture', module)
	.add('Picture default', () => (
		<Picture>
	  		<Sources srcSet="http://placehold.it/400x225" media="(max-width: 767px)" />
	  		<Sources srcSet="http://placehold.it/600x400" media="(max-width: 1023px)" />
	  		<Sources srcSet="http://placehold.it/1024x525" media="(min-width: 1024px)" />
	  	  	<Imagen src="http://placehold.it/1024x525" width="1024" height="525" />
		</Picture>
	))
	.add('Round picture', () => (
		<Picture round="round">
	  		<Sources srcSet="http://placehold.it/300x300" media="(max-width: 767px)" />
	  		<Sources srcSet="http://placehold.it/400x400" media="(max-width: 1023px)" />
	  		<Sources srcSet="http://placehold.it/600x600" media="(min-width: 1024px)" />
			<Imagen src="http://placehold.it/400x400" width="400" height="400" />
		</Picture>
	));