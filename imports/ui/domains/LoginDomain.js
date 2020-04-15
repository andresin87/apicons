import React from "react";

import { withCenteredTemplate } from "../components/ecosystem/CenteredTemplate";
import LoginForm from "../LoginForm";
import DomainModel from "../model/DomainModel";

export default new DomainModel({
  component: withCenteredTemplate(LoginForm),
  path: "/login",
});

