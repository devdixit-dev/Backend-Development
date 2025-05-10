import express from 'express';
import fs from 'fs';
// import zlib from 'zlib'

import status from 'express-status-monitor';

const app = express();
const port = 8000;

app.use(status()); // for monitor memory usage

// to zip the file for sample.txt
// const stream = fs.createReadStream('./sample.txt', 'utf-8').pipe(
//   zlib.createGzip().pipe(fs.createWriteStream('./sample.zip'))
// )

app.get('/', (req, res) => {
  const stream = fs.createReadStream('./sample.txt', "utf-8");
  stream.on('data', (chunk) => res.write(chunk));
  stream.on('end', () => res.end());
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});