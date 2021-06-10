import styled from "styled-components";

export const EntryContainer = styled.div`
  margin: 2rem;
`;
export const TopLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const EntryHeading = styled.div`
  margin-bottom: 1rem;
  @media screen and (max-width: 900px) {
    margin-bottom: 0.5rem;
  }
`;
export const EntryDate = styled.div`
  @media screen and (max-width: 900px) {
    margin: 0.5rem 0;
    font-size: 0.7rem;
    text-transform: uppercase;
    opacity: 0.6;
  }
`;

export const SubEntryHeader = styled.div`
  margin-bottom: 1rem;
  font-size: 0.7rem;
  @media screen and (max-width: 900px) {
    margin: 0.5rem 0;
  }
`;
export const DetailsContainer = styled.ul``;

export const SingleDetail = styled.li`
  font-size: 0.7rem;
  margin: 0.7rem 0;
  line-height: 1rem;
`;
