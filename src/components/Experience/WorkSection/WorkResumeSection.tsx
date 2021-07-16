import { WorkExperienceItem } from "../content";
import React from "react";
import key from "weak-key";
import { WorkEntry } from "./WorkEntry";

interface WorkResumeSectionProps {
  WorkExperienceData: WorkExperienceItem[];
}

export const WorkResumeSection = (props: WorkResumeSectionProps) => {
  return (
    <React.Fragment>
      {props.WorkExperienceData.map(
        (WorkExperienceItem: WorkExperienceItem, idx) => {
          return (
            <React.Fragment key={key(WorkExperienceItem) as React.Key}>
              <WorkEntry WorkExperienceItem={WorkExperienceItem} />
            </React.Fragment>
          );
        }
      )}
    </React.Fragment>
  );
};
