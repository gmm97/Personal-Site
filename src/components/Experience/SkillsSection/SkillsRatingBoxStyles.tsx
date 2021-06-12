import styled from "styled-components";
export const SkillContainer = styled.div`
  margin: 1rem 2rem;
  font-size: 0.85rem;
  display: flex;
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
  margin-left: 3rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SkillBarWrapper = styled.div`
  width: 16rem;
  border-radius: 4rem;
  height: 1rem;
`;

export const Project = styled.div`
  text-transform: uppercase;
  width: 100%;
  font-size: 0.7rem;
  &:hover {
    color: teal;
    cursor: pointer;
  }
`;
