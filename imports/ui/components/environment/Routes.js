import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { APITemplate, IconTemplate, MainTemplate } from "../ecosystem";

export default () => (
  <Switch>
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
