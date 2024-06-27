import "./App.css";
import { ChatDisplay } from "./Components/ChatDisplay";
import { ChatInput } from "./Components/ChatInput";
import styled from "styled-components";
import { SideBar } from "./Components/SideBar";
import { ChannelSideBar } from "./Components/ChannelSideBar";

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
  try {
    const socket = new WebSocket("ws://localhost:8082");
    console.log("Client socket created");

    socket.addEventListener("open", () => {
      console.log("We are connected!");
      socket.send("Hello Server!");
    });
    return (
      <AppWrapper>
        <ChannelSideBar />
        <ChatWrapper>
          <ChatDisplay />
          <ChatInput chatSocket={socket}></ChatInput>
        </ChatWrapper>
      </AppWrapper>
    );
  } catch (e) {
    console.log("Error connecting to the socket: ", e);
  }
}

export default App;
