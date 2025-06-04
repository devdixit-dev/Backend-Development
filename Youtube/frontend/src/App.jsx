import { useEffect, useState } from "react"

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {}, [])

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h2 className="text-2xl">Jokes API</h2>
      <p>Jokes length: {jokes.length}</p>

      {jokes.map((joke) => {
        <div key={joke.id}>
          <p>{joke.title}</p>
          <p>{joke.content}</p>
        </div>
      })}
    </div>
  )
}

export default App