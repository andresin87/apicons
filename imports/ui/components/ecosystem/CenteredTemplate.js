import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import ReactElement from "../atom/ReactElement";

let GridStyles;
export default GridStyles = ({ gridSettings, ...otherProps }) => (
  <Grid {...gridSettings}>
    <ReactElement {...otherProps} />
  </Grid>
);

export const withGridStyles = (Component, gridSettings) => (props) => (
  <GridStyles gridSettings={gridSettings} {...props}>
    <Component />
  </GridStyles>
);
