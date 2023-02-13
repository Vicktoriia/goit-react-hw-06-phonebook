import styled from 'styled-components';

export const FilterLabel = styled.label`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
 `;
export const FilterInput = styled.input`
  height: 22px;
  padding: 0 8px;
  margin-top: 10px;
  border: 1px solid black;
  &:hover,
  &:focus {
    border: 2px solid orange;
  }
`;
