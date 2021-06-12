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
import axios, { AxiosError, AxiosResponse } from "axios";
var qs = require("qs");

interface SendMessageProps {
  selectedEmail: String;
  selectedLanguage: String;
}

interface TranslatedText {
  translations: { translatedText: String; detectedSourceLanguage: String }[];
}

interface Endpoint {
  data: TranslatedText;
  error?: ErrorMessage;
}

interface ErrorMessage {
  code: number;
  message: String;
  errors: {
    message: String;
    domain: String;
    Reason: String;
  }[];
  status: String;
}

export const SendMessageContainer = (props: SendMessageProps) => {
  const [messageBody, setMessageBody] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState<null | String>(null);

  const makeRequest = async (): Promise<void> => {
    await axios
      .post<Endpoint>(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: [messageBody, subject],
            target: props.selectedLanguage,
            format: "text",
            key: process.env.REACT_APP_API_KEY,
          },
          paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        }
      )
      .then((response: AxiosResponse<Endpoint>) =>
        sendEmail(response.data.data.translations)
      )
      .catch((error: AxiosError | Error) => {
        if (axios.isAxiosError(error)) {
          const response: AxiosResponse<Endpoint> | undefined = error.response;
          if (!response || !response.data.error) {
            return;
          }
          setError(response.data.error.message);
        }
      });
  };

  const sendEmail = (translation: TranslatedText["translations"]) => {
    const messageTranslation = translation[0].translatedText;
    const subjectTranslation = translation[1].translatedText;

    window.open(
      "mailto:" +
        props.selectedEmail +
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
        <SelectedEmail>Sending to: {props.selectedEmail}</SelectedEmail>
      </SendingToWrapper>
      <SubjectWrapper>
        <InputSubject
          placeholder="Subject"
          onInput={(e) => setSubject((e.target as HTMLInputElement).value)}
        />
      </SubjectWrapper>
      <MessageWrapper>
        <InputText
          placeholder="Body"
          onInput={(e) => setMessageBody((e.target as HTMLInputElement).value)}
        />
      </MessageWrapper>
      <StyledSubmitButton onClick={makeRequest}>
        Send an Email!
      </StyledSubmitButton>
      {error && <ErrorDisplay>{error}</ErrorDisplay>}
    </InputsWrapper>
  );
};
