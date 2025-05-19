import User from '../models/User.js'

export const typeDefs = `
  type Query{
    getAllUsers: [User]
  }
  
  type Mutation{
    addUser(name: String!, age: Int!, email: String!, password: String!): User
  }

  type User{
    name: String
    age: Int
    email: String
    password: String
  }
`

export const resolvers = {
  Query: {
    getAllUsers: () => {
      return User.find();
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const { name, age, email, password } = args;

      const newUser = await User.createOne({
        name,
        age,
        email,
        password
      });

      return newUser
    }
  }
}