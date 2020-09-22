import React, { useEffect, useState } from "react";

import {
  Grid,
  Content,
  Activity,
  CardOportunity,
  CardCredict,
  CardSales,
  CardFinancialTitles,
} from "./styles";

import Header from "../../components/Header";
import Menu from "../../components/Menu";

import CardInfo from "../../components/CardInfo";
import CardLocal from "../../components/CardLocal";
import { MenuProvider } from "../../hooks/MenuContext";

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
