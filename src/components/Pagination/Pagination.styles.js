import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  cursor: pointer;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 999px;
  background-color: ${(props) => props.theme.primary};
  margin: 0 10px;
`;
