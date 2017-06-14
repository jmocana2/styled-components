import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubtitle } from './style';

const Subtitle = ({ children }) => <StyledSubtitle>{children}</StyledSubtitle>;

Subtitle.propTypes = {
  children: PropTypes.string
};

export default Subtitle;
