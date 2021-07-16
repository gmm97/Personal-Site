import styled, { css, keyframes } from "styled-components";

interface AnimateWhenScrollPast {
  scrollPast: boolean;
}

export const SectionContentContainer = styled.div`
  margin: 2rem;
  width: calc(100% - 4rem);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    margin: 1rem;
    width: calc(100% - 2rem);
  }
  @media screen and (max-width: 900px) {
    margin: 1rem 0;
    width: calc(100%);
  }
`;

export const SectionMainHeading = styled.div<AnimateWhenScrollPast>`
  margin-left: 2rem;
  line-height: 3rem;
  margin-top: 2.5rem;
  padding-bottom: 1.6rem;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 0.25rem;
  border-bottom: solid #f8f8f8f8 0.2rem;
  animation: ${({ scrollPast }) =>
    scrollPast
      ? css`
          2s ${toggleColor} ease-out 
        `
      : ""};
`;

export const SectionSubHeading = styled.div`
  margin-left: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 1.6rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #cfd9df;
`;

export const SectionElaboration = styled.div`
  margin-left: 2rem;
  margin-right: 2.5rem;
  line-height: 1.5rem;
  font-size: 0.7rem;
`;

const toggleColor = keyframes`
  0% {
    color: inherit;
    opacity: 1;
  }

  80% {
    color: #ffb6c1;
    opacity: 1;
  }

  100% {
    color: inherit;
    opacity: 1;
  }
`;
