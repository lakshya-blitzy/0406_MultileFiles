const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// Enable strict routing so trailing-slash variants are treated as distinct routes:
// "/good-evening" returns content, while "/good-evening/" falls through to Express's
// default 404 handler. This keeps the routing contract explicit - only the registered
// paths "/" and "/good-evening" return content; every other path returns 404 Not Found.
app.enable('strict routing');

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

app.get('/good-evening', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Good evening');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
