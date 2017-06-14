import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../core/Title';
import Subtitle from '../../core/Subtitle';
import {
  StyledWrapperTopMenu,
  StyledImgMenuEspecial,
  StyledMenuEspecial,
  StyledContentMenuEspecial
} from './style';

const MenuDiaImage = ({ img, subtitle, title }) => (
  <StyledWrapperTopMenu>
    <StyledImgMenuEspecial>
      <img alt="" src={img} />
    </StyledImgMenuEspecial>
    <StyledMenuEspecial>
      <StyledContentMenuEspecial>
        <Title>
          {title}
        </Title>
        <Subtitle>
          {subtitle}
        </Subtitle>
      </StyledContentMenuEspecial>
    </StyledMenuEspecial>
  </StyledWrapperTopMenu>
);

MenuDiaImage.propTypes = {
  img: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

MenuDiaImage.defaultProps = {
  img: '',
  subtitle: '',
  title: ''
};

export default MenuDiaImage;
