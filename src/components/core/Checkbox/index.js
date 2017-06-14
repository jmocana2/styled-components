import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledCheckbox } from './style';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { checked: props.checked };
  }

  onChange(event) {
    this.setState(state => ({
      checked: !state.checked
    }));

    this.props.onChange && this.props.onChange(event);
  }

  render() {
    const { label, disabled } = this.props;
    return (
      <StyledWrapper>
        <label>{label}</label>
        <StyledCheckbox
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onChange}
          disabled={disabled}
        />
      </StyledWrapper>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  label: ''
};

export default Checkbox;
