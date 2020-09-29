import styled from "styled-components";

export const Container = styled.div`
  grid-area: CardFinancialTitles;

  display: flex;
  flex-direction: column;

  padding: 10px 20px;
`;

export const Title = styled.h1``;

export const ItemList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Item = styled.div`
  display: flex;

  flex-direction: column;

  position: relative;
  padding-left: 50px;
  width: 100%;

  & span:first-child {
    position: absolute;
    left: 0;
  }

  & .ico {
    padding: 10px;
    color: var(--white);
    border-radius: 5px;
    margin-right: 10px;
    min-width: 40px;
    text-align: center;
  }
  & .green {
    background-color: var(--green);
  }
  & .blue {
    background-color: var(--blue);
  }
  & .red {
    background-color: var(--red);
  }
  & .gray {
    background-color: var(--gray);
  }
`;
