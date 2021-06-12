import React from "react";
import { SkillsContentItem } from "../content";
import { SkillsRatingBox } from "./SkillsRatingBox";
import { SkillSectionWrapper } from "./styles";
import key from "weak-key";

interface SkillsResumeSectionProps {
  SkillsContent: SkillsContentItem[];
}

export const SkillsResumeSection = (props: SkillsResumeSectionProps) => {
  props.SkillsContent.sort((a, b) => b.Capability - a.Capability);
  return (
    <SkillSectionWrapper>
      {props.SkillsContent.map((SkillsContentItem: SkillsContentItem, idx) => {
        return (
          <React.Fragment key={key(SkillsContentItem) as React.Key}>
            <SkillsRatingBox SkillsContentItem={SkillsContentItem} />
          </React.Fragment>
        );
      })}
    </SkillSectionWrapper>
  );
};
