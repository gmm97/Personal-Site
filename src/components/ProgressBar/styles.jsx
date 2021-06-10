import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  height: 2rem;
  border-radius: inherit;
  position: relative;
`;

export const FillerStyles = styled.div`
  border-radius: inherit;
  height: 2rem;
  width: ${({ scrollNav }) => (scrollNav > 20 ? scrollNav + "%" : 0)};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: teal;
  transition: width 0.1s linear;
  position: relative;
`;

export const PercentageStyles = styled.div`
  color: white;
  padding-right: 0.7rem;
  position: ${({ scrollNav }) => (scrollNav > 30 ? "relative" : "absolute")};
  left: ${({ scrollNav }) => (scrollNav > 30 ? "0" : "1rem")};
`;
