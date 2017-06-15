import styled from 'styled-components';

const StyledPelicula = styled.div`
position: relative;
max-width: 300px;
border: 10px ${props => props.theme.Pelicula.borderColor} solid;
`;

const StyledImagen = styled.img`
width: 100%;
height: auto;
`;

const StyledInfoWrapper = styled.div`
width: 100%;
position: absolute;
${props => props.infoPosition === 'top' ? `top: 0;` : `bottom: 0;`}
left: 0;
background-color: rgba(0, 0, 0, .8);
padding: 10px 0;
`;

const StyledInfo = styled.p`
color: ${props => props.canal ? props.theme.canales[props.canal].color : `#FFF`};
font-size: 18px;
font-family: Arial, sans-serif;
margin:0 0 5px 0;
text-align: center;
`;

export { StyledPelicula, StyledImagen, StyledInfoWrapper, StyledInfo };
