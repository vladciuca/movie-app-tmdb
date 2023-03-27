import styled, { keyframes } from "styled-components";

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

const loading = keyframes`
  from {
    left: -50%;
  }
  to {
    left: 100%;
  }
`;

export const SkeletonThumbnail = styled.div`
  max-width: 100%;
  height: 660px;
  @media (min-width: 992px) {
    height: 350px;
  }
  background: ${(props) => props.theme.bgPrimary};
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -50%;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${(props) => props.theme.bgSecondary} 50%,
      transparent 100%
    );
    animation: ${loading} 1.5s ease-in-out infinite;
  }
`;

export const SkeletonText = styled.div`
  background: ${(props) => props.theme.bgPrimary};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 10px 0;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -50%;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${(props) => props.theme.bgSecondary} 50%,
      transparent 100%
    );
    animation: ${loading} 1.5s ease-in-out infinite;
  }
`;
