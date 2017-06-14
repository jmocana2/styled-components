import React from 'react';
import PropTypes from 'prop-types';
import { StyledPelicula, StyledImagen, StyledInfoWrapper, StyledInfo } from './style';

const Pelicula = ({ infoPosition, source }) => <StyledPelicula>
    <StyledImagen src={source.pelicula.srcCaratula} alt={source.pelicula.titulo} />
    <StyledInfoWrapper infoPosition={infoPosition}>
      <StyledInfo>{source.pelicula.titulo}</StyledInfo>
      <StyledInfo>{source.pelicula.canal}</StyledInfo>
      <StyledInfo>{source.pelicula.hora}</StyledInfo>
    </StyledInfoWrapper>
</StyledPelicula>;

Pelicula.propTypes = {
  source: PropTypes.objectOf(PropTypes.string).isRequired,
  infoPosition: PropTypes.oneOf(['bottom', 'top']),
};

Pelicula.defaultProps = {
  infoPosition: 'bottom'
};

export default Pelicula;
