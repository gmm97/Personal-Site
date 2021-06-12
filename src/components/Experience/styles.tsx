import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SubSectionLinkContainer = styled.div`
  margin: 1.5rem 2rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
  color: #cfd9df;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubsectionLink = styled(LinkS)`
  cursor: pointer;
  &:hover {
    color: teal;
  }
`;

export const ResumeSectionHeader = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 3.5rem;
  margin-bottom: 1.6rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  color: #cfd9df;

  &::after {
    display: block;
    content: "";
    width: 100%;
    border-bottom: solid 1px #cfd9df;
    align-self: center;
    z-index: 1;
    width: 100%;
    transform: translateY(1rem);
  }

  &::before {
    display: block;
    content: "";
    width: 100%;
    border-bottom: solid 1px #cfd9df;
    align-self: center;
    z-index: 1;
    width: 100%;
    transform: translateY(-1rem);
  }
`;

export const ResumeContainer = styled.div``;

export const MainSection = styled.div`
  margin-bottom: 3rem;
`;
