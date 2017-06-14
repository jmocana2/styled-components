import styled from 'styled-components';
import SVG from '../SVG';

const StyledIconButton = styled.button``;
const StyledLinkIconButton = styled.a`
	display: block;
	${ props => props.small && `
		width: 25px;
		height: 25px;
	`};
	
	${ props => props.big && `
		width: 75px;
		height: 75px;
	`};
`;
const StyledSVG = styled(SVG)`
	fill: grey;
	width: 100%;
	height: 100%;
`;

export { StyledIconButton, StyledLinkIconButton, StyledSVG };
