import styled from 'styled-components';
import { small, medium, large, big } from '../../../utils';
import { Tab } from '../../core/Tabs';
import DateLabel from '../../core/DateLabel';
import SVG from '../../core/SVG';

/**
 * Se puede crear mediaqueries importando los tamaños y creando los mediaqueries de forma manual.
 * Otra opción es utilizar la función responsiveStyle que recibe como argumentos el tamaño de media query
 * y el estilo a aplicar
 */
const StyledWrapperMenu = styled.section`
  overflow: hidden;
  display: block;
  position: relative;
  @media (${small}){
    width: 100%;
  }
  @media (${medium}){
    width: 100%;
  }
  @media (${large}){
    width: 100%;
  }
  @media (${big}){
    width: 100%;
  }
`;

const StyledWrapperTopMenu = styled.div`
    overflow: hidden;
    display: block;
    position: relative;
`;

const StyledImgMenuEspecial = styled.div`
    overflow: hidden;
    display: block;
    height: 8rem;
    >* {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
    }
`;

const StyledMenuEspecial = styled.div`
    display: block;
    width: 85%;
    height: 3.5rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;  

    &:before {
        position: absolute;
        z-index: 1;
        content: "";
        width: 100%;
        height: 3.5rem;
        left: 0;
        background: rgba(255, 255, 255, 0.7);
    }
`;

const StyledContentMenuEspecial = styled.div`
    position: absolute;
    right: 3rem;
`;

const StyledTab = styled(Tab)`
    overflow: hidden;
    display: block;
    padding: 0;
    width: ${props => props.active ? '10.6rem' : '10rem'};
    height: 3.75rem;
    border: 0;
    border-bottom: ${props => props.active ? '0' : '2px solid #ced5d8'};
    background: ${props => props.active ? '#f0a81d' : '#f3f4f6'};
    color: ${props => props.active ? '#fff' : '#85959d'};
    position: relative;
    z-index: 2;
`;

const StyledContentTitleTab = styled.div`
    overflow: hidden;
    display: block;
    padding: 0.4rem 0 0 0.9rem;
`;

const StyledTitleTab = styled.p`
    font-size: 0.85rem;
    line-height: 1.3;
    margin: 0;
    padding: 0.5rem 0 0 0.45rem;
    display: inline-block;
    text-transform: uppercase;
    width: 74%;
`;

const StyledIcon = styled(SVG)`
    width: 1.8rem;
    height: 1.8rem;
    vertical-align: bottom;
    margin: 0.5rem 0 0;
    fill: ${props => props.active ? '#fff' : '#85959d'};
`;

const StyledWrapperListaMenu = styled.div`
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    background: #f3f4f6;
    position: absolute;
    left: 10rem;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-left: 3px solid #fff;
`;

const StyledListaMenu = styled.ul`
    list-style: none;
    width: 19rem;
    columns: 2;
    column-gap: 2rem;
    column-rule: 2px outset #ced5d8;
    font-size: 0.9rem;
`;

const StyledDate = styled(DateLabel)`
    top: ${props => props.special ? '0.2rem' : '0'};
    right: ${props => props.special ? '0.2rem' : '0'};
    background: ${props => props.special ? '#f0a81d' : '#0a2c3c'};
`;

export {
  StyledWrapperMenu,
  StyledWrapperTopMenu,
  StyledImgMenuEspecial,
  StyledMenuEspecial,
  StyledContentMenuEspecial,
  StyledTab,
  StyledContentTitleTab,
  StyledIcon,
  StyledTitleTab,
  StyledWrapperListaMenu,
  StyledListaMenu,
  StyledDate
};
