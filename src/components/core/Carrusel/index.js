import React from 'react';
import PropTypes from 'prop-types';
import { StyledCarrusel, StyledNav, StyledNavItem, StyledCarruselWrapper } from './style';

const Carrusel = ({ children }) => <StyledCarrusel>
  <StyledNav>
    <StyledNavItem>&lt;</StyledNavItem>
    <StyledNavItem>&gt;</StyledNavItem>
  </StyledNav>
  <StyledCarruselWrapper>
     {children}
  </StyledCarruselWrapper>  
</StyledCarrusel>;

Carrusel.propTypes = {
  children: PropTypes.node
};

Carrusel.defaultProps = {
  children: []
};

export default Carrusel;
