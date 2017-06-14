import React from 'react';
import PropTypes from 'prop-types';

import Sources from '../SourcePicture';
import TitleArticle from '../TitleArticle';
import PublishedBox from '../PublishedBox';

import {
  StyledHeaderArticle,
  StyledContentImage,
  StyledHeaderImage,
  StyleCategory
} from './style';

const HeaderArticle = ({ sources, titleText, datetime, type }) => (
  <StyledHeaderArticle type={type}>
    {sources &&
      sources.map(item => (
        <StyledContentImage>
          {item.resources.map(resources => (
            <Sources
              media={resources.media}
              srcSet={item.path + resources.img}
            />
          ))}

          <StyledHeaderImage
            src={item.path + item.img}
            width={item.width}
            height={item.height}
          />
        </StyledContentImage>
      ))}
    <p>
      <StyleCategory href="http://antena3.com" type={type}>
        {type || 'Categoria'}
      </StyleCategory>
    </p>
    <PublishedBox datetime={datetime} />
    <TitleArticle titleText={titleText} />
  </StyledHeaderArticle>
);

HeaderArticle.propTypes = {
  type: PropTypes.string,
  sources: PropTypes.string,
  titleText: PropTypes.string,
  datetime: PropTypes.string
};

HeaderArticle.defaultProps = {
  type: '',
  sources: '',
  titleText: '',
  datetime: ''
};

export default HeaderArticle;
