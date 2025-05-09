import path from 'path'
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = 9000
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port 9000`)
});