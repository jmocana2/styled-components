import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledSwitch } from './style';

class Switch extends Component {
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
    return (
      <StyledWrapper>
        <label>{this.props.label}</label>
        <StyledSwitch
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onChange}
          disabled={this.props.disabled}
        />
      </StyledWrapper>
    );
  }
}

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};

Switch.defaultProps = {
  checked: false,
  disabled: false,
  label: ''
};

export default Switch;
