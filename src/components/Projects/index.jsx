import React from "react";
import {
  SectionContentContainer,
  SectionMainHeading,
  SectionSubHeading,
  SectionElaboration,
} from "../ReusableComponents/styles";
import { useScrollPast } from "../ReusableComponents/useScrollPast";
import { CarouselComponent } from "./CustomCarousel";

const Projects = React.forwardRef((props, ref) => {
  const scrollPast = useScrollPast(props);
  const description = props.description;
  const content = props.content;
  return (
    <SectionContentContainer id="projects" ref={ref}>
      <SectionMainHeading scrollPast={scrollPast}>Projects</SectionMainHeading>
      <SectionSubHeading>{description.Introduction}</SectionSubHeading>
      <SectionElaboration>{description.Elaboration}</SectionElaboration>
      <CarouselComponent content={content} />
    </SectionContentContainer>
  );
});

export default Projects;
