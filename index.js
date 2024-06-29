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
  const userId = Math.floor(Math.random() * 1000000) + 100000;
  console.log("User: ", userId, " has connected to the server!");
  users[userId] = connection;
  connection.send(
    JSON.stringify({
      messageType: "confirmation",
      userID: userId,
    })
  );

  connection.on("message", (message) => {
    console.log("************************");
    console.log(`User ${userId} has sent the following message: ${message}`);

    const decodedMessage = message.toString("utf8");

    console.log("************************");

    broadcastMessage(decodedMessage, users, userId);
  });

  connection.on("close", () => {
    console.log("Conneciton closed!");
  });
});

const formatMessage = (messageType, userID, message) => {
  return JSON.stringify({
    userID: userID,
    messageType: messageType,
    message: message,
  });
};

const broadcastMessage = (message, allClients, originClient) => {
  for (var client in allClients) {
    if (client != originClient) {
      console.log("Broadcasting message", message, "to", client);
      const formattedMessage = formatMessage("broadcast", client, message);

      allClients[client].send(formattedMessage);
    } else {
      const formattedMessage = formatMessage(
        "broadcast",
        client,
        "YOU ARE THE ORIGINAL CLIENT!!"
      );
      allClients[client].send(formatMessage);
      console.log("YOU ARE THE ORIGINAL CLIENT: ", client);
    }
  }
};
