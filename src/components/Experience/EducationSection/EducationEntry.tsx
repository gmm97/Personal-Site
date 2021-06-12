import React from "react";
import {
  EntryContainer,
  TopLineContainer,
  EntryHeading,
  EntryDate,
  SubEntryHeader,
  DetailsContainer,
  SingleDetail,
} from "../ReusableComponents/styles";
import { EducationItem } from "../content";

interface EducationEntryProps {
  EducationItem: EducationItem;
}

export const EducationEntry = (props: EducationEntryProps) => {
  const { Date, Details, InstitutionName, QualificationName } =
    props.EducationItem;
  return (
    <EntryContainer>
      <TopLineContainer>
        <EntryHeading>{InstitutionName}</EntryHeading>
        <EntryDate>{Date}</EntryDate>
      </TopLineContainer>
      <SubEntryHeader>{QualificationName}</SubEntryHeader>
      <DetailsContainer>
        {Details.map((detail: string, idx) => {
          return <SingleDetail key={idx}>{detail}</SingleDetail>;
        })}
      </DetailsContainer>
    </EntryContainer>
  );
};
