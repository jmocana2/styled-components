import styled from 'styled-components';
import Button from '../../core/Button';

const StyledBodyArticle = styled.div`
    width: 100%;
`;

const StyledTextArticle = styled.p`
    font-family: 'Roboto Light';
    font-size: 1.2rem;
    line-height: 1.3;
    color: #061d28;

	${props => props.text.length > 150 && `		
		&:after {
			content: '[...]';
			cursor: pointer;
			margin-left: .5rem;
		}
	`};
`;

const StyledButton = styled(Button)`
    font-size: 0.82rem;
    line-height: 1;
    width: 6rem;
    height: 0.82rem;
    color: #fb2b3c;
    fill: #fb2b3c; /* para el color de svg */
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export { StyledBodyArticle, StyledTextArticle, StyledButton };
