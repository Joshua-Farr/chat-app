import styled from "styled-components";
import { ChatBubble } from "./ChatBubble";
import { ChatBubble2 } from "./ChatBubble2";
import { Message } from "../types";

const ChatWrapper = styled.div`
  height: 100%;
  padding: 4em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ChatDisplay = ({ chat }: { chat: Message[] }) => {
  // const generateBubbles = (messages: any) => {
  //   const editedMessages = [];

  //   messages?.messages.forEach((message) => {
  //     editedMessages.push(<ChatBubble message={message.message} />);
  //   });
  // };

  const messages = chat.map((message) => {
    console.log("this is the message:", message);
    return <ChatBubble message={message.message} />;
  });

  return (
    <ChatWrapper>
      <ChatBubble2 />
      {messages}
    </ChatWrapper>
  );
};
