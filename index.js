const { readFileSync } = require("fs");
const { WebSocket, WebSocketServer } = require("ws");
const uuidv4 = require("uuid").v4;

const http = require("http");
const { randomUUID } = require("crypto");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer();

const webSocketServer = new WebSocketServer({ server });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//  Handling clients connecting to the websocket server:

const users = {};

webSocketServer.on(
  "connection",
  (handleConnection = (connection) => {
    const userId = uuidv4();
    console.log("A new user has connected!");
    users[userId] = connection;

    connection.on("message", (message) => {
      console.log(`${userId} has sent the following message: ${message}`);
    });

    connection.on("close", () => handleClientDisconnection(userId));
  })
);
