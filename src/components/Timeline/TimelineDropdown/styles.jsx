import styled from "styled-components";

export const DropdownContainer = styled.div`
  padding: 0;
  width: 10rem;
  position: absolute;
  top: 0;
  right: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const DropdownHeader = styled.div`
  margin-bottom: 0.8em;
  width: 80%;
  padding: 1em 0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  font-size: 0.7rem;
  color: #000;
  background: #f8f8f8f8;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownList = styled.ul`
  padding: 0;
  width: 80%;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 0.1rem;
  color: #000;
  font-size: 0.7rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0.8em;
  &:hover {
    color: teal;
    cursor: pointer;
  }
`;
