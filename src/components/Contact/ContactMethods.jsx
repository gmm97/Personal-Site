import { ContactMethodsWrapper, ContactMethod } from "./ContactMethodStyles";

export const ContactMethods = ({ methods, changeEmail, selectedEmail }) => {
  return (
    <ContactMethodsWrapper>
      <ContactMethod
        onClick={(e) => changeEmail(e.target.innerText)}
        selectedEmail={selectedEmail === methods.PrimaryEmail}
      >
        {methods.PrimaryEmail}
      </ContactMethod>
      <ContactMethod
        onClick={(e) => changeEmail(e.target.innerText)}
        selectedEmail={selectedEmail === methods.SecondaryEmail}
      >
        {methods.SecondaryEmail}
      </ContactMethod>
    </ContactMethodsWrapper>
  );
};
