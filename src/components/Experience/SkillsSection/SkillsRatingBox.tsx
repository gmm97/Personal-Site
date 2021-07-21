import key from "weak-key";
import { SkillsContentItem } from "../content";
import {
  FrameworkWrapper,
  SkillName,
  SkillAndFrameworkWrapper,
  FrameworkComponentWrapper,
} from "./SkillsRatingBoxStyles";

interface SkillsRatingBoxProps {
  SkillsContentItem: SkillsContentItem;
}

export const SkillsRatingBox = (props: SkillsRatingBoxProps) => {
  props.SkillsContentItem.Frameworks.sort(function (a, b) {
    return b.capability - a.capability;
  });
  return (
    <SkillAndFrameworkWrapper>
      <SkillName>{props.SkillsContentItem.Skill}</SkillName>
      <FrameworkComponentWrapper>
        {props.SkillsContentItem.Frameworks &&
          props.SkillsContentItem.Frameworks.map((framework, idx) => {
            return (
              <FrameworkWrapper
                capability={framework.capability}
                key={key(framework)}
              >
                {framework.name}
              </FrameworkWrapper>
            );
          })}
      </FrameworkComponentWrapper>
    </SkillAndFrameworkWrapper>
  );
};
