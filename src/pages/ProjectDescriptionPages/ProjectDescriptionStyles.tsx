import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import {
  SectionContentContainer,
  SectionMainHeading,
  SectionSubHeading,
} from "../../components/ReusableComponents/styles";
import Background from "../../images/so-white.png";

export const ProjectContentContainer = styled(SectionContentContainer)`
  background-image: url(${Background});
  padding-bottom: 2rem;
`;

export const ProjectMainHeading = styled(SectionMainHeading)``;

export const ProjectDateHeading = styled(SectionSubHeading)`
  margin-bottom: 0;
  margin-top: 1rem;
  margin-left: 0;
  text-align: center;
  font-size: 0.85rem;
  color: #fadfda;
`;

export const ReturnMainPage = styled(LinkR)`
  height: 1rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  text-decoration: none;
  align-self: center;
  margin: 1rem;
  color: #fadfda;
  position: relative;
  margin-top: 2rem;
  &:hover {
    color: teal;
  }
  &:hover:after {
    right: -2rem;
    transition: right 0.3s ease-out;
  }
  &:hover:before {
    left: -2rem;
    transition: left 0.3s ease-out;
  }
  &:after {
    content: ">";
    height: 1rem;
    position: absolute;
    right: -1rem;
  }
  &:before {
    content: "<";
    height: 1rem;
    position: absolute;
    left: -1rem;
  }
`;

export const MarkdownWrapper = styled.div`
  margin: 0 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
