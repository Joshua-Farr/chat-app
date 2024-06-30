import { ChatDisplay } from "./Components/ChatDisplay";
import { ChatInput } from "./Components/ChatInput";
import styled from "styled-components";
import { ChannelSideBar } from "./Components/ChannelSideBar";
import { useEffect, useState } from "react";
import { Message } from "./types";

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const ChatWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  let myClientID = "";

  let ongoingChat = [
    {
      destinationUserID: 123456,
      messageType: "message",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum fuga. Vero, eveniet aut incidunt commodi error",
      timeStamp: Date.now(),
    },
    {
      destinationUserID: 123456,
      messageType: "message",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum fuga. Vero, eveniet aut incidunt commodi error",
      timeStamp: Date.now(),
    },
    {
      destinationUserID: 123456,
      messageType: "message",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum fuga. Vero, eveniet aut incidunt commodi error",
      timeStamp: Date.now(),
    },
  ];
  const [conversationHistory, setConversationHistory] = useState(ongoingChat);
  const [clientSocket, setClientSocket] = useState<WebSocket | null>(null);

  let socket: WebSocket;

  useEffect(() => {
    try {
      socket = new WebSocket("ws://localhost:8082");
      setClientSocket(socket);
      console.log("New client socket created");

      socket.addEventListener("open", () => {
        console.log("We are connected to the server!");
        socket.send("Hello Server!");
      });

      socket.addEventListener("message", (message) => {
        // console.log("Trying to parse message from the server!", message);
        const serverMessage = JSON.parse(message.data.toString());
        if (serverMessage.messageType === "confirmation") {
          myClientID = serverMessage.userID;
          console.log("My clientID is: ", myClientID);
        } else {
          console.log("The server has responded with:", message);
          updateConversationHistory(message.data.toString());
        }
      });
    } catch (e) {
      console.log("Error connecting to the socket: ", e);
    }

    return () => socket.close();
  }, []);

  const updateConversationHistory = (message: Message) => {
    setConversationHistory((prev) => {
      return [...prev, message];
    });
  };

  return (
    <AppWrapper>
      <ChannelSideBar />
      <ChatWrapper>
        <ChatDisplay chat={conversationHistory} />
        <ChatInput chatSocket={clientSocket}></ChatInput>
      </ChatWrapper>
    </AppWrapper>
  );
}

export default App;
