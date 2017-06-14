import styled from 'styled-components';

const borders = `
	border: 1px solid #AAA;
`;

const nospace = `
	margin: 0;
	padding: 0;
	line-height: 0;
	box-sizing: border-box;
`;

const clearfix = `
	content: "";
	display: block;
	clear: both;
	font-size: 0;
	line-height: 0;
`;

const splitStringEllipsis = (str = '', length = 200) => {
  const splitStr = str.length > length ? str.substring(0, length) : '';
  return splitStr;
};

export { borders, clearfix, nospace, splitStringEllipsis };
