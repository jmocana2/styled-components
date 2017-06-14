import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledContentTitleTab, StyledIcon, StyledTitleTab } from './style';

class Label extends PureComponent {
  render() {
    const { icon, active, children } = this.props;

    return (
      <StyledContentTitleTab>
        <StyledIcon id={icon} active={active} />
        <StyledTitleTab>
          {children}
        </StyledTitleTab>
      </StyledContentTitleTab>
    );
  }
}

Label.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.string
};

Label.defaultProps = {
  active: false,
  icon: ''
};

export default Label;
