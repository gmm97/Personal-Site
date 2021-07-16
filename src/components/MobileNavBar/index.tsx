import React from "react";
import { IconContext } from "react-icons";
import {
  MobileNavBarWrapper,
  Author,
  NavMenu,
  NavItem,
  NavIcon,
  VerticalBar,
  NavText,
} from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { BiPencil, BiPhoneCall, BiGitRepoForked } from "react-icons/bi";

const MobileNavBar = () => {
  return (
    <IconContext.Provider value={{ color: "#cfd9df", size: "1.1rem" }}>
      <MobileNavBarWrapper>
        <Author>Gautam Manek</Author>
        <NavMenu>
          <NavItem
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <NavIcon>
              <AiOutlineHome />
            </NavIcon>
            <NavText>About Me</NavText>
          </NavItem>
          <VerticalBar>|</VerticalBar>
          <NavItem
            to="work"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <NavIcon>
              <BiPencil />
            </NavIcon>
            <NavText>My Resume</NavText>
          </NavItem>
          <VerticalBar>|</VerticalBar>
          <NavItem
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <NavIcon>
              <BiGitRepoForked />
            </NavIcon>
            <NavText>My Projects</NavText>
          </NavItem>
          <VerticalBar>|</VerticalBar>
          <NavItem
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <NavIcon>
              <BiPhoneCall />
            </NavIcon>
            <NavText>Contact Me</NavText>
          </NavItem>
        </NavMenu>
      </MobileNavBarWrapper>
    </IconContext.Provider>
  );
};

export default MobileNavBar;
