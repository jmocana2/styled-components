import React from 'react';
import PropTypes from 'prop-types';
import { LabelStyle } from './style';

const Label = ({ children }) => <LabelStyle>{children}</LabelStyle>;

Label.propTypes = {
  children: PropTypes.node
};

export default Label;
