import React, { useState } from "react";
import {
  SectionContentContainer,
  SectionMainHeading,
  SectionSubHeading,
  SectionElaboration,
} from "../ReusableComponents/styles";
import { useScrollPast } from "../ReusableComponents/useScrollPast";

import { ContactMethods } from "./ContactMethods";
import { SendMessageContainer } from "./SendMessage";
import { Languages } from "./Languages";
import {
  ContactInformationSection,
  TranslatedLanguagesSection,
  ContactDescriptionSection,
} from "./content";

interface ContactProps {
  ContactInformation: ContactInformationSection;
  TranslatedLanguages: TranslatedLanguagesSection;
  height: number;
  ContactDescription: ContactDescriptionSection;
}

const Contact = React.forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const scrollPast = useScrollPast(props);
  const [selectedEmail, setSelectedEmail] = useState<String>(
    props.ContactInformation.PrimaryEmail
  );
  const [selectedLanguage, setSelectedLanguage] = useState<String>("en");

  const changeEmail = (email: String): void => {
    setSelectedEmail(email);
  };

  return (
    <SectionContentContainer id="contact" ref={ref}>
      <SectionMainHeading scrollPast={scrollPast}>
        Contact Me
      </SectionMainHeading>
      <SectionSubHeading>
        {props.ContactDescription.ContactPrimarySubHeading}
      </SectionSubHeading>
      <SectionElaboration>
        {props.ContactDescription.ContactPrimaryElaboration}
      </SectionElaboration>
      <ContactMethods
        ContactInformation={props.ContactInformation}
        changeEmail={changeEmail}
        selectedEmail={selectedEmail}
      />
      <Languages
        TranslatedLanguages={props.TranslatedLanguages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <SendMessageContainer
        selectedEmail={selectedEmail}
        selectedLanguage={selectedLanguage}
      />
    </SectionContentContainer>
  );
});

export default Contact;
