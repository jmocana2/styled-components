import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledLiTab } from './style';

class Tab extends PureComponent {
  render() {
    return (
      <StyledLiTab
        active={this.props.active}
        vertical={this.props.vertical}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </StyledLiTab>
    );
  }
}

Tab.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onClick: PropTypes.func,
  vertical: PropTypes.bool
};

Tab.defaultProps = {
  active: false,
  className: '',
  label: '',
  vertical: false
};

export default Tab;
