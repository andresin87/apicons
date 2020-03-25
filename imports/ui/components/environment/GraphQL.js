import React from "react";
import { graphql } from "react-apollo";
import ReactElement from '../atom/ReactElement';

let GraphQL;
export default GraphQL = ({ loading, ...otherProps }) => {
  return loading ? null : (
    <ReactElement {...otherProps}/>
  );
};

export const withGraphQL = (Component) => ({ query }) =>
  graphql(query, {
    props: ({ data }) => ({ ...data }),
  })(Component);
