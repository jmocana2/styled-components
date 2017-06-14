import React from 'react';
import PropTypes from 'prop-types';
import { StyledIconButton, StyledLinkIconButton, StyledSVG } from './style';

const IconButton = ({ disabled, href, icon, ...rest }) => {
  const StyledButton = href ? StyledLinkIconButton : StyledIconButton;
  return (
    <StyledButton disabled={disabled} href={href} {...rest}>
      <StyledSVG id={icon} />
    </StyledButton>
  );
};

IconButton.propTypes = {
  big: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  small: PropTypes.bool
};

IconButton.defaultProps = {
  big: false,
  disabled: false,
  href: '',
  icon: '',
  small: false
};

export default IconButton;
