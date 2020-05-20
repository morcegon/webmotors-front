import styled from "styled-components";

export const Field = styled.div`
  align-items: center;
  border-color: #ccc;
  border-radius: 0.3rem;
  border-style: solid;
  border-width: 0.1rem;
  display: flex;
  padding: 0.5em 0.5em;
  position: relative;

  &:hover {
    &:not([disabled]) {
      border-color: #4d4d4d;
    }
  }

  svg {
    color: #cc2929;
    margin-right: 0.5rem;
  }

  .input,
  .value {
    border: none;
    color: #4d4d4d;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

export const Label = styled.span`
  color: gray;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;
