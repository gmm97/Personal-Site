import { skills } from "../content";
import { createChildComponent } from "../ReusableComponents";
import { SkillsRatingBox } from "./SkillsRatingBox";
import { SkillSectionWrapper } from "./styles";

export const SkillsResumeSection = () => {
  skills.sort((a, b) => parseFloat(b.capability) - parseFloat(a.capability));
  return createChildComponent(skills, SkillsRatingBox, SkillSectionWrapper);
};
