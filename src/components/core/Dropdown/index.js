import React from 'react';
import PropTypes from 'prop-types';
import { DropdownStyle, DropdownItem } from './style';

const Dropdown = ({ source, onChange, disabled }) => (
  <DropdownStyle onChange={onChange} disabled={disabled}>
    {source.map(({ label, value }) => (
      <DropdownItem key={value} value={value}>{label}</DropdownItem>
    ))}
  </DropdownStyle>
);

Dropdown.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  source: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired
};

Dropdown.defaultProps = {
  disabled: false
};

export default Dropdown;
