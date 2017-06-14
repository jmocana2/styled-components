import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BodyArticle from '.';

const text = 'Pellentesque consectetur auctor imperdiet. Aenean ornare, orci at vehicula finibus, dui lacus scelerisque dolor, vel pretium velit odio ac ante. Nulla dolor massa, auctor quis justo eget, interdum dictum odio';

storiesOf('BodyArticle', module).add('Test', () => <BodyArticle text={text} />);
