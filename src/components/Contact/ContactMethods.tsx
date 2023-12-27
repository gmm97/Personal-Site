import React from "react";
import { ContactMethodsWrapper, ContactMethod } from "./ContactMethodStyles";
import { ContactInformation, ContactInformationSection } from "./content";

interface ContactMethodsProps {
  ContactInformation: ContactInformationSection;
  changeEmail: (value: string) => void;
  selectedEmail: String;
}

export const ContactMethods = (props: ContactMethodsProps) => {
  return (
    <ContactMethodsWrapper>
      <ContactMethod
        onClick={(e: any) => {
          props.changeEmail((e.target as HTMLElement).innerText);
        }}
        selectedEmail={props.selectedEmail === ContactInformation.PrimaryEmail}
      >
        {ContactInformation.PrimaryEmail}
      </ContactMethod>
      <ContactMethod
        onClick={(e: any) => {
          props.changeEmail((e.target as HTMLElement).innerText);
        }}
        selectedEmail={
          props.selectedEmail === ContactInformation.SecondaryEmail
        }
      >
        {ContactInformation.SecondaryEmail}
      </ContactMethod>
    </ContactMethodsWrapper>
  );
};
