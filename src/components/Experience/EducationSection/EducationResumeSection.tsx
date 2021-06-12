import React from "react";
import { EducationItem } from "../content";
import { EducationEntry } from "./EducationEntry";
import key from "weak-key";

export interface EducationResumeSectionProps {
  EducationData: EducationItem[];
}

export const EducationResumeSection = (props: EducationResumeSectionProps) => {
  return (
    <React.Fragment>
      {props.EducationData.map((EducationItem: EducationItem, idx) => {
        return (
          <React.Fragment key={key(EducationItem) as React.Key}>
            <EducationEntry EducationItem={EducationItem} />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
