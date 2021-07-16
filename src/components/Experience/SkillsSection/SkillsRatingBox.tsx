import React, { useState } from "react";
import {
  SkillContainer,
  SkillName,
  SkillBar,
  SkillBarWrapper,
  Associated,
  Project,
  StyledBsArrowLeftShort,
  StyledBsArrowRightShort,
  ProjectWrapper,
  ProjectItemWrapper,
} from "./SkillsRatingBoxStyles";
import { IconContext } from "react-icons";
import { SkillsContentItem } from "../content";

// Plan to add in associated projects relevant to the skills later on

interface SkillsRatingBoxProps {
  SkillsContentItem: SkillsContentItem;
}

export const SkillsRatingBox = (props: SkillsRatingBoxProps) => {
  const [visibleDetail, setvisibleDetail] = useState(0);
  const projectLength = props.SkillsContentItem.Projects?.length;

  const renderProject = (projectLength: number | undefined) => {
    if (projectLength === undefined || projectLength === 0) {
      return <React.Fragment></React.Fragment>;
    }
    return (
      <ProjectWrapper>
        <Associated>
          <StyledBsArrowLeftShort
            onClick={() => {
              setvisibleDetail(visibleDetail - 1);
            }}
          />
          <ProjectItemWrapper>
            {props.SkillsContentItem.Projects &&
              props.SkillsContentItem.Projects.map((project, idx) => {
                if (idx === visibleDetail % projectLength) {
                  return <Project key={project}>{project}</Project>;
                }
              })}
          </ProjectItemWrapper>
          <StyledBsArrowRightShort
            onClick={() => {
              setvisibleDetail(visibleDetail + 1);
            }}
          />
        </Associated>
      </ProjectWrapper>
    );
  };
  return (
    <IconContext.Provider value={{ color: "teal", size: "1rem" }}>
      <SkillContainer>
        <SkillName>{props.SkillsContentItem.Skill}</SkillName>
        <SkillBarWrapper>
          <SkillBar Capability={props.SkillsContentItem.Capability} />
        </SkillBarWrapper>
      </SkillContainer>
    </IconContext.Provider>
  );
};
