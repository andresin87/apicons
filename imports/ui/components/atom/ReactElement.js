import React from "react";

export default ({ children, ...otherProps }) => (
  <children.type {...children.props} {...otherProps} />
);
