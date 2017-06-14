import React from 'react';
import PropTypes from 'prop-types';
import { StyledPicture } from './style';
import Img from '../Image';
import Sources from '../SourcePicture';

const Picture = ({ children, round, className }) => (
	  <StyledPicture round={round} className={className}>
	  	{children}
	  </StyledPicture>
);

Picture.propTypes = {
	children: PropTypes.node,
	round:	PropTypes.bool,
	className: PropTypes.string
};

Picture.defaultProps = {
	children: [],
	round: false,
	className: ''
};

export default Picture;
