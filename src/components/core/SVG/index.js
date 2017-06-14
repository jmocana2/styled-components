import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ className, id }) => (
  <svg className={className}>
    <use xlinkHref={`../../public/img/iconos.svg#${id}`} />
  </svg>
);

SVG.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

SVG.defaultProps = {
  className: '',
  id: ''
};

export default SVG;
