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
import { ActivitiesItem } from "../content";

interface ActivitiesEntryProps {
  ActivitiesItem: ActivitiesItem;
}

export const ActivitiesEntry = (props: ActivitiesEntryProps) => {
  const { ClubName, PositionName, Date, Details } = props.ActivitiesItem;

  return (
    <EntryContainer>
      <TopLineContainer>
        <EntryHeading>{ClubName}</EntryHeading>
        <EntryDate>{Date}</EntryDate>
      </TopLineContainer>
      <SubEntryHeader>{PositionName}</SubEntryHeader>
      <DetailsContainer>
        {Details.map((detail: string, idx) => {
          return <SingleDetail key={idx}>{detail}</SingleDetail>;
        })}
      </DetailsContainer>
    </EntryContainer>
  );
};
