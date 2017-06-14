import { css } from 'styled-components';

const small = 'min-width: 768px';
const medium = 'min-width: 992px';
const large = 'min-width: 1200px';
const big = 'min-width: 1441px';
const defaultColumns = 12;

const responsiveGrid = (
  columns = 0,
  padding = 0
) => css`calc((100% / (${defaultColumns} / ${columns})) - ${padding}px)`;

export { small, medium, large, big, responsiveGrid };
