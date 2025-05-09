import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import path from 'path';

const app = express();

app.use(express.static(path.resolve('./public')))

const server = http.createServer(app);
const io = new Server(server)

const port = 8000;

// if connection on and user connected
io.on('connection', (socket) => {
  // if user send a message then
  socket.on('user-message', (message) => {
    // send message to all user that connects to server
    io.emit('message', message)
  })
})

app.get('/', (req, res) => {
  res.sendFile('/public/index.html')
});

server.listen(port, () => {
  console.log('Server is running on port 8000');
});