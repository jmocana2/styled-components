import styled from 'styled-components';
import {borders, nospace} from '../../../utils/mixins';

const Default = `
	position: relative;
	display: block;
	width: 100%;
	text-align: center;
`;

const StyledPicture = styled.picture`
	${ Default };
	${ nospace };
	
	${ props => props.round && `
		overflow: hidden;
		border-radius: 50%;
		border: 0;
		margin: 0 auto;
		
		height: 300px;
		width: 300px;
		
		@media only screen and (min-width: 768px) {
			height: 400px;
			width: 400px;
		}
		@media only screen and (min-width: 1024px) {
			height: 600px;
			width: 600px;
		}
	`};
`;

export { StyledPicture };