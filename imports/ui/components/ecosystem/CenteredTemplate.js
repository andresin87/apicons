import React from "react";
import Grid from "@material-ui/core/Grid";

let CenteredTemplate;
export default CenteredTemplate = ({ children }) => (
  <Grid>
    <children.element {...children.props} {...otherProps} />
  </Grid>
);
