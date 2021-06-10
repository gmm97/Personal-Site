import { EducationContent } from "../content";
import { EducationEntry } from "./EducationEntry";
import { createChildComponent } from "../ReusableComponents/index";

export const EducationResumeSection = () => {
  return createChildComponent(EducationContent, EducationEntry);
};
