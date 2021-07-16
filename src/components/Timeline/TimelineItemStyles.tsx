import styled from "styled-components";

interface FillElementCircleSolidOnClick {
  fillSolid: boolean;
}

export const TimelineItemWrapper = styled.div<FillElementCircleSolidOnClick>`
  justify-content: flex-end;
  position: relative;
  margin: 1rem 0;
  width: 45%;
  min-height: 5rem;
  display: flex;
  @media screen and (max-width: 600px) {
    justify-content: center;
    font-size: 0.5rem;
  }

  &::after {
    content: "";
    background-color: ${({ fillSolid }) =>
      fillSolid === true ? "#E8E8E8" : "#fadfda"};
    position: absolute;
    border: 0.3rem solid;
    border-color: ${({ fillSolid }) => (fillSolid ? "#fadfda" : "#e2ebf0")};
    border-radius: 50%;
    right: calc(-10.5% - 1rem);
    top: calc(50% - 0.75rem);
    width: 1rem;
    height: 1rem;
    z-index: 10;
  }

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    margin-left: 3rem;
    padding-right: 0;
    @media screen and (max-width: 600px) {
      justify-content: center;
    }
  }

  &:nth-child(odd)::after {
    left: calc(-10.5% - 1rem);
  }
`;

export const TimelineItemContent = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1.5rem;
  align-items: flex-end;
  width: 40rem;
  max-width: 50%;
  text-align: right;
  position: relative;

  ${TimelineItemWrapper}:nth-child(odd) & {
    text-align: left;
    align-items: flex-start;
  }

  &::after {
    content: "";
    background-color: #fff;
    box-shadow: 0.1rem -0.1rem 0.1rem rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -0.75rem;
    top: calc(50% - 0.75rem);
    transform: rotate(45deg);
    width: 1.5rem;
    height: 1.5rem;

    ${TimelineItemWrapper}:nth-child(odd) & {
      right: auto;
      left: -0.75rem;
      box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const TimelineTag = styled.div`
  color: ${(props) => props.color || "#E8E8E8"};
  font-size: 0.7rem;
  font-weight: bold;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.2rem;
  position: absolute;
  ${TimelineItemWrapper}:hover & {
    color: #000;
  }

  ${TimelineItemWrapper}:nth-child(odd) & {
    left: auto;
    right: 0.5rem;
  }
`;

export const TimelineText = styled.div`
  font-size: 0.7rem;
  margin: 1rem 0;
  line-height: 1rem;
`;
export const TimelineTime = styled.div`
  color: #000;
  font-size: 0.7rem;
  font-weight: bold;
  bottom: 0.5rem;
  right: 0.5rem;
  padding: 0.2rem;
  position: absolute;
`;
