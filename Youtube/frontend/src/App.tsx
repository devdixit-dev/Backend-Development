import axios from "axios";
import { useEffect, useState } from "react"

const App = () => {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/jokes')
    .then((response) => { setJokes(response.data) })
    .catch((e) => { console.log(e) })
  }, [])

  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <h3>Jokes list</h3>
      <p>{jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={index}>
            <h4>{joke.title}</h4>
            <h4>{joke.content}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default App