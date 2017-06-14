import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledTextarea, StyledInput } from './style';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value, isValid: false };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange && this.props.onChange(event);
  }

  render() {
    const {
      error,
      label,
      multiline,
      rows,
      ...rest
    } = this.props;

    const commonProps = {
      ...rest,
      onChange: this.onChange,
      value: this.state.value
    };

    return (
      <StyledWrapper>
        <label>{label}</label>
        {multiline
          ? <StyledTextarea {...commonProps} rows={rows} />
          : <StyledInput {...commonProps} />}
        {error ? <span>{error}</span> : null}
      </StyledWrapper>
    );
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Input.defaultProps = {
  disabled: false,
  error: '',
  label: '',
  maxLength: 50,
  multiline: false,
  rows: 0,
  placeholder: '',
  required: false,
  type: 'text',
  value: ''
};

export default Input;
