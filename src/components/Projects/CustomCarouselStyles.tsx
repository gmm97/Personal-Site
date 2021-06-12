import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const CarouselWrapper = styled.div`
  margin: 3rem;
  @media screen and (max-width: 1320px) {
    margin: 3rem 1rem;
  }
  @media screen and (max-width: 1200px) {
    margin: 3rem 0;
  }
  @media screen and (max-width: 1240px) {
    margin: 3rem 2rem;
  }
  @media screen and (max-width: 980px) {
    margin: 3rem 0;
  }
  @media screen and (max-width: 700px) {
    margin: 3rem 5rem;
  }
  @media screen and (max-width: 420px) {
    margin: 3rem 3rem;
  }
`;

export const StyledCarousel = styled(Carousel)`
  &.carousel-container {
    width: 100%;
    padding-bottom: 1.5rem;
  }
  & > ul.react-multi-carousel-dot-list > li > button {
    border-color: #fadfda;
  }
  & > ul.react-multi-carousel-dot-list > li.react-multi-carousel-dot--active {
    button {
      background: teal;
    }
  }
`;
