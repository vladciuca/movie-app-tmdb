import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 1rem;
  height: 660px;
  @media (min-width: 992px) {
    height: 350px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 1rem;
  width: 100%;
  height: 660px;
  @media (min-width: 992px) {
    height: 350px;
  }
`;

export const NoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 1rem;
  width: 100%;
  height: 660px;
  @media (min-width: 992px) {
    height: 350px;
  }
`;

export const Info = styled.div`
  padding: 10px 0;
`;

export const Title = styled.div`
  font-size: 1.2rem;
`;

export const Release = styled.div`
  color: ${(props) => props.theme.textLight};
  font-size: 0.9rem;
  padding: 7.5px 0;
`;
