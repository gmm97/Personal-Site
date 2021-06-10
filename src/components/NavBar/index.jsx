import { SiLinkedin, SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { BiPencil, BiPhoneCall, BiGitRepoForked } from "react-icons/bi";
import { ProgressBar } from "../ProgressBar";
import { useContext } from "react";
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
import React from "react";

export const NavBar = ({ name }) => {
  return (
    <IconContext.Provider value={{ color: "grey", size: "1.1rem" }}>
      <React.Fragment>
        <SidebarNavContainer>
          <ProfileContainer>
            <ProfileImage />
          </ProfileContainer>
          <AuthorName>Hi There!</AuthorName>
          <AuthorDescrp>I'm {name}</AuthorDescrp>
          <NavMenu>
            <NavItem
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              <NavIcon>
                <AiOutlineHome />
              </NavIcon>
              <NavText>About Me</NavText>
            </NavItem>
            <NavItem
              to="work"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              <NavIcon>
                <BiPencil />
              </NavIcon>
              <NavText>My Resume</NavText>
            </NavItem>
            <NavItem
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              <NavIcon>
                <BiGitRepoForked />
              </NavIcon>
              <NavText>My Projects</NavText>
            </NavItem>
            <NavItem
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              <NavIcon>
                <BiPhoneCall />
              </NavIcon>
              <NavText>Contact Me</NavText>
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
      </React.Fragment>
    </IconContext.Provider>
  );
};

export default NavBar;
