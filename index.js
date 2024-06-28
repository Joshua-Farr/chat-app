import { WebSocketServer } from "ws";

import { createServer } from "http";
const port = 8082;
const hostname = "localhost";

const server = createServer();

const webSocketServer = new WebSocketServer({ server });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Handling clients connecting to the websocket server:

const users = {};

webSocketServer.on("connection", function handleNewConnection(connection) {
  const userId = Math.floor(Math.random() * 1000000);
  console.log("A new user has connected to the server!");
  users[userId] = connection;

  connection.on("message", (message) => {
    console.log(`User ${userId} has sent the following message: ${message}`);

    users.forEach((client) => {
      client.send("PING! Here is what was sent!", message);
    });
  });

  connection.on("close", () => {
    console.log("Conneciton closed!");
  });
});
