import styled from 'styled-components';

const CollapsibleStyle = styled.ul`
    padding-left: 0;
    list-style-type: none;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    margin: .5rem 0 1rem 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`;

const CollapsibleItemStyle = styled.li`
    list-style-type: none;
    display: list-item;
`;

const CollapsibleItemHeaderStyle = styled.div`
    display: block;
    cursor: pointer;
    min-height: 3rem;
    line-height: 3rem;
    padding: 0 1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
`;

const CollapsibleItemBodyStyle = styled.div`
    display: block;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    padding: 2rem;
`;

export {
  CollapsibleStyle,
  CollapsibleItemStyle,
  CollapsibleItemHeaderStyle,
  CollapsibleItemBodyStyle
};
