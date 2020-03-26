import React from "react";
import GridStyles from "../molecule/GridStyles";
import ReactElement from "../atom/ReactElement";

let CenteredTemplate;
export default CenteredTemplate = (props) => {
  return (
    <GridStyles
      gridSettings={{
        alignContent: "center",
        alignItems: "center",
        container: true,
        direction: "column",
        justify: "center",
        spacing: 0,
        style: { height: "100vh" },
      }}
    >
      <ReactElement {...props} />
    </GridStyles>
  );
};

export const withCenteredTemplate = (Component) => (props) => (
  <CenteredTemplate {...props}>
    <Component />
  </CenteredTemplate>
);
