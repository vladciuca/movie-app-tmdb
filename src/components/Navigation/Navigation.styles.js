import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  margin: 30px auto;
  border-radius: 1rem;
  max-width: 1000px;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;
`;

export const Category = styled.div`
  cursor: pointer;
  font-size: 1.1rem;
  margin: 20px 0;
  padding: 7.5px 20px;
  border-radius: 1rem;
  background-color: ${({ active }) =>
    active
      ? css`
          ${(props) => props.theme.primary}
        `
      : "none"};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;
