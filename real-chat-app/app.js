import express from 'express';
import http from 'http';

const app = express();
const port = 9000
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello, world</h1>');
});

server.listen(port, () => {
  console.log(`Server is running on port 9000`)
});