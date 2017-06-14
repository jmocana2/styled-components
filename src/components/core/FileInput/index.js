import React from 'react';
import PropTypes from 'prop-types';
import { FileInputStyle } from './style';

const FileInput = ({ className }) => (
  <FileInputStyle className={className} type="file" />
);

FileInput.propTypes = {
  className: PropTypes.string
};

FileInput.defaultProps = {
  className: ''
};

export default FileInput;
