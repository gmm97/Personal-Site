export interface ContactInformation {
  PrimaryEmail: string;
  SecondaryEmail: string;
  PhoneNumber?: string;
}

export const ContactInformation: ContactInformation = {
  PrimaryEmail: "gautam.manek@gmail.com",
  SecondaryEmail: "gautam007@e.ntu.edu.sg",
};

export interface TranslatedLanguages {
  [name: string]: string;
}

export const TranslatedLanguages: TranslatedLanguages = {
  English: "en",
  German: "de",
  Hindi: "hi",
};

export interface ContactDescription {
  ContactPrimarySubHeading: string;
  ContactPrimaryElaboration: string;
}

export const ContactDescription: ContactDescription = {
  ContactPrimarySubHeading: "Send me a message",
  ContactPrimaryElaboration:
    "Feel like dropping me a message? Translate it into a language I know below:",
};
