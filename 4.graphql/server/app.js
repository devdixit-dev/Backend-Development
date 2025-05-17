import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";

const port = 4444;

const getAllTodos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const output = response.data;
  return output
}

const getAllUsers = async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  const output = response.data;
  return output
}

const getSingleUser = async (parent, {id}) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const output = response.data
  return output
}

const getTodoUser = async(todo) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
  const output = response.data
  return output;
}

const server = new ApolloServer({
  typeDefs: `
    type Todo { 
      userId: ID!
      title: String!
      completed: Boolean
      user: User
    },

    type User {
      id: ID!
      name: String!
      username: String!
      email: String!
      phone: String!
      website: String!
    }

    type Query {
      getTodos: [Todo]
      getUsers: [User]
      getOneUser(id: ID!): User
    }
  `,
  resolvers:{
    Todo: {
      user: getTodoUser
    },

    Query: {
      getTodos: getAllTodos,
      getUsers: getAllUsers,
      getOneUser: getSingleUser
    }
  },
});

startStandaloneServer(server, {
  listen: { port },
  context: () => ({}),
  cors: {
    origin: 'http://localhost:5173/',
    // credentials: true
  }
})
.then(() => {
  console.log(`GraphQL is working on port ${port}`);
})
.catch((err) => {
  console.error(err);
});