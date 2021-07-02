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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 8rem;
  margin: 1rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  font-size: 0.85rem;
  background-color: #e2ebf0;
  border: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    transition: opacity 1s ease-out;
    opacity: 1;
  }
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

export const SubmitButtonText = styled.p`
  margin-right: 1rem;
`;
