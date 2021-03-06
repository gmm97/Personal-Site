import styled from "styled-components";

interface SelectedEmailProps {
  selectedEmail: Boolean;
}

export const ContactMethodsWrapper = styled.div`
  display: flex;
  margin: 2rem;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  font-size: 0.7rem;
  align-self: center;
`;

export const ContactMethod = styled.div<SelectedEmailProps>`
  margin: 1rem;
  color: ${({ selectedEmail }) => (selectedEmail ? "red" : "inherit")};
  &:hover {
    cursor: pointer;
  }
`;
