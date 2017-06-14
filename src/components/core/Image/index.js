import React from 'react';
import PropTypes from 'prop-types';
import StyledImage from './style';

const Image = props => <StyledImage {...props} />;

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  round: PropTypes.bool
};

Image.defaultProps = {
  src: '',
  width: '',
  height: '',
  round: false
};

export default Image;
