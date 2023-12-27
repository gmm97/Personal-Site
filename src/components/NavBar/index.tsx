import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { BiPencil, BiPhoneCall, BiGitRepoForked } from "react-icons/bi";
import { ProgressBar } from "../ProgressBar";
import { DesktopNavBarDescriptionSection } from "./content";
import {
  SidebarNavContainer,
  ProfileImage,
  AuthorName,
  NavMenu,
  NavItem,
  SocialMedia,
  LinkedInIcon,
  GithubIcon,
  ProgressBarWrapper,
  ProfileContainer,
  AuthorDescrp,
  NavIcon,
  NavText,
  ProgressContainer,
} from "./styles";

interface NavBarProps {
  DesktopNavBarDescription: DesktopNavBarDescriptionSection
}

export const NavBar = (props: NavBarProps) => {
  return (
    <IconContext.Provider value={{ color: "grey", size: "1.1rem" }}>
      <SidebarNavContainer>
        <ProfileContainer>
          <ProfileImage />
        </ProfileContainer>
        <AuthorDescrp>Hi There!</AuthorDescrp>
        <AuthorName>I'm {props.DesktopNavBarDescription.name}</AuthorName>
        <NavMenu>
          <NavItem to="about" smooth={true} duration={500} spy={true}>
            <NavIcon>
              <AiOutlineHome />
            </NavIcon>
            <NavText>
              {props.DesktopNavBarDescription.sectionNames
                ? props.DesktopNavBarDescription.sectionNames[0]
                : "About Me"}
            </NavText>
          </NavItem>
          <NavItem to="work" smooth={true} duration={500} spy={true}>
            <NavIcon>
              <BiPencil />
            </NavIcon>
            <NavText>
              {props.DesktopNavBarDescription.sectionNames
                ? props.DesktopNavBarDescription.sectionNames[1]
                : "My Resume"}
            </NavText>
          </NavItem>
          <NavItem to="projects" smooth={true} duration={500} spy={true}>
            <NavIcon>
              <BiGitRepoForked />
            </NavIcon>
            <NavText>
              {props.DesktopNavBarDescription.sectionNames
                ? props.DesktopNavBarDescription.sectionNames[2]
                : "My Projects"}
            </NavText>
          </NavItem>
          <NavItem to="contact" smooth={true} duration={500} spy={true}>
            <NavIcon>
              <BiPhoneCall />
            </NavIcon>
            <NavText>
              {props.DesktopNavBarDescription.sectionNames
                ? props.DesktopNavBarDescription.sectionNames[3]
                : "Contact Me"}
            </NavText>
          </NavItem>
        </NavMenu>
        <SocialMedia>
          <LinkedInIcon
            href="https://www.linkedin.com/in/gautam-manek"
            target="_blank"
          >
            <SiLinkedin />
          </LinkedInIcon>
          <GithubIcon href="https://github.com/gmm97" target="_blank">
            <SiGithub />
          </GithubIcon>
        </SocialMedia>
        <ProgressContainer>
          <ProgressBarWrapper>
            <ProgressBar />
          </ProgressBarWrapper>
        </ProgressContainer>
      </SidebarNavContainer>
    </IconContext.Provider>
  );
};

export default NavBar;
