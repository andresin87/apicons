import React from "react";

import { withTheme } from "./components/environment/Theme";
import { withRouter } from "./components/environment/Router";
import Routes from "./components/environment/Routes";

export default withTheme(withRouter(Routes));
