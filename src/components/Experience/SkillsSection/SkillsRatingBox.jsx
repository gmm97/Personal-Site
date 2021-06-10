import React from "react";
import {
  SkillContainer,
  SkillName,
  SkillBar,
  SkillBarWrapper,
} from "./SkillsRatingBoxStyles";

export const SkillsRatingBox = ({ entry }) => {
  return (
    <SkillContainer>
      <SkillName>{entry.skill}</SkillName>
      <SkillBarWrapper>
        <SkillBar capability={entry.capability} />
      </SkillBarWrapper>
      {/* <Associated>
        {entry.projects.map((project, idx) => {
          return <Project key={project}>{project}</Project>;
        })}
      </Associated> */}
    </SkillContainer>
  );
};
