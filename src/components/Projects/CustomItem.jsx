import React from "react";
import {
  CarouselItemWrapper,
  CarouselImage,
  CarouselText,
  ProjectName,
  Organisation,
  Description,
  CarouselBody,
  KeywordTag,
  KeywordTagContainer,
  Progress,
} from "./CustomItemStyles";

export const StyledCarouselItem = ({ project }) => {
  return (
    <CarouselItemWrapper>
      <CarouselBody>
        <KeywordTagContainer>
          {project.KeywordTags &&
            project.KeywordTags.map((keyword, idx) => {
              return <KeywordTag key={keyword}>{keyword}</KeywordTag>;
            })}
        </KeywordTagContainer>
        <Progress progress={project.Progress}>{project.Progress}</Progress>
        {project.BackgroundImage && (
          <CarouselImage
            src={require(`../../images/${project.BackgroundImage}.jpg`).default}
          />
        )}
        <CarouselText>
          <ProjectName>{project.ProjectName}</ProjectName>
          <Organisation>{project.Organisation}</Organisation>
          <Description>{project.BriefDescription}</Description>
        </CarouselText>
      </CarouselBody>
    </CarouselItemWrapper>
  );
};
