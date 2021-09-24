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
  color: #000;
  margin: 1rem;
  position: relative;
  &:hover {
    color: teal;
    cursor: pointer;
  }
  @media only screen and (max-width: 900px) {
    margin: 1rem;
  }
`;

export const FrameworkComponentWrapper = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
  justify-content: space-between;
  font-size: 0.8rem;
  margin: 0.5rem;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SkillName = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;

  &::before,
  &::after {
    content: "---";
    margin: 0.3rem;
  }
  &::before {
    margin-right: 1rem;
  }
  &::after {
    margin-left: 1rem;
  }
  @media only screen and (max-width: 700px) {
    width: 90%;
    text-align: center;
    background-color: #ffb6c1;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 0.8rem;
  }
  color: teal;
  animation: ${toggleColor} 5s ease-in-out infinite;
`;

export const SkillAndFrameworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
