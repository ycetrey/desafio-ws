import styled from "styled-components";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 72px auto;
  grid-template-rows: 64px auto;

  grid-template-areas:
    "Header Header"
    "Menu Content";

  height: 100vh;
`;
