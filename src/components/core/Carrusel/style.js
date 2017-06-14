import styled from 'styled-components';

const StyledCarrusel = styled.div`
	width: 100%;
	position: relative;
`;

const StyledNav = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	list-style: none;
	margin: -20px 0 0 0;
	padding: 0 20px;
	position: absolute;
	top: 50%;
`;

const StyledNavItem = styled.li`
	 font-size: 80px;
	 line-height: 40px;
	 cursor: pointer;
`;

const StyledCarruselWrapper = styled.div`
	padding: 0 70px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

`;

export { StyledCarrusel, StyledNav, StyledNavItem, StyledCarruselWrapper };
