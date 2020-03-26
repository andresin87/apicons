import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import * as Domains from "../../domains";

export default () => (
  <Switch>
    {Object.entries(Domains).map(([key, Domain]) => (
      <Route key={key} {...Domain.getProps()} />
    ))}
  </Switch>
);
