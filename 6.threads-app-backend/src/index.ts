import express from 'express';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

const init = async () => {

  const app = express();
  const PORT = process.env.PORT || 8000;

  app.use(express.json());

  // create GraphQL server
  const server = new ApolloServer({
    typeDefs: `
      type Query {
        hello: String
        say(name: String): String
      }
    `,

    resolvers: {
      Query: {
        hello: () => { return 'Hello user!' },
        say: (_, { name }: { name: String }) => { return `Hey, ${name}. How are you?` }
      }
    },
  });

  await server.start();

  app.get('/', (req, res) => {
    res.json('Home or / Page');
  });

  app.use('/graphql', expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

}

init();