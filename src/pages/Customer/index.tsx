import React from "react";

import {
  Grid,
  Content,
  CardLocal,
  Activity,
  CardOportunity,
  CardCredict,
  CardSales,
  CardFinancialTitles,
} from "./styles";

import Header from "../../components/Header";
import Menu from "../../components/Menu";

import CardInfo from "../../components/CardInfo";

const Customer: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Menu />
      <Content>
        <CardInfo />
        <CardLocal className="box-shadow" />

        <CardOportunity className="box-shadow" />
        <CardCredict className="box-shadow" />

        <CardSales className="box-shadow" />
        <CardFinancialTitles className="box-shadow" />

        <Activity className="box-shadow" />
      </Content>
    </Grid>
  );
};

export default Customer;