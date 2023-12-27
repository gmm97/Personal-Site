import React from "react";
import {
  SectionContentContainer,
  SectionMainHeading,
  SectionSubHeading,
  SectionElaboration,
} from "../ReusableComponents/styles";
import { useScrollPast } from "../ReusableComponents/useScrollPast";
import { CarouselComponent } from "./CustomCarousel";
import { CarouselContentItem, ProjectDescriptionSection } from "./content";

interface ProjectProps {
  ProjectDescription: ProjectDescriptionSection;
  height: number;
  CarouselContent: CarouselContentItem[];
}

const Projects = React.forwardRef<HTMLDivElement, ProjectProps>(
  (props, ref) => {
    const scrollPast = useScrollPast(props);
    return (
      <SectionContentContainer id="projects" ref={ref}>
        <SectionMainHeading scrollPast={scrollPast}>
          Projects
        </SectionMainHeading>
        <SectionSubHeading>
          {props.ProjectDescription.ProjectPrimarySubHeading}
        </SectionSubHeading>
        <SectionElaboration>
          {props.ProjectDescription.ProjectPrimaryElaboration}
        </SectionElaboration>
        <CarouselComponent CarouselContent={props.CarouselContent} />
      </SectionContentContainer>
    );
  }
);

export default Projects;
