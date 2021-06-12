import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const MainPages = styled.div`
  width: calc(100vw - 15rem);
  margin: auto;
  @media screen and (max-width: 900px) {
    width: 100vw;
  }
`;
