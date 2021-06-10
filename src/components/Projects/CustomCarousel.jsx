import "react-multi-carousel/lib/styles.css";
import { CarouselWrapper, StyledCarousel } from "./CustomCarouselStyles";
import { StyledCarouselItem } from "./CustomItem";
import key from "weak-key";

// need to edit this later for breakpoints
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1240 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1240, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

export const CarouselComponent = ({ content }) => {
  return (
    <CarouselWrapper>
      <StyledCarousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        infinite={true}
        renderDotsOutside={false}
        minimumTouchDrag={50}
        containerClass="carousel-container"
        itemClass="carousel-item"
        autoPlay={true}
        autoPlaySpeed={4000}
        arrows={window.innerWidth > 900 ? true : false}
      >
        {content.map((project, idx) => {
          return (
            <StyledCarouselItem
              project={project}
              key={key(project)}
            ></StyledCarouselItem>
          );
        })}
      </StyledCarousel>
    </CarouselWrapper>
  );
};
