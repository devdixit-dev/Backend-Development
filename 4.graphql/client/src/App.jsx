import { gql, useQuery } from "@apollo/client"

const query = gql`
    query {
    getTodos {
      title
      completed
      user {
        name
        email
      }
    }
  }
`

const App = () => {

  const { data, loading } = useQuery(query);

  if (loading) return <h1>loading...</h1>

  return (
    <div>
      <table>
        <tbody>
          {
            data.getTodos.map
            (
              todo =>
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>{todo.user.name}</td>
                  <td>{todo.user.email}</td>
                </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default App