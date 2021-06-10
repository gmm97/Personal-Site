import React from "react";
import { MyTimeline, AboutSectionContentContainer } from "./styles";

import {
  SectionMainHeading,
  SectionSubHeading,
  SectionElaboration,
} from "../ReusableComponents/styles";
import { useScrollPast } from "../ReusableComponents/useScrollPast";

import { TimelineContainer } from "../../components/Timeline/TimelineContainer";

const About = React.forwardRef((props, ref) => {
  const scrollPast = useScrollPast(props);
  return (
    <AboutSectionContentContainer id="about" ref={ref}>
      <SectionMainHeading scrollPast={scrollPast}>About Me</SectionMainHeading>
      <SectionSubHeading>A Brief Introduction</SectionSubHeading>
      <SectionElaboration>{props.Introduction}</SectionElaboration>
      <SectionSubHeading>A Brief Timeline</SectionSubHeading>
      <SectionElaboration>{props.propsElaboration}</SectionElaboration>
      <MyTimeline>
        <TimelineContainer />
      </MyTimeline>
    </AboutSectionContentContainer>
  );
});

export default About;
