import styled, { css } from 'styled-components';

const styles = css`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  border-radius: 2px;

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`;

const StyledWrapper = styled.div``;
const StyledTextarea = styled.textarea`${styles}`;
const StyledInput = styled.input`${styles}`;

export { StyledWrapper, StyledTextarea, StyledInput };
