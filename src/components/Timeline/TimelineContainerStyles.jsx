import styled from "styled-components";

export const TimeLineContainerWrapper = styled.div`
  display: flex;
  flex-direction: column; // this may be changed depending on the arrangement
  position: relative;
  margin: 4rem 0; //top margin is 4rem and side margins are 0
  flex: 1 0 100%;

  &::after {
    background-color: #cfd9df;
    content: "";
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
`;
