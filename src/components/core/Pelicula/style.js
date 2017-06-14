import styled from 'styled-components';

const StyledPelicula = styled.div`
	position: relative;
	max-width: 300px;
`;

const StyledImagen = styled.img`
	width: 100%;
	height: auto;
`;

const StyledInfoWrapper = styled.div`
	width: 100%;
	position: absolute;
	${props => props.infoPosition === 'top' ? 
	`top: 0;` : `bottom: 0`}
	left: 0;
	background-color: rgba(0, 0, 0, .8);	
	padding: 10px;
`;

const StyledInfo = styled.p`
	color: #FFF;
	font-size: 18px
	font-family: Arial, sans-serif;
	margin:0 0 5px 0;
`;

export { StyledPelicula, StyledImagen, StyledInfoWrapper, StyledInfo };
