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

export const Content = styled.div`
  grid-area: Content;

  display: grid;

  grid-template-columns: 25% 25% 1fr;
  grid-template-rows: 300px 230px 300px;

  column-gap: 17px;

  grid-template-areas:
    "CardInfo CardLocal Activity"
    "CardOportunity CardCredict Activity"
    "CardSales CardFinancialTitles Activity";

  height: 100%;

  padding: 17px;

  > div {
    flex-shrink: 0;
    break-inside: avoid;
    margin-bottom: 17px;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: auto;
    grid-template-rows: auto;

    grid-template-areas:
      "CardInfo"
      "CardLocal"
      "CardOportunity"
      "CardCredict"
      "CardSales"
      "CardFinancialTitles"
      "Activity";

    > div {
      flex-shrink: 0;
      break-inside: avoid;
    }
  }
`;

export const CardLocal = styled.div`
  grid-area: CardLocal;
  padding: 10px 20px;
`;

export const CardOportunity = styled.div`
  grid-area: CardOportunity;
  padding: 10px 20px;
`;

export const CardCredict = styled.div`
  grid-area: CardCredict;
  padding: 10px 20px;
`;

export const CardSales = styled.div`
  grid-area: CardSales;
  padding: 10px 20px;
`;

export const CardFinancialTitles = styled.div`
  grid-area: CardFinancialTitles;
  padding: 10px 20px;
`;

export const Activity = styled.div`
  grid-area: Activity;
  padding: 10px 20px;
`;
