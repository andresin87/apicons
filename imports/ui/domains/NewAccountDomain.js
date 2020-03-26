import React from "react";

import { withCenteredTemplate } from "../components/ecosystem/CenteredTemplate";
import RegisterForm from "../RegisterForm";
import DomainModel from "../model/DomainModel";

export default new DomainModel({
  component: withCenteredTemplate(RegisterForm),
  path: "/new-account",
});
