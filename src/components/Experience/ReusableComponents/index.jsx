import React from "react";

export const createChildComponent = (
  array,
  ComponentGenerated,
  OutsideWrapper = React.Fragment
) => {
  return (
    <OutsideWrapper>
      {array.map((entry, idx) => {
        return <ComponentGenerated key={idx} entry={entry} />;
      })}
    </OutsideWrapper>
  );
};
