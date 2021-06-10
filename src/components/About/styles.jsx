import styled from "styled-components";
import { SectionContentContainer } from "../ReusableComponents/styles";
export const MyTimeline = styled.div``;
export const AboutSectionContentContainer = styled(SectionContentContainer)`
  color: ${({ scrollPast }) => (scrollPast ? "red" : "inherit")};
  @media screen and (max-width: 900px) {
    margin-top: 5rem;
  }
`;
