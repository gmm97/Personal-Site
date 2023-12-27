import { TranslatedLanguages, TranslatedLanguagesSection } from "./content";
import { LanguageWrapper, LanguageComponent } from "./LanguagesStyles";

interface LanguageProps {
  TranslatedLanguages: TranslatedLanguagesSection;
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
                props.setSelectedLanguage(
                  TranslatedLanguages[(e.target as HTMLElement).innerHTML]
                );
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
