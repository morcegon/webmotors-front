import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  box-shadow: 1px 1px 1px rgba(174, 174, 181, 0.2);
  padding: 2.25rem 2rem;
`;

export const AdvancedSearch = styled.a`
  color: #cc2929;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &::before {
    content: "› ";
    font-weight: 700;
  }
`;

export const ClearFilters = styled.div`
  font-size: 15px;
  color: #8b8b97;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const GetOffers = styled.button`
  align-items: center;
  border: none;
  background-color: #cc2929;
  border-radius: 0.3rem;
  color: white;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  padding: 1.5rem 0;
  text-transform: uppercase;
  transition: 0.2s ease-in;
  width: 100%;

  &:hover {
    background-color: #f54747;
    cursor: pointer;
  }
`;
