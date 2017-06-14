import styled from 'styled-components';

const StyledWrapperTabs = styled.div`
  overflow: hidden;
  display: ${props => props.vertical ? 'flex' : 'block'};
  position: ${props => props.vertical ? 'relative' : ''};
`;

const StyledUlTabs = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledLiTab = styled.li`
  border: 1px solid #ddd;
  border-top: none;
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  
  background: ${props => props.active ? '#eee' : '#fff'};
  border-right: ${props => props.vertical ? '1px solid #ddd' : ''};
`;

export { StyledWrapperTabs, StyledUlTabs, StyledLiTab };
