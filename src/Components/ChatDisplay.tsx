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

export const ChatDisplay = ({
  chat,
  userID,
}: {
  chat: Message[];
  userID: number | undefined;
}) => {
  const scrollToBottomOfPage = () => {
    console.log("Scrolling to bottom of page");
    const element = document.getElementById("chat-wrapper")!;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  };

  const messages = chat.map((message, index) => {
    if (message.senderUserID === userID && message.messageType != "response") {
      return <ChatBubble2 key={index} messageDetails={message} />;
    } else {
      return <ChatBubble key={index} messageDetails={message} />;
    }
  });

  scrollToBottomOfPage();

  return <ChatWrapper id="chat-wrapper">{messages}</ChatWrapper>;
};
