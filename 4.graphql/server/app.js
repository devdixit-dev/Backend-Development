import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const port = 4444;

const server = new ApolloServer({
  typeDefs: `type Query { hello: String, hello2: String }`,
  resolvers:{
    Query: {
      hello: () => "Hello world",
      hello2: () => "Hello world 2",
    },
  },
});

startStandaloneServer(server, {
  listen: { port }
})
.then(() => {
  console.log(`Server is working on port ${port}`);
})
.catch((err) => {
  console.error(err);
});