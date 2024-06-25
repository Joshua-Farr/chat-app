const { readFileSync } = require("fs");
const { WebSocket, WebSocketServer } = require("ws");

const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer();

const webSocketServer = new WebSocketServer({ server });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
