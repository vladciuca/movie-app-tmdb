import styled from "styled-components";

export const Grid = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  max-width: 1000px;
  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  gap: 20px;
`;

export const PaginationContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
`;
