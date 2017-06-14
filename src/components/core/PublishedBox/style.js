import styled from 'styled-components';

const Default = props =>
  `
	color: ${props.color ? props.color : '#777'};
	font-size: ${props.sizefont ? props.sizefont : '90%'};
`;

const StyledPublishedBox = styled.p`
	${Default};
`;

export { StyledPublishedBox };
