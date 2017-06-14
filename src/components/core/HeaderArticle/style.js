import styled from 'styled-components';
import StyledLinkButton from '../Button';
import StyledPicture from '../Picture';
import StyledImage from '../Image';

const Default = props =>
  `
	max-width: ${props.maxwidth ? props.maxwidth : '1024px'};
	margin: 0 auto;
	padding: 0;
`;

const StyledContentImage = styled(StyledPicture)`
	left: -2rem;
	width: calc(100% + 4rem);
`;

const StyledHeaderImage = styled(StyledImage)`
	width: 100%;
`;

const StyledHeaderArticle = styled.header`
	${Default};
`;

const StyleCategory = styled(StyledLinkButton)`
	text-decoration: none;
	color: #FFF;
	background: ${props => props.theme.category[props.type] ? props.theme.category[props.type] : '#000'};
	text-transform: lowercase;
	font-variant: small-caps;
	padding: .2rem .5rem;	
`;

export {
  StyledHeaderArticle,
  StyledContentImage,
  StyledHeaderImage,
  StyleCategory
};
