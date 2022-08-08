import React from "react";
import { EducationResumeSection } from "./EducationSection/EducationResumeSection";
import {
  SubSectionLinkContainer,
  SubsectionLink,
  ResumeContainer,
  ResumeSectionHeader,
  MainSection,
} from "./styles";

import {
  SectionContentContainer,
  SectionMainHeading,
} from "../ReusableComponents/styles";

import { useScrollPast } from "../ReusableComponents/useScrollPast";

import { WorkResumeSection } from "./WorkSection/WorkResumeSection";
import { SkillsResumeSection } from "./SkillsSection";
import { ActivitiesResumeSection } from "./ActivitiesSection/ActivitiesResumeSection";
import { CourseSection } from "./CourseSection/CourseSection";
import {
  VisibleCourseData,
  AllCoursesData,
  ActivitiesData,
  EducationData,
  SkillsContent,
  WorkExperienceData,
} from "./content";
import { CourseDescription } from "./CourseSection/content";
import { SkillsDescription } from "./SkillsSection/content";

interface ExperienceProps {
  height: number;
}

const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>(
  (props, ref) => {
    const scrollPast = useScrollPast(props);
    return (
      <SectionContentContainer id="work" ref={ref}>
        <SectionMainHeading scrollPast={scrollPast}>
          My Resume
        </SectionMainHeading>
        <SubSectionLinkContainer>
          <SubsectionLink
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            offset={window.innerWidth > 900 ? -16 : -96}
          >
            Education
          </SubsectionLink>
          <SubsectionLink
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={window.innerWidth > 900 ? -16 : -96}
          >
            Experience
          </SubsectionLink>
          {/* <SubsectionLink
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={window.innerWidth > 900 ? -16 : -96}
          >
            Skills
          </SubsectionLink> */}
          <SubsectionLink
            to="courses"
            smooth={true}
            duration={500}
            spy={true}
            offset={window.innerWidth > 900 ? -16 : -96}
          >
            Courses
          </SubsectionLink>
          <SubsectionLink
            to="activities"
            smooth={true}
            duration={500}
            spy={true}
            offset={window.innerWidth > 900 ? -16 : -96}
          >
            Activities
          </SubsectionLink>
        </SubSectionLinkContainer>
        <ResumeContainer>
          <MainSection id="education">
            <ResumeSectionHeader>Education</ResumeSectionHeader>
            <EducationResumeSection EducationData={EducationData} />
          </MainSection>
          <MainSection id="experience">
            <ResumeSectionHeader>Experience</ResumeSectionHeader>
            <WorkResumeSection WorkExperienceData={WorkExperienceData} />
          </MainSection>
          {/* <MainSection id="skills">
            <ResumeSectionHeader>Skills</ResumeSectionHeader>
            <SkillsResumeSection
              SkillsContent={SkillsContent}
              SkillsDescription={SkillsDescription}
            />
          </MainSection> */}
          <MainSection id="courses">
            <ResumeSectionHeader>Courses</ResumeSectionHeader>
            <CourseSection
              VisibleCourseData={VisibleCourseData}
              AllCoursesData={AllCoursesData}
              CourseDescription={CourseDescription}
            />
          </MainSection>
          <MainSection id="activities">
            <ResumeSectionHeader>Activities</ResumeSectionHeader>
            <ActivitiesResumeSection ActivitiesData={ActivitiesData} />
          </MainSection>
        </ResumeContainer>
      </SectionContentContainer>
    );
  }
);

export default Experience;
