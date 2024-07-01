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

    if (decodedMessage.charAt(0) === "/") {
      const returnMessage = handleCommand(decodedMessage, userId, users);
      const responseMessage = formatMessage("response", userId, returnMessage);
      connection.send(responseMessage);
    } else {
      broadcastMessage(decodedMessage, users, userId);
    }
  });

  connection.on("close", () => {
    console.log("Connection with userID, ", userId, " closed!");
  });
});

const formatMessage = (messageType, userID, message) => {
  let timeSent = new Date();
  return JSON.stringify({
    senderUserID: userID,
    messageType: messageType,
    message: message,
    timeStamp: timeSent,
  });
};

const broadcastMessage = (message, allClients, originClient) => {
  for (var client in allClients) {
    if (client != originClient) {
      console.log("Broadcasting message", message, "to", client);
      const formattedMessage = formatMessage("broadcast", client, message);
      console.log("Here is the formatted Message: ", formattedMessage);
      allClients[client].send(formattedMessage);
    }
  }
};

const getAllConnectedUsers = (userList) => {
  let keys = Object.keys(userList);
  const response = "Here are all connected users: " + keys;
  return response;
};

const handleCommand = (message, userID, listOfAllUsers) => {
  console.log("&&&&&&&&&& HANDLING THE COMMAND", message);

  let commandResponse = "";
  if (message === "/userID") {
    console.log("Trying to get the userID!");
    commandResponse = `Here is your userID: ${userID}`;
  } else if (message === "/commands") {
    commandResponse =
      "Try sending these commands:" +
      "- /commands (list all commands)\n" +
      "- /userID (get your userID)\n" +
      "- /server (who is online)\n";
  } else if (message === "/server") {
    commandResponse = getAllConnectedUsers(listOfAllUsers);
  } else {
    commandResponse =
      "Sorry! Thats not a valid command! \nTry using /commands to get a list of all valid commands!";
  }
  return commandResponse;
};
