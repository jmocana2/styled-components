import React from 'react';
import PropTypes from 'prop-types';

import { StyledArticle } from './style';

const Article = (
  {
    children
  }
) => (
  <StyledArticle>
    {children}
  </StyledArticle>
);

Article.propTypes = {
  children: PropTypes.node
};

Article.defaultProps = {};

export default Article;
