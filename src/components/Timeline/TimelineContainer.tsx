import React, { useState } from "react";
import { TimelineData, TimelineEntry } from "./content";
import { TimeLineContainerWrapper } from "./TimelineContainerStyles";
import { TimelineItem } from "./TimelineItem";
import { DropdownComponent } from "./TimelineDropdown/DropdownComponent";
import { DropdownOptions } from "./TimelineDropdown/DropdownOptions";
import key from "weak-key";

export const TimelineContainer = () => {
  const [currentOption, setCurrentOption] = useState<string>("All");

  DropdownOptions.filter((option: DropdownOptions) => {
    if (option.optionText === currentOption) {
      return <React.Fragment>{option.optionText}</React.Fragment>;
    }
  }).map((option: DropdownOptions) => {
    return option.optionText;
  });

  return (
    <React.Fragment>
      {TimelineData.length > 0 && (
        <TimeLineContainerWrapper>
          <DropdownComponent
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
          />
          {TimelineData.map((TimelineEntry: TimelineEntry, idx) => {
            if (currentOption === "All") {
              return (
                //@ts-ignore: this is because ts does not recongise the key prop
                <TimelineItem
                  TimelineEntry={TimelineEntry}
                  key={key(TimelineEntry) as React.Key}
                />
              );
            } else if (TimelineEntry.category.tag === currentOption) {
              //@ts-ignore: this is because ts does not recongise the key prop
              return (
                <TimelineItem
                  TimelineEntry={TimelineEntry}
                  key={key(TimelineEntry)}
                />
              );
            }
          })}
        </TimeLineContainerWrapper>
      )}
    </React.Fragment>
  );
};
