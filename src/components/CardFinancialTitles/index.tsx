import React from "react";

import { Container, Title, ItemList, Item } from "./styles";

const CardFinancialTitles: React.FC = () => {
  return (
    <>
      <Container className="box-shadow">
        <Title>Títulos financeiros </Title>
        <ItemList>
          <Item>
            <span className="ico red">4</span>
            <strong>R$ 3.105,00</strong>
            <span>Vencidos</span>
          </Item>
          <Item>
            <span className="ico red">1</span>
            <strong>R$ 3.105,00</strong>
            <span>À vencer</span>
          </Item>
          <Item>
            <span className="ico green">2</span>
            <strong>R$ 3.105,00</strong>
            <span>Pagos</span>
          </Item>
        </ItemList>
      </Container>
    </>
  );
};

export default CardFinancialTitles;
