import styled from 'styled-components';

const StyledArticleAuthor = styled.div`
    width: 15.65rem;
    display: flex;
`;

const StyledTextAuthor = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 0.6rem;
`;

const StyledAuthor = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    flex: 2 0 0;
`;

const StyledRole = styled.p`
    font-size: 0.8rem;
    margin: 0;
    flex: 2 0 0;
`;

export { StyledArticleAuthor, StyledTextAuthor, StyledAuthor, StyledRole };
