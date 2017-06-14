import styled from 'styled-components';

const fontFamily = props => `
	font-family: ${props.fontFamily ? props.fontFamily : 'Time news roman' }
	margin-top: 0;		
`;

const StyledTitleArticle = styled.h1`

	${fontFamily};

	${ props => props.format && `
		font-size: ${typeof (props.format) === "string" ? props.format + "%" : "200%" }
	`}
`;

export { StyledTitleArticle };
