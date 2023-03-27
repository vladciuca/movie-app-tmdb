import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 30px;
  max-width: 1000px;
  display: flex;
  background-color: ${(props) => props.theme.cardPrimary};
  border-radius: 1.5rem;
`;

export const SearchInput = styled.input`
  padding: 0 20px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.cardPrimary};
  border-radius: 1.5rem 0 0 1.5rem;
  width: 80%;
  @media (min-width: 768px) {
    width: 90%;
  }
  height: 40px;
  outline: none;
  border: none;
`;

export const SearchIcon = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-radius: 1.5rem;
  width: 20%;
  @media (min-width: 768px) {
    width: 10%;
  }
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
