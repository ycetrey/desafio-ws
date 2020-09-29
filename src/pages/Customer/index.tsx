import React, { useEffect, useState } from "react";

import { Grid, Content } from "./styles";

import { MenuProvider } from "../../hooks/MenuContext";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import CardInfo from "../../components/CardInfo";
import CardLocal from "../../components/CardLocal";
import CardOportunity from "../../components/CardOportunity";
import CustomerActivity from "../../components/CustomerActivity";
import CardCredict from "../../components/CardCredict";
import CardFinancialTitles from "../../components/CardFinancialTitles";
import CardSales from "../../components/CardSales";

import { loadMapApi } from "../../utils/GoogleMapsUtils";

const Customer: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", function () {
      setScriptLoaded(true);
    });
  }, []);

  return (
    <Grid>
      <MenuProvider>
        <Header />
        <Menu />
      </MenuProvider>
      <Content>
        <CardInfo />
        {scriptLoaded && (
          <CardLocal
            mapType={google.maps.MapTypeId.ROADMAP}
            mapTypeControl={true}
          />
        )}

        <CardOportunity />
        <CardCredict />

        <CardSales />
        <CardFinancialTitles />

        <CustomerActivity />
      </Content>
    </Grid>
  );
};

export default Customer;
