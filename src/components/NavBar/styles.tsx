import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import ProfilePic from "../../images/ProfilePic.jpg";

export const SidebarNavContainer = styled.div`
  width: 12rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  position: sticky;
  top: 0;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to right, #fdfbfb, #ebedee);
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const ProfileImage = styled.div`
  background-size: cover;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    ),
    url(${ProfilePic});
  width: 10rem;
  height: 10rem;
  border-radius: 100rem;
`;

export const AuthorName = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const AuthorDescrp = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const NavMenu = styled.div`
  margin: 5vh 0 5vh 0;
  font-size: 1rem;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  justify-self: center;

  &::before {
    display: block;
    content: "";
    width: 100%;
    border-bottom: solid 1px #000;
    align-self: center;
    z-index: 1;
    width: 100%;
    transform: translateY(-1.5rem);
  }

  &::after {
    display: block;
    content: "";
    width: 100%;
    border-bottom: solid 1px #000;
    align-self: center;
    z-index: 1;
    width: 100%;
    transform: translateY(1rem);
  }
`;

export const NavItem = styled(LinkS)`
  margin-bottom: 1.75rem;
  display: flex;
  align-items: center;
  transition: all 0.1s ease-in;
  &.active {
    color: teal;
  }
  &:hover {
    transform: translateY(-0.1rem);
    color: teal;
    cursor: pointer;
  }
`;

export const NavIcon = styled.div`
  margin-right: 1rem;
`;

export const NavText = styled.div``;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.3rem;
`;

export const LinkedInIcon = styled.a`
  margin: 0 1rem;
`;

export const GithubIcon = styled.a`
  margin: 0 1rem;
`;

export const ProgressBarWrapper = styled.div`
  height: 2rem;
  width: 10rem;
  border-radius: 2rem;
  background-color: #fadfda;
`;

export const ProgressContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
