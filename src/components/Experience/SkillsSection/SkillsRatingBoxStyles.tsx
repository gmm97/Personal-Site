import styled from "styled-components";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export const StyledBsArrowLeftShort = styled(BsArrowLeftShort)`
  &:hover {
    cursor: pointer;
  }
  align-self: center;
`;

export const StyledBsArrowRightShort = styled(BsArrowRightShort)`
  &:hover {
    cursor: pointer;
  }
  align-self: center;
`;

export const SkillContainer = styled.div`
  margin: 1rem 2rem;
  font-size: 0.85rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const SkillName = styled.div`
  margin-right: 1rem;
  width: 8rem;
`;

interface SkillBarWidth {
  Capability: number;
}

export const SkillBar = styled.div<SkillBarWidth>`
  border-radius: inherit;
  background-color: #fadfda;
  height: 100%;
  width: ${({ Capability }) => Capability + "%"};
  &:hover {
    background-color: teal;
  }
`;

export const Associated = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  text-align: center;
  align-items: center;
`;

export const SkillBarWrapper = styled.div`
  width: 20rem;
  border-radius: 4rem;
  height: 1rem;
`;

export const Project = styled.div`
  height: 100%;
  &:hover {
    color: teal;
  }
  align-self: center;
`;

export const ProjectWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 1rem;
`;
