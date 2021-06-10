import styled from "styled-components";

export const CarouselItemWrapper = styled.div`
  height: 25rem;
  .carousel-item & {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const CarouselImage = styled.img`
  background-size: cover;
  background-position: center;
  height: 75%;
`;

export const CarouselText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 25%;
`;
export const ProjectName = styled.div`
  font-size: 0.7rem;
  line-height: 1rem;
  margin: 0.5rem;
  ${CarouselItemWrapper}:hover & {
    display: none;
  }
`;
export const Organisation = styled.div`
  font-size: 0.7rem;
  margin: 0.5rem;
  color: teal;
  ${CarouselItemWrapper}:hover & {
    display: none;
  }
`;
export const Description = styled.div`
  display: none;
  ${CarouselItemWrapper}:hover & {
    font-size: 0.7rem;
    line-height: 1rem;
    display: block;
    margin: 1rem;
  }
`;
export const CarouselBody = styled.div`
  width: 90%;
  height: 90%;
  border: solid 1px #fadfda;
  background-color: #f8f8f8f8;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
`;

export const KeywordTag = styled.div`
  font-size: 0.5rem;
  text-align: center;
  padding: 0.3rem;
  margin: 0.1rem;
  border-radius: 0.2rem;
  background-color: #f8f8f8f8;
  opacity: 0.4;
  transition: opacity 1s;
  ${CarouselItemWrapper}:hover & {
    opacity: 1;
  }
`;

export const KeywordTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const Progress = styled.div`
  font-size: 0.5rem;
  padding: 0.3rem;
  border-radius: 0.2rem;
  margin: 0.1rem;
  background-color: ${({ progress }) =>
    progress.toLowerCase() === "completed" ? "#3CB371" : "#FFE4B5"};
  opacity: 0.4;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  transition: opacity 1s;
  ${CarouselItemWrapper}:hover & {
    opacity: 1;
  }
`;
//
