import React from 'react';
import PropTypes from 'prop-types';
import { StyledSourcePicture } from './style';

const SourcePicture = props => (
	<StyledSourcePicture {...props} />
);

SourcePicture.propTypes = {
	srcset: PropTypes.srcset,
	media: PropTypes.media
}

SourcePicture.defaultProps = {
	srcset: 'http://placehold.it/400x225',
	media: '(min-width: 360px)'
}

export default SourcePicture;
