import { timelineData as data } from "./Data";
import { TimeLineContainerWrapper } from "./TimelineContainerStyles";
import { TimelineItem } from "./TimelineItem";
import { DropdownComponent } from "./TimelineDropdown/DropdownComponent";
import { DropdownOptions } from "./TimelineDropdown/DropdownOptions";
import React, { useState } from "react";

export const TimelineContainer = () => {
  const [currentOption, setCurrentOption] = useState("All");

  DropdownOptions.filter((option) => {
    if (option.optionId === currentOption) {
      return <React.Fragment>{option.optionText}</React.Fragment>;
    }
  }).map((option) => {
    return option.optionText;
  });

  return (
    data.length > 0 && (
      <TimeLineContainerWrapper>
        <DropdownComponent
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
        />
        {data.map((entry, idx) => {
          if (currentOption === "All") {
            return <TimelineItem entry={entry} key={idx} />;
          } else if (entry.category.tag === currentOption) {
            return <TimelineItem entry={entry} key={idx} />;
          }
        })}
      </TimeLineContainerWrapper>
    )
  );
};
