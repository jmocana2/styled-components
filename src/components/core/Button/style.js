import styled from 'styled-components';
import SVG from '../SVG';

// Si la prop raised existe se pintara un botón standard
// en caso contrario se pintara un botón sin borde
// xxx: ${ props => props.raised ? 'aaaa' : 'bbbbb'}
const StyledStandardButton = styled.button`
    display: inline-flex;
`;
const StyledLinkButton = styled.a`
    display: inline-flex;
`;
const StyledSVG = styled(SVG)`
    flex: 1;
`;
const StyledText = styled.span`
    flex: 2;
`;

export { StyledStandardButton, StyledLinkButton, StyledSVG, StyledText };
