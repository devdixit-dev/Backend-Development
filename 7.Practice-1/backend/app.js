import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import 'dotenv/config';
import connectDB from './database/config.js';
import { resolvers, typeDefs } from './graphql/typeDefs.js';

connectDB();

const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT },
  context: () => {},
  cors: {
    origin: 'http://localhost:5173/'
  }
});

console.log(`Server running at: ${url}`);