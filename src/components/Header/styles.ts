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
`;
