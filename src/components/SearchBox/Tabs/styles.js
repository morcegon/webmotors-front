import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 599px) {
    order: 1;
  }
`;

export const Tab = styled.div`
  align-items: center;
  border-bottom: 0.1rem solid #d8d8d8;
  color: #a1a0a5;
  display: flex;
  padding: 0 2rem 1rem 2rem;
  transition: 0.1s;

  @media (max-width: 599px) {
    flex: 1;
  }

  &.is-active {
    border-color: #cc2929;
    border-width: 0.3rem;

    .label {
      strong {
        color: #cc2929;
      }
    }

    svg {
      path {
        fill: #cc2929;
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  @media (max-width: 349px) {
    display: none;
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  svg {
    path {
      fill: #868698;
    }

    height: 1.6rem;
    vertical-align: middle;
  }
`;

export const Label = styled.div`
  font-size: 2rem;
  text-transform: uppercase;

  strong {
    font-weight: 400;
  }

  small {
    display: block;
    font-size: 1rem;
  }
`;
