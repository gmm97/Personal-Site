export interface ContactInformationSection {
  PrimaryEmail: string;
  SecondaryEmail: string;
  PhoneNumber?: string;
}

export const ContactInformation: ContactInformationSection = {
  PrimaryEmail: "gautam.manek@gmail.com",
  SecondaryEmail: "gautam007@e.ntu.edu.sg",
};

export interface TranslatedLanguagesSection {
  [name: string]: string;
}

export const TranslatedLanguages: TranslatedLanguagesSection = {
  English: "en",
  German: "de",
  Hindi: "hi",
};

export interface ContactDescriptionSection {
  ContactPrimarySubHeading: string;
  ContactPrimaryElaboration: string;
}

export const ContactDescription: ContactDescriptionSection = {
  ContactPrimarySubHeading: "Send me a message",
  ContactPrimaryElaboration:
    "Feel like dropping me a message? Translate it into a language I know below:",
};
