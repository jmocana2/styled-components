import styled from 'styled-components';

const StyledDate = styled.div`
    overflow: hidden;
    display: block;
    width: 3.15rem;
    height: 3.15rem;
    text-align: center;
    position: absolute;
    z-index: 2;
    color: #fff;
`;

const StyledDay = styled.p`
    font-size: 1.85rem;
    line-height: 1;
    font-weight: bold;
    margin: 0;
`;
const StyledMonth = styled.p`
    font-size: 1.1rem;
    line-height: 1;
    text-transform: uppercase;
    margin: 0;
`;

export { StyledDate, StyledDay, StyledMonth };
