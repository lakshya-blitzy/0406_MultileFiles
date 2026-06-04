# hao-backprop-test
test project for backprop integration.

## HTTP Server

The server is built with the [Express.js](https://expressjs.com/) web framework
(dependency `express` `^5.2.1`) and exposes two HTTP `GET` endpoints:

- `GET /` — `200 OK`, `Content-Type: text/plain`, body `Hello, World!\n`
- `GET /good-evening` — `200 OK`, `Content-Type: text/plain`, body `Good evening`

Any other path returns `404 Not Found`.

## Running

Install dependencies and start the server:

```bash
npm install
node server.js
```

The server listens at `http://127.0.0.1:3000/`.
