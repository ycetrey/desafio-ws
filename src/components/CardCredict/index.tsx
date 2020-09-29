import React from "react";

import { Container, Title, Item } from "./styles";

const CardCredict: React.FC = () => {
  return (
    <>
      <Container className="box-shadow">
        <Title>Limite de crédito</Title>
        <Item>
          <strong style={{ color: "var(--blue)" }}>R$ 12.000,20</strong>
          <span>Concedido</span>
        </Item>

        <Item>
          <strong style={{ color: "var(--green)" }}>R$ 3.105,00</strong>
          <span>Disponível</span>
        </Item>
      </Container>
    </>
  );
};

export default CardCredict;
