import React from 'react';
import PropTypes from 'prop-types';
import { StyledPublishedBox } from './style';

const PublishedBox = ({ datetime }) => (
  <StyledPublishedBox>
    Publicado hace <time>{datetime}</time>
  </StyledPublishedBox>
);

PublishedBox.propTypes = {
  datetime: PropTypes.string
};

PublishedBox.defaultProps = {
  datetime: ''
};

export default PublishedBox;
