import React from "react";
import { BrowserRouter } from "react-router-dom";

let Router;
export default Router = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export const withRouter = (Component) => (props) => (
  <Router>
    <Component {...props} />
  </Router>
);
