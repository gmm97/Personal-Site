import React, { useState } from "react";
import { TimelineData, TimelineEntry } from "./content";
import { TimeLineContainerWrapper } from "./TimelineContainerStyles";
import { TimelineItem } from "./TimelineItem";
import { DropdownComponent } from "./TimelineDropdown/DropdownComponent";
import key from "weak-key";

export const TimelineContainer = () => {
  const [currentOption, setCurrentOption] = useState<string>("All")
  return (
    <React.Fragment>
      {TimelineData.length > 0 && (
        <TimeLineContainerWrapper>
          <DropdownComponent
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
          />
          {TimelineData.map((TimelineEntry: TimelineEntry) => {
            if (currentOption === "All") {
              return (
                <TimelineItem
                  TimelineEntry={TimelineEntry}
                  key={key(TimelineEntry) as React.Key}
                />
              );
            } else if (TimelineEntry.category.tag === currentOption) {
              return (
                <TimelineItem
                  TimelineEntry={TimelineEntry}
                  key={key(TimelineEntry)}
                />
              );
            }
            return <></>
          })}
        </TimeLineContainerWrapper>
      )}
    </React.Fragment>
  );
};
