import React, { useState, useRef, useEffect } from "react";
import { DropdownOptions } from "./DropdownOptions";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  ListItem,
} from "./styles";
import { AiFillCaretDown } from "react-icons/ai";

export const DropdownComponent = ({ currentOption, setCurrentOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.addEventListener("click", (ev) => {
      if (ref === null || ref.current === null) {
        return;
      }
      if (ref.current.contains(ev.target)) {
        return;
      }
      setIsOpen(false);
    });
  }, []);

  const changeHeaderTitle = (optionText) => {
    setCurrentOption(optionText);
  };

  return (
    <DropdownContainer ref={ref}>
      <DropdownHeader onClick={toggleOpen}>
        {currentOption
          ? DropdownOptions.filter((option) => {
              if (option.optionText === currentOption) {
                return <React.Fragment>{option.optionText}</React.Fragment>;
              }
            }).map((option) => {
              return option.optionText;
            })
          : "All"}
        <AiFillCaretDown />
      </DropdownHeader>
      <DropdownList isOpen={isOpen}>
        {isOpen &&
          DropdownOptions.map((option, idx) => {
            return (
              <ListItem
                key={option.optionId}
                onClick={() => changeHeaderTitle(option.optionText)}
              >
                {option.optionText}
              </ListItem>
            );
          })}
      </DropdownList>
    </DropdownContainer>
  );
};
