import React from 'react';
import PropTypes from 'prop-types';
import ArticleAuthor from '../ArticleAuthor';
import IconButton from '../IconButton';
import { StyledFooterArticle, StyledTools } from './style';

const FooterArticle = ({ author, authorRole, src }) => (
  <StyledFooterArticle>
    <ArticleAuthor author={author} authorRole={authorRole} src={src} />
    <StyledTools>
      <IconButton href="https://www.google.es" icon="icon-like" small />
      <IconButton href="https://www.google.es" icon="icon-mark" small />
      <IconButton href="https://www.google.es" icon="icon-comentarios" small />
      <IconButton href="https://www.google.es" icon="icon-share" small />
    </StyledTools>
  </StyledFooterArticle>
);

FooterArticle.propTypes = {
  author: PropTypes.string,
  authorRole: PropTypes.string,
  src: PropTypes.string
};

FooterArticle.defaultProps = {
  author: '',
  authorRole: '',
  src: ''
};

export default FooterArticle;
