import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';

const typeDefs = `
  type Todo {
    id: ID!
    title: String!
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;

const resolvers = {
  Query: {
    getTodos: () => [
      { id: '1', title: 'Learn GraphQL', completed: false },
      { id: '2', title: 'Build something cool', completed: true }
    ]
  }
};

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  // Middlewares BEFORE /graphql
  app.use(cors());
  app.use(express.json());

  app.get(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.authorization })
    })
  );

  app.listen(8000, () => {
    console.log('Server ready at http://localhost:8000/graphql');
  });
}

startServer();
