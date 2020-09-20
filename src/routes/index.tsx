import React from "react";

import { Switch, Route } from "react-router-dom";

import Customer from "../pages/Customer";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Customer} />
  </Switch>
);

export default Routes;
