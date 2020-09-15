import styled from "styled-components";

export const Header = styled.div`
  grid-area: Header;

  display: flex;
  flex-direction: row;

  background-color: var(--bg-header);
  width: 100vw;

  align-items: center;
`;

export const Container = styled.div`
  margin-left: 30px;

  &:hover {
    color: var(--red);
  }
`;
