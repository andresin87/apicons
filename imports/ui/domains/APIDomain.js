import React from "react";

import DomainModel from "../model/DomainModel";

export default new DomainModel({
  component: () => <h1>API Template</h1>,
  path: "/api",
});
