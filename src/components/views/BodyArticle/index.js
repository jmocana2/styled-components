import React from 'react';
import PropTypes from 'prop-types';
import { StyledBodyArticle, StyledTextArticle, StyledButton } from './style';

const BodyArticle = ({ text }) => (
  <StyledBodyArticle>
    {text &&
      <StyledTextArticle text={text}>
        {text.substring(0, 150)}
      </StyledTextArticle>}
    <p>
      <StyledButton
        icon="icon-plus"
        href="http://www.google.es"
        target="_blank"
        title="Leer Más"
      >
        LEER MÁS
      </StyledButton>
    </p>
  </StyledBodyArticle>
);

BodyArticle.propTypes = {
  text: PropTypes.string
};

BodyArticle.defaultProps = {
  text: ''
};

export default BodyArticle;
