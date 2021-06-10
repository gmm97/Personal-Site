import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SearchBarResultsWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: 1fr;
  position: relative;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const IndividualResult = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 0.7rem;
  justify-content: space-between;
  align-items: center;
`;

export const InputArea = styled.input`
  color: teal;
  font-size: 0.7rem;
  border-radius: 4rem;
  border: 1px solid teal;
  outline: none;
  height: 1.5rem;
  text-align: center;
  margin: 2rem 0;
  width: 30%;
  display: inline-block;
  opacity: 0.7;

  &:focus {
    background-color: #fadfda;
    opacity: 1;
    width: 33%;
    transition: width 0.2s ease-in-out;

    &::placeholder {
      color: transparent;
    }
  }

  @media screen and (max-width: 900px) {
    width: 80%;
    &:focus {
      width: 85%;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const IndividualTitle = styled.div`
  line-height: 1rem;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    color: teal;
  }
`;

export const IndividualGrade = styled.div`
  opacity: 0;
  ${IndividualResult}:hover & {
    opacity: 1;
    color: teal;
  }
  margin-left: 0.5rem;
`;
