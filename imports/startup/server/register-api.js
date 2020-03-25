import { ApolloServer, gql } from 'apollo-server-express';
import { getUser } from 'meteor/apollo';
import { WebApp } from 'meteor/webapp';
import merge from 'lodash/merge';

import ResolutionSchema from '../../api/resolutions/Resolution.graphql';
import ResolutionResolvers from '../../api/resolutions/resolvers';
//
const testSchema = gql`
    type Query {
        hi: String
        resolutions: [Resolution]
    }
`;

const typeDefs = [testSchema, ResolutionSchema];

const resolvers = merge(
  {
    Query: {
      hi() {
        return "Hello Level Up 👌";
      },
    }
  },
  ResolutionResolvers
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
});

server.applyMiddleware({
 app: WebApp.connectHandlers,
 path: '/graphql'
});

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end()
  }
});