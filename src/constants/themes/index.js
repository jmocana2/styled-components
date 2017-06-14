import styled, { injectGlobal, css } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Roboto';
    src: url('../../public/fonts/roboto-regular.woff2') format('woff2'),
         url('../../public/fonts/roboto-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Bold';
    src: url('../../public/fonts/roboto-bold.woff2') format('woff2'),
         url('../../public/fonts/roboto-bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Light';
    src: url('../../public/fonts/roboto-light.woff2') format('woff2'),
         url('../../public/fonts/roboto-light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Playfairdisplay';
    src: url('../../public/fonts/playfairdisplay-regular.woff2') format('woff2'),
         url('../../public/fonts/playfairdisplay-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'DINPro';
    src: url('../../public/fonts/DINPro.woff2') format('woff2'),
         url('../../public/fonts/DINPro.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size: 100%;
  }
  body{
    font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.42857143;
    margin: 0;
    color: #061d28;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, :after, :before {
    box-sizing: border-box;
    outline: none;
//    margin: 0;
  }
  a, button {
    cursor: pointer;
  }
`;

const Button = styled.button`
  cursor: pointer;
  line-height: 1.42857143;
  touch-action: manipulation;
  user-select: none;
  outline:0;
`;

const Theme = {
  bodyBackground: '#181818', // 3
  barBackground: '#272727',
  icoPlusBackground: '#404040',
  icoPlusColor: '#1d1d1d', // 3
  followTickColor: '#00be2d',
  followTextColor: '#fff', // 2
  verRelacionadosBackground: '#1d1d1d',
  colorContainerTituloTiempo: '#f8f8f8',
  tiempoVideoColor: '#666',
  relatedTextoColor: '#fff',
  containerFiltroVideoBackground: '#1d1d1d',
  listBackground: '#181818',
  backgroundContainerTituloTiempo: '#181818',
  category: {
    news: 'red',
    sports: 'blue',
    programs: 'orange'
  }
};

const LabelEffect = css`
  display: block;
  background: #272727;
  color: #666;
  left: 2px;
  padding: 0 10px;
  position: absolute;
  top: -6px;
  -webkit-transition: .2s;
  transition: .2s;
  opacity: 0;
`;

const FocusEffect = css`
  &:focus+label {
    top: -6px;
    font-size: 12px;
    z-index: 2;
    opacity: 1;
  }
`;

export { Button, Theme, LabelEffect, FocusEffect };
