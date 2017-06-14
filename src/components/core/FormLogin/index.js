import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormLogin } from './style';

const FormLogin = (
  {
    children
  }
) => (
  <StyledFormLogin>
    {children}
  </StyledFormLogin>
);

FormLogin.propTypes = {
    children: PropTypes.node    
};

FormLogin.defaultProps = {};

export default FormLogin;
