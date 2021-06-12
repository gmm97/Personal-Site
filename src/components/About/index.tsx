import React from "react";
import { MyTimeline, AboutSectionContentContainer } from "./styles";

import {
  SectionMainHeading,
  SectionSubHeading,
  SectionElaboration,
} from "../ReusableComponents/styles";
import { useScrollPast } from "../ReusableComponents/useScrollPast";
import { AboutDescription } from "../../components/About/content";

import { TimelineContainer } from "../Timeline/TimelineContainer";

interface AboutProps {
  AboutDescription: AboutDescription;
  height: number;
}

const About = React.forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  const scrollPast = useScrollPast(props);
  return (
    <AboutSectionContentContainer id="about" ref={ref}>
      <SectionMainHeading scrollPast={scrollPast}>About Me</SectionMainHeading>
      <SectionSubHeading>
        {props.AboutDescription.AboutPrimarySubHeading}
      </SectionSubHeading>
      <SectionElaboration>
        {props.AboutDescription.AboutPrimaryElaboration}
      </SectionElaboration>
      <SectionSubHeading>
        {props.AboutDescription.AboutSecondarySubHeading}
      </SectionSubHeading>
      <SectionElaboration>
        {props.AboutDescription.AboutSecondaryElaboration}
      </SectionElaboration>
      <MyTimeline>
        <TimelineContainer />
      </MyTimeline>
    </AboutSectionContentContainer>
  );
});

export default About;
