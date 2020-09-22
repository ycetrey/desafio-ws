import styled from "styled-components";

export const Container = styled.div`
  grid-area: Header;

  display: flex;
  flex-direction: row;

  background-color: var(--bg-header);
  width: 100%;

  align-items: center;
  position: relative;
  z-index: 3;

  & > Button.menu {
    height: 64px;
    width: 72px;
    background: var(--bg-header);
    font-size: 24px;
    border-radius: 0;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`;
