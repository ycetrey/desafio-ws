import React from "react";

import { Container, Title, ItemList, Item } from "./styles";

const CardOportunity: React.FC = () => {
  return (
    <>
      <Container className="box-shadow">
        <Title>Oportunidades (7) </Title>
        <ItemList>
          <Item>
            <span className="ico green">4</span>
            <strong>Ganhas</strong>
            <span>R$ 20.000,00</span>
          </Item>
          <Item>
            <span className="ico red">1</span>
            <strong>Perdida</strong>
            <span>R$ 4.300,00</span>
          </Item>
          <Item>
            <span className="ico blue">2</span>
            <strong>Abertas</strong>
            <span>Diversas moedas</span>
          </Item>
          <Item>
            <span className="ico gray">5</span>
            <strong>Ganhas</strong>
            <span>-</span>
          </Item>
        </ItemList>
      </Container>
    </>
  );
};

export default CardOportunity;
