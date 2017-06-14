import styled from 'styled-components';
import { borders, nospace, clearfix } from '../../../utils/mixins';

const template = props =>
  `
	${borders};
	padding: ${props.padding ? props.padding : '1%'};
`;

const StyledTemplate = styled.section``;

const StyledTemplateContent = styled.div`
	${template};
	
	&.invested {
		display: flex;
		flex-direction: column;
	
		picture {
			order: 2;				
		}
		p {
			order: 1;
		}
	}

	&.float {
		picture {
			width: auto;
			float: left;
			margin: 0 2rem 2rem 0;
			max-width: 50%;
		}
		p {				
			width: auto;
			max-width: none;
			margin-top: 0;
		}
		
		&:after {
			${clearfix};
		}
	}

	p {
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	@media only screen and (min-width: 1024px) {
		p {
			max-width: 1024px;
		}
	}	
`;

const StyledTemplateSelector = styled.div`
	${template};
	border-top: 0;
	text-align: right;
`;

export { StyledTemplate, StyledTemplateContent, StyledTemplateSelector };
