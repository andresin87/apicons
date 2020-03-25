import React from "react";

export default ({ children, ...otherProps }) => (
  <children.element {...children.props} {...otherProps} />
);
