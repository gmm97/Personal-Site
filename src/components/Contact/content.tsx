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
    "Feel like dropping me a message? Just select either my personal or work email and key in your message below! If you'd like to translate your email to one of the 3 languages I speak, just select the relevant language below. Anything you type (in basically any known language) will be translated into the target language you have selected!",
};
