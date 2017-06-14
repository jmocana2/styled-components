import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledTemplate,
  StyledTemplateContent,
  StyledTemplateSelector
} from './style';
import Imagen from '../Image';
import Sources from '../SourcePicture';
import Picture from '../Picture';
import Input from '../Input';

class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, type, format } = this.props;

    return (
      <StyledTemplate>
        <StyledTemplateContent className={format}>
          <Picture>
            <Sources
              srcSet="http://placehold.it/400x225"
              media="(max-width: 767px)"
            />
            <Sources
              srcSet="http://placehold.it/600x400"
              media="(max-width: 1023px)"
            />
            <Sources
              srcSet="http://placehold.it/1024x525"
              media="(min-width: 1024px)"
            />
            <Imagen
              src="http://placehold.it/1024x525"
              width="1024"
              height="525"
            />
          </Picture>
          {text ? <p>{text}</p> : null}
        </StyledTemplateContent>
        <StyledTemplateSelector>
          <Input type={type} />
        </StyledTemplateSelector>
      </StyledTemplate>
    );
  }
}

Template.propTypes = {
  text: PropTypes.text,
  type: PropTypes.type,
  format: PropTypes.format
};

Template.defaultProps = {
  text: false,
  type: 'radio',
  format: null
};

export default Template;
