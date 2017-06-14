import styled from 'styled-components';
import { borders } from '../../../utils/mixins';

const StyledImage = styled.img`
	width: auto;
	max-width: 100%;
	height: auto;
	${borders};
	border-radius: ${props => props.round && '100%'};
`;

export default StyledImage;
