import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";

const port = 4444;

const getAllTodos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const output = response.data;
  return output
}

const server = new ApolloServer({
  typeDefs: `
    type Todo { 
      id: ID!,
      title: String!,
      completed: Boolean,
    },

    type Query {
      getTodos: [Todo]
    }
  `,
  resolvers:{
    Query: {
      getTodos: getAllTodos
    }
  },
});

startStandaloneServer(server, {
  listen: { port }
})
.then(() => {
  console.log(`GraphQL is working on port ${port}`);
})
.catch((err) => {
  console.error(err);
});