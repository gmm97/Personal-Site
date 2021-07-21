import React from "react";
import { SkillsContentItem } from "../content";
import { SkillsRatingBox } from "./SkillsRatingBox";
import { SkillsDescription } from "./content";
import { SkillSectionWrapper, SectionWrapper } from "./styles";
import {
  SectionSubHeading,
  SectionElaboration,
} from "../../ReusableComponents/styles";
import key from "weak-key";

interface SkillsResumeSectionProps {
  SkillsContent: SkillsContentItem[];
  SkillsDescription: SkillsDescription;
}

export const SkillsResumeSection = (props: SkillsResumeSectionProps) => {
  return (
    <SectionWrapper>
      <SectionSubHeading>
        {props.SkillsDescription.SkillsPrimarySubHeading}
      </SectionSubHeading>
      <SectionElaboration>
        {props.SkillsDescription.SkillsPrimaryElaboration}
      </SectionElaboration>
      <SkillSectionWrapper>
        {props.SkillsContent.map(
          (SkillsContentItem: SkillsContentItem, idx) => {
            return (
              <React.Fragment key={key(SkillsContentItem) as React.Key}>
                <SkillsRatingBox SkillsContentItem={SkillsContentItem} />
              </React.Fragment>
            );
          }
        )}
      </SkillSectionWrapper>
    </SectionWrapper>
  );
};
