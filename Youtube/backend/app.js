import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'Joke 1',
      content: 'Joke 1 content'
    },
    {
      id: 2,
      title: 'Joke 2',
      content: 'Joke 2 content'
    },
    {
      id: 3,
      title: 'Joke 3',
      content: 'Joke 3 content'
    },
    {
      id: 4,
      title: 'Joke 4',
      content: 'Joke 4 content'
    },
    {
      id: 5,
      title: 'Joke 5',
      content: 'Joke 5 content'
    },
  ]
  res.send(jokes)
});

app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});