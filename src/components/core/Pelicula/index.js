import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPelicula,
  StyledImagen,
  StyledInfoWrapper,
  StyledInfo
} from './style';

const Pelicula = ({ infoPosition, canal, source }) => (
  <StyledPelicula>
    <StyledImagen
      src={source.pelicula.srcCaratula}
      alt={source.pelicula.titulo}
    />
    <StyledInfoWrapper infoPosition={infoPosition}>
      <StyledInfo>{source.pelicula.titulo}</StyledInfo>
      <StyledInfo canal={canal}>{source.pelicula.canal}</StyledInfo>
      <StyledInfo>{source.pelicula.hora}</StyledInfo>
    </StyledInfoWrapper>
  </StyledPelicula>
);

Pelicula.propTypes = {
  source: PropTypes.objectOf(PropTypes.string).isRequired,
  infoPosition: PropTypes.oneOf(['bottom', 'top']),
  canal: PropTypes.oneOf(['sexta', 'antena3', 'neox'])
};

Pelicula.defaultProps = {
  infoPosition: 'bottom',
  canal: 'antena3'
};

export default Pelicula;
