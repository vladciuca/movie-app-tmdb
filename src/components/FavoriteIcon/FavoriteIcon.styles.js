import styled from "styled-components";

export const FavContainer = styled.div`
  position: absolute;
  bottom: 12px;
  right: 10px;
  height: 35px;
  width: 35px;
  border-radius: 999px;
  background-color: ${(props) => props.theme.cardPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3px;
`;
