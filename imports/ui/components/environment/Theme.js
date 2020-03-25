import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { blueGrey } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
  },
});

let Theme;
export default Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const withTheme = (Component) => (props) => (
  <Theme>
    <Component {...props} />
  </Theme>
);
