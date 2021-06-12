import React from "react";
import {
  SkillContainer,
  SkillName,
  SkillBar,
  SkillBarWrapper,
} from "./SkillsRatingBoxStyles";
import { SkillsContentItem } from "../content";

// Plan to add in associated projects relevant to the skills later on

interface SkillsRatingBoxProps {
  SkillsContentItem: SkillsContentItem;
}

export const SkillsRatingBox = (props: SkillsRatingBoxProps) => {
  return (
    <SkillContainer>
      <SkillName>{props.SkillsContentItem.Skill}</SkillName>
      <SkillBarWrapper>
        <SkillBar Capability={props.SkillsContentItem.Capability} />
      </SkillBarWrapper>
      {/* <Associated>
        {entry.projects.map((project, idx) => {
          return <Project key={project}>{project}</Project>;
        })}
      </Associated> */}
    </SkillContainer>
  );
};
