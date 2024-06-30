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
  overflow: scroll;
`;

export const ChatDisplay = ({ chat }: { chat: Message[] }) => {
  const messages = chat.map((message) => {
    //Need to add functionality to render chat bubble based on who sent the message
    return <ChatBubble message={message.message} />;
  });

  return (
    <ChatWrapper>
      <ChatBubble2 />
      {/* {messages} */}
    </ChatWrapper>
  );
};
