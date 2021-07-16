import { ActivitiesItem } from "../content";
import { ActivitiesEntry } from "./ActivitiesEntry";
import React from "react";
import key from "weak-key";

export interface ActivitiesResumeSectionProps {
  ActivitiesData: ActivitiesItem[];
}

export const ActivitiesResumeSection = (
  props: ActivitiesResumeSectionProps
) => {
  return (
    <React.Fragment>
      {props.ActivitiesData.map((ActivitiesItem: ActivitiesItem, idx) => {
        return (
          <React.Fragment key={key(ActivitiesItem) as React.Key}>
            <ActivitiesEntry ActivitiesItem={ActivitiesItem} />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
