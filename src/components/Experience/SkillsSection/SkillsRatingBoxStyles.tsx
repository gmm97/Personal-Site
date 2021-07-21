import styled, { keyframes, css } from "styled-components";

const toggleColor = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
`;

interface capabilityProps {
  capability: number;
}

export const FrameworkWrapper = styled.div<capabilityProps>`
  color: ${({ capability }) => {
    if (capability >= 80) {
      return "#3CB371";
    } else if (capability >= 50) {
      return "#FFD700";
    } else {
      return "#FF7F50";
    }
  }};
  margin: 1rem;
  @media only screen and (max-width: 700px) {
    margin: 0.5rem;
  }
`;

export const FrameworkComponentWrapper = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
  justify-content: space-between;
  font-size: 0.8rem;
  margin: 0.5rem;
`;

export const SkillName = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  &::before,
  &::after {
    content: "---";
    margin: auto;
    width: 3rem;
  }
  &::before {
    margin-right: 1rem;
  }
  &::after {
    margin-left: 1rem;
  }
  color: #ffb6c1;
  animation: ${toggleColor} 1s ease-in-out infinite;
`;

export const SkillAndFrameworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
