import styled from "styled-components";

export const LanguageWrapper = styled.div`
  margin: 2rem;
  flex-direction: row;
  justify-content: space-around;
  font-size: 0.7rem;
  text-transform: uppercase;
  opacity: 0.5;
  display: flex;
`;
export const LanguageComponent = styled.div`
  cursor: pointer;
  color: ${({ selectedLanguage }) =>
    selectedLanguage === true ? "red" : "inherit"};
`;
