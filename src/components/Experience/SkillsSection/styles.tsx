import styled from "styled-components";

export const SkillSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
