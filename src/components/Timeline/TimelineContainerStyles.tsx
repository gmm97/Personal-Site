import styled from "styled-components";

export const TimeLineContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 4rem 0;
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
