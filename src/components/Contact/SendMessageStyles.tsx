import styled from "styled-components";

export const InputsWrapper = styled.div`
  width: 30rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SelectedEmail = styled.div``;
export const SendingToWrapper = styled.div`
  font-size: 0.7rem;
  text-align: center;
  margin: 1rem;
`;
export const MessageWrapper = styled.div`
  width: 100%;
  height: 5rem;
  margin-bottom: 2rem;

  text-align: center;
`;
export const SubmitButtonWrapper = styled.div``;
export const InputText = styled.textarea`
  display: inline-block;
  width: 80%;
  height: 100%;

  &::placeholder {
    font-size: 0.7rem;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const StyledSubmitButton = styled.button`
  height: 2rem;
  color: white;
  width: 8rem;
  margin: 1rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  font-size: 0.7rem;
  background-color: teal;
  border: 0.1px solid white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  -webkit-appearance: button;
  &:active {
    transform: translateY(-0.1rem);
  }
`;

export const SubjectWrapper = styled.div`
  width: 100%;
  height: 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const InputSubject = styled(InputText)``;

export const ErrorDisplay = styled.div`
  color: red;
  margin-bottom: 2rem;
  font-size: 0.7rem;
  text-transform: uppercase;
`;
