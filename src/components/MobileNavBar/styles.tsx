import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const MobileNavBarWrapper = styled.div`
  height: 5rem;
  width: 100%;
  background-color: teal;
  display: flex;
  position: fixed;
  z-index: 10000;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export const Author = styled.div`
  color: #fff;
  font-size: 1rem;
  margin-left: 1rem;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  justify-self: center;
  display: flex;
  color: #cfd9df;
  font-size: 0.7rem;
  text-transform: uppercase;
  justify-content: space-between;
  width: 100%;
  margin-right: 1rem;
`;
export const NavItem = styled(LinkS)`
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  transition: all 0.1s ease-in;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  &.active {
    transition: color 0.5s ease-in;
    color: #ffb6c1;
  }

  &:hover {
    color: #ffb6c1;
    cursor: pointer;
  }
`;
export const NavIcon = styled.div`
  margin-right: 1rem;
`;
export const NavText = styled.div``;

export const VerticalBar = styled.div`
  align-self: stretch;
  margin-top: 0.2rem;
  color: #ffb6c1;
  opacity: 0.6;
`;
