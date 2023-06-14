/* eslint-disable no-console */
import http from 'http';
import app from './src/api/app.js';
import { init } from './src/index.js';

const port = process.env.PORT || 3000;

await init();
console.log('Project is initialized');

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server listen on localhost:${port}`);
});
