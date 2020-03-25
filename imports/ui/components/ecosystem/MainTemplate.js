import React from "react";
import gql from "graphql-tag";

import AppBar from "../molecule/AppBar";
import { withGraphQL } from "../environment/GraphQL";
import ResolutionForm from "../../ResolutionForm";


const MainTemplate = ({ resolutions }) => {
  return (
    <>
      <AppBar />
      <h1>MainTemplate</h1>
      <ResolutionForm />
      <ul>
        {resolutions?.map((resolution) => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </>
  );
};

export default withGraphQL(MainTemplate)({
  query: gql`
    query Resolutions {
      resolutions {
        _id
        name
      }
    }
  `,
});
