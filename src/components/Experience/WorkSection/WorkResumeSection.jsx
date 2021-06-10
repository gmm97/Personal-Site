import { WorkContent } from "../content";
import { WorkEntry } from "./WorkEntry";
import { createChildComponent } from "../ReusableComponents/index";

export const WorkResumeSection = () => {
  return createChildComponent(WorkContent, WorkEntry);
};
