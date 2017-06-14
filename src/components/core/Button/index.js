import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledStandardButton,
  StyledLinkButton,
  StyledSVG,
  StyledText
} from './style';

const Button = ({ children, href, icon, ...rest }) => {
  const StyledButton = href ? StyledLinkButton : StyledStandardButton;
  return (
    <StyledButton {...rest}>
      {icon && <StyledSVG id={icon} />}
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  raised: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  href: '',
  icon: '',
  raised: false
};

export default Button;
