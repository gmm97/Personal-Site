import React from "react";
import { TranslatedLanguages } from "./content";
import { LanguageWrapper, LanguageComponent } from "./LanguagesStyles";

interface LanguageProps {
  TranslatedLanguages: TranslatedLanguages;
  selectedLanguage: String;
  setSelectedLanguage: (value: String) => void;
}

export const Languages = (props: LanguageProps) => {
  return (
    <LanguageWrapper>
      {props.TranslatedLanguages &&
        Object.keys(props.TranslatedLanguages).map((language, idx) => {
          return (
            <LanguageComponent
              key={language}
              onClick={(e: any) => {
                props.setSelectedLanguage((e.target as HTMLElement).innerText);
              }}
              selectedLanguage={
                props.selectedLanguage === TranslatedLanguages[language]
              }
            >
              {language}
            </LanguageComponent>
          );
        })}
    </LanguageWrapper>
  );
};
