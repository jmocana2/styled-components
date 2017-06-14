import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitleArticle } from './style';

const TitleArticle = ({ titleText, format }) => (
  <StyledTitleArticle format={format}>
    {titleText}
  </StyledTitleArticle>
);

TitleArticle.propTypes = {
  titleText: PropTypes.text,
  format: PropTypes.format
};

TitleArticle.defaultProps = {
  titleText: '',
  format: false
};

export default TitleArticle;
