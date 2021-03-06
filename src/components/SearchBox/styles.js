import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

export const CallToAction = styled.a`
  align-items: center;
  border: 0.2rem solid #f89e00;
  border-radius: 0.3rem;
  color: #f89e00;
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  height: 4rem;
  justify-content: center;
  text-decoration: none;
  transition: 0.2s ease-out;
  width: 20rem;

  @media (max-width: 599px) {
    margin-bottom: 2rem;
    order: 0;
    width: 100%;
  }

  &:hover {
    background-color: #f89e00;
    color: white;
  }
`;
