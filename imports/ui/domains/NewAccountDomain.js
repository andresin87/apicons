import React from "react";

import { withGridStyles } from "../components/ecosystem/CenteredTemplate";
import RegisterForm from "../RegisterForm";
import DomainModel from "../model/DomainModel";

export default new DomainModel({
  component: withGridStyles(RegisterForm, {
    alignContent: "center",
    alignItems: "center",
    container: true,
    direction: "column",
    justify: "center",
    spacing: 0,
    style: { height: "100vh" },
  }),
  path: "/new-account",
});
