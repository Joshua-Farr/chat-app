import styled from "styled-components";
import { ChatBubble } from "./ChatBubble";
import { ChatBubble2 } from "./ChatBubble2";

const ChatWrapper = styled.div`
  height: 100%;
  padding: 4em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ChatDisplay = () => {
  const sampleMessages = {
    messages: [
      {
        sender: "Josh",
        message: "Hello",
        timestamp: "12:20pm",
        messageID: "123-145",
      },
      {
        sender: "Jacob",
        message: "Good Day Sir",
        timestamp: "12:21pm",
        messageID: "123-966",
      },
      {
        sender: "Josh",
        message: "It is a good day sir to you as well",
        timestamp: "12:22pm",
        messageID: "123-643",
      },
    ],
  };

  const generateBubbles = (messages: any) => {
    const editedMessages = [];

    messages?.messages.forEach((message) => {
      editedMessages.push(<ChatBubble message={message.message} />);
    });
  };

  return (
    <ChatWrapper>
      <ChatBubble />
      <ChatBubble2 />
    </ChatWrapper>
  );
};
