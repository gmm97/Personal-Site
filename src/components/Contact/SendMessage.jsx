import React, { useState } from "react";
import {
  InputsWrapper,
  SendingToWrapper,
  MessageWrapper,
  InputText,
  SelectedEmail,
  StyledSubmitButton,
  SubjectWrapper,
  InputSubject,
  ErrorDisplay,
} from "./SendMessageStyles";
import axios from "axios";
var qs = require("qs");

export const SendMessageContainer = ({ selectedEmail, selectedLanguage }) => {
  const [messageBody, setMessageBody] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState(null);

  const makeRequest = async () => {
    await axios
      .post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: [messageBody, subject],
            target: selectedLanguage,
            format: "text",
            key: process.env.REACT_APP_API_KEY,
          },
          paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        }
      )
      .then((response) => sendEmail(response.data.data.translations))
      .catch((error) => {
        const response = error.response;
        setError(response.data.error.message);
        return response.data.error.message;
      });
  };

  const sendEmail = (array) => {
    console.log(array);
    const messageTranslation = array[0].translatedText;
    const subjectTranslation = array[1].translatedText;

    window.open(
      "mailto:" +
        selectedEmail +
        "?cc=" +
        "&subject=" +
        subjectTranslation +
        "&body=" +
        messageTranslation
    );
  };

  return (
    <InputsWrapper>
      <SendingToWrapper>
        <SelectedEmail>Sending to: {selectedEmail}</SelectedEmail>
      </SendingToWrapper>
      <SubjectWrapper>
        <InputSubject
          placeholder="Subject"
          onInput={(e) => setSubject(e.target.value)}
        />
      </SubjectWrapper>
      <MessageWrapper>
        <InputText
          placeholder="Body"
          onInput={(e) => setMessageBody(e.target.value)}
        />
      </MessageWrapper>
      <StyledSubmitButton onClick={makeRequest}>
        Send an Email!
      </StyledSubmitButton>
      {error && <ErrorDisplay>{error}</ErrorDisplay>}
    </InputsWrapper>
  );
};
