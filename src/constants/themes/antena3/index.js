import styled, { injectGlobal, css } from 'styled-components';
import normalize from '../../../utils/normalize';
import { palette, breakpoints, zindex, fontSize, canales } from './variables';

injectGlobal`
  ${normalize()}

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
    background: #f9f9fb;
  }
  a, button {
    cursor: pointer;
  }
`;

const Antena3 = {
  palette,
  breakpoints,
  zindex,
  fontSize,
  canales,
  // ================
  // CORE COMPONENTS
  // ================

  // Crrusel Component
  Carrusel: {
    arrowsColor: palette.primary2Color
  },

  // Pelicula Component
  Pelicula: {
    borderColor: palette.primary1Color
  }
};

export { Antena3 };
