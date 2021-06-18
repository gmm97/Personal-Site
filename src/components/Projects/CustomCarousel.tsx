import "react-multi-carousel/lib/styles.css";
import { CarouselWrapper, StyledCarousel } from "./CustomCarouselStyles";
import { StyledCarouselItem } from "./CustomItem";
import key from "weak-key";
import { CarouselContentItem } from "./content";
import { ResponsiveType } from "react-multi-carousel";

const responsive: ResponsiveType = {
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

interface CarouselContentProps {
  CarouselContent: CarouselContentItem[];
}

export const CarouselComponent = (props: CarouselContentProps) => {
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
        {props.CarouselContent.map((project: CarouselContentItem, idx) => {
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
