import styled, { css } from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &::after {
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid #4d4d4d;

    content: "";
    height: 0;
    position: absolute;
    right: 0;
    width: 0;
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const ClickArea = styled.div`
  width: 100%;
`;

export const OptionList = styled.div`
  background-color: white;
  box-sizing: border-box;
  border: 0.1rem solid #ccc;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  left: 0;
  margin: 0.8rem 0 0 0;
  position: absolute;
  top: 100%;
  width: 100%;
`;

export const Option = styled.div`
  font-size: 1.3rem;
  line-height: 150%;
  padding: 0 1rem;
  text-transform: uppercase;

  &:hover {
    background-color: #cc2929;
    color: white;
    cursor: pointer;
  }
`;
