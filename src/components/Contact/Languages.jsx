import React from "react";
import { LanguageWrapper, LanguageComponent } from "./LanguagesStyles";

export const Languages = ({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  return (
    <LanguageWrapper>
      {languages &&
        Object.keys(languages).map((language, idx) => {
          return (
            <LanguageComponent
              key={language}
              onClick={() => setSelectedLanguage(languages[language])}
              selectedLanguage={selectedLanguage === languages[language]}
            >
              {language}
            </LanguageComponent>
          );
        })}
    </LanguageWrapper>
  );
};
