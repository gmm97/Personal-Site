import React, { useState } from "react";
import {
  TimelineItemWrapper,
  TimelineItemContent,
  TimelineTag,
  TimelineText,
  TimelineTime,
} from "./TimelineItemStyles";

export const TimelineItem = ({ entry }) => {
  const { text, date, category } = entry;
  const [fillSolid, setFillSolid] = useState(false);
  const fillElementSolid = (fillSolid) => {
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
