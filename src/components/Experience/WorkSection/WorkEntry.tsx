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
import { WorkExperienceItem } from "../content";

interface WorkEntryProps {
  WorkExperienceItem: WorkExperienceItem;
}

export const WorkEntry = (props: WorkEntryProps) => {
  const { Date, Details, Role, Title } = props.WorkExperienceItem;

  return (
    <EntryContainer>
      <TopLineContainer>
        <EntryHeading>{Title}</EntryHeading>
        <EntryDate>{Date}</EntryDate>
      </TopLineContainer>
      <SubEntryHeader>{Role}</SubEntryHeader>
      <DetailsContainer>
        {Details.map((detail: string, idx) => {
          return <SingleDetail key={idx}>{detail}</SingleDetail>;
        })}
      </DetailsContainer>
    </EntryContainer>
  );
};
