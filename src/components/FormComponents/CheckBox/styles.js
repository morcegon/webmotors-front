import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;

  &:hover {
    cursor: pointer;
  }

  &.is-selected {
    .box {
      align-items: center;
      display: flex;
      justify-content: center;

      &::before {
        border-color: #cc2929;
        border-style: solid;
        border-width: 0 0 0.25rem 0.25rem;
        content: "";
        display: block;
        height: 0.4rem;
        position: absolute;
        transform: rotate(-45deg);
        width: 0.7rem;
      }
    }
  }
`;

export const Box = styled.div`
  border: solid 0.1rem #b5b5bf;
  border-radius: 0.2rem;
  height: 1.7rem;
  position: relative;
  width: 1.7rem;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Label = styled.div`
  color: #696976;
  font-size: 1.4rem;
`;
