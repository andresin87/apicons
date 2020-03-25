import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { APITemplate, IconTemplate, MainTemplate } from "../ecosystem";
import { NewAccountDomain } from "../../domains";

export default () => (
  <Switch>
    <Route {...NewAccountDomain.getProps()} path="new-account" />
    <Route path="/api">
      <APITemplate />
    </Route>
    <Route path="/icon">
      <IconTemplate />
    </Route>
    <Route path="/">
      <MainTemplate />
    </Route>
  </Switch>
);
