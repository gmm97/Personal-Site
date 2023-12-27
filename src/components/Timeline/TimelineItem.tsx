import React, { useState } from "react";
import {
  TimelineItemWrapper,
  TimelineItemContent,
  TimelineTag,
  TimelineText,
  TimelineTime,
} from "./TimelineItemStyles";
import { TimelineEntry } from "./content";

interface TimelineItemProps {
  TimelineEntry: TimelineEntry;
}

export const TimelineItem = (props: TimelineItemProps) => {
  const { text, date, category } = props.TimelineEntry;
  const [fillSolid, setFillSolid] = useState<boolean>(false);
  const fillElementSolid = (fillSolid: boolean): void => {
    setFillSolid(!fillSolid);
  };
  return (
    <React.Fragment>
      <TimelineItemWrapper fillSolid={fillSolid}>
        <TimelineItemContent onClick={() => fillElementSolid(fillSolid)}>
          <TimelineTag color={category.color}>{category.tag}</TimelineTag>
          <TimelineText>{text}</TimelineText>
          <TimelineTime>{date}</TimelineTime>
        </TimelineItemContent>
      </TimelineItemWrapper>
    </React.Fragment>
  );
};
