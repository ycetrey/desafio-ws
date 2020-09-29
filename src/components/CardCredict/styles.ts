import styled from "styled-components";

export const Container = styled.div`
  grid-area: CardCredict;

  display: flex;
  flex-direction: column;

  padding: 10px 20px;
`;

export const Title = styled.h1``;

export const Item = styled.div`
  margin: 15px 0;
  display: flex;

  flex-direction: column;
  & strong {
    font-size: 22px;
    margin-bottom: 5px;
  }
`;
