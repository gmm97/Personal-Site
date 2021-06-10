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

const Contact = React.forwardRef((props, ref) => {
  const scrollPast = useScrollPast(props);
  const [selectedEmail, setSelectedEmail] = useState(props.PrimaryEmail);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const changeEmail = (email) => {
    setSelectedEmail(email);
  };

  return (
    <SectionContentContainer id="contact" ref={ref}>
      <SectionMainHeading scrollPast={scrollPast}>
        Contact Me
      </SectionMainHeading>
      <SectionSubHeading>Send me a message</SectionSubHeading>
      <SectionElaboration>
        Feel like dropping me a message? Just select either my personal or work
        email and key in your message below! If you'd like to translate your
        email to one of the 3 languages I speak, just select the relevant
        language below. Anything you type (in basically any known language) will
        be translated into the target language you have selected!
      </SectionElaboration>
      <ContactMethods
        methods={props}
        changeEmail={changeEmail}
        selectedEmail={selectedEmail}
      />
      <Languages
        languages={props.languages}
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
