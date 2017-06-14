import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './style';

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

Title.propTypes = {
  children: PropTypes.string
};

Title.defaultProps = {
  children: ''
};

export default Title;
