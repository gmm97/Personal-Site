import React, { useState, useRef, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { DropdownOptions } from "./DropdownOptions";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  ListItem,
} from "./styles";

interface DropdownComponentProps {
  currentOption: string;
  setCurrentOption: (value: string) => void;
}

export const DropdownComponent = (props: DropdownComponentProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.addEventListener("click", (event: MouseEvent) => {
      if (ref === null || ref.current === null) {
        return;
      }
      if (ref.current.contains(event.target as Node)) {
        return;
      }
      setIsOpen(false);
    });
  }, []);

  const changeHeaderTitle = (optionText: string): void => {
    props.setCurrentOption(optionText);
  };

  return (
    <DropdownContainer ref={ref}>
      <DropdownHeader onClick={toggleOpen}>
        {props.currentOption
          ? DropdownOptions.filter((option) => {
              if (option.optionText === props.currentOption) {
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
