import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const Column = styled.div`
  margin: 0 1.5rem;
  width: calc(100% * ${props => props.size || 1} / 12 - 3rem);
`;
