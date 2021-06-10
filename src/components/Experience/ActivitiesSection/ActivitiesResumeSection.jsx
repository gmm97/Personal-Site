import { ActivitiesContent } from "../content";
import { ActivitiesEntry } from "./ActivitiesEntry";
import { createChildComponent } from "../ReusableComponents/index";

export const ActivitiesResumeSection = () => {
  return createChildComponent(ActivitiesContent, ActivitiesEntry);
};
