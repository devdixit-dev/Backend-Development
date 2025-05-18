* GraphQL
-------------------------------------------------------------------
1. PORT(8000)

2. Schema - A structured way for passing data in Graph-QL
  Thread{
    id
    title
    desc
    user
  }

  User{
    id
    name
    email
    profileImage
  }

3. Query - if user requires data - fetch data / GET data
  query GetAllThreads{
    fetchThreads{
      id
      title
      user{
        name
        email
      }
    }
  }

4. query resolvers - NOTE: same name as query
  fetchThreads: fetchThreads() {
    return data
  }

5. Mutation
  createUser(name: String!, age: Int!, isStudent: Boolean!): User
  - give reference of a User schema

6. mutation resolvers - NOTE: same name as mutation
  createUser: (parent, args) => {
    const { name, age, isStudent } = args;
    const newUser = {
      id: (users.length + 1).toString(),
      name,
      age,
      isStudent
    };
    users.push(newUser);
    return newUser
  }

* Service Layer
1. POST Service
2. User Service

* Prisma
1. Service Layer connected to this layer

* Database
1. Prisma layer connected to this layer