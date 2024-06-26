import "./App.css";
import { ChatInput } from "./Components/ChatInput";

function App() {
  try {
    const socket = new WebSocket("ws://localhost:8082");
    console.log("Client socket created");

    socket.addEventListener("open", () => {
      console.log("We are connected!");
      socket.send("Hello Server!");
    });
    return <ChatInput chatSocket={socket}></ChatInput>;
  } catch (e) {
    console.log("Error connecting to the socket: ", e);
  }
}

export default App;
