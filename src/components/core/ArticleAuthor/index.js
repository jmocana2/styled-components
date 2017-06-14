import React from 'react';
import PropTypes from 'prop-types';

import Imagen from '../Image';
import {
  StyledArticleAuthor,
  StyledTextAuthor,
  StyledAuthor,
  StyledRole
} from './style';

const ArticleAuthor = ({ author, authorRole, src }) => (
  <StyledArticleAuthor>
    <Imagen round src={src} width="45" height="45" />
    <StyledTextAuthor>
      <StyledAuthor>
        {author}
      </StyledAuthor>
      <StyledRole>
        {authorRole}
      </StyledRole>
    </StyledTextAuthor>
  </StyledArticleAuthor>
);

ArticleAuthor.propTypes = {
  author: PropTypes.string,
  authorRole: PropTypes.string,
  src: PropTypes.string
};

ArticleAuthor.defaultProps = {
  author: '',
  authorRole: '',
  src: ''
};

export default ArticleAuthor;
