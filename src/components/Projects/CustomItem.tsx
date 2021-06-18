import React from "react";
import { CarouselContent, CarouselContentItem } from "./content";
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

interface StyledCarouselItemProps {
  project: CarouselContentItem;
}

export const StyledCarouselItem = (props: StyledCarouselItemProps) => {
  return (
    <CarouselItemWrapper to={`/project/${props.project.LinkName}`}>
      <CarouselBody>
        <KeywordTagContainer>
          {props.project.KeywordTags &&
            props.project.KeywordTags.map((keyword, idx) => {
              return (
                <KeywordTag key={keyword as React.Key}>{keyword}</KeywordTag>
              );
            })}
        </KeywordTagContainer>
        <Progress progress={props.project.Progress}>
          {props.project.Progress}
        </Progress>
        {props.project.BackgroundImage && (
          <CarouselImage
            src={
              require(`../../images/${props.project.BackgroundImage}.jpg`)
                .default
            }
          />
        )}
        <CarouselText>
          <ProjectName>{props.project.ProjectName}</ProjectName>
          <Organisation>{props.project.Organisation}</Organisation>
          <Description>{props.project.BriefDescription}</Description>
        </CarouselText>
      </CarouselBody>
    </CarouselItemWrapper>
  );
};
