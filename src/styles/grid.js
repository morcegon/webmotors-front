import styled from "styled-components";

export const Row = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const Column = styled.div`
  margin: 0 1.5rem;

  @media (max-width: 768px) {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  @media (min-width: 769px) {
    width: calc(100% * ${props => props.size || 1} / 12 - 3rem);
  }
`;
