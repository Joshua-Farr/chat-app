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
  userID: number;
}) => {
  const scrollToBottomOfPage = () => {
    console.log("Scrolling to bottom of page");
    const element = document.getElementById("chat-wrapper")!;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  };

  const messages = chat.map((message) => {
    if (message.senderUserID === userID) {
      return <ChatBubble2 messageDetails={message} />;
    } else {
      return <ChatBubble messageDetails={message} />;
    }
  });

  // const targetNode = document.getElementById("chat-wrapper");
  // const config = { attributes: true, childList: true, subtree: true };

  // const callback = (mutationList: any) => {
  //   for (const mutation of mutationList) {
  //     if (mutation.type === "childList") {
  //       scrollToBottomOfPage();
  //     }
  //   }
  // };

  // const observer = new MutationObserver(callback);

  // observer.observe(targetNode, config);

  scrollToBottomOfPage();

  return <ChatWrapper id="chat-wrapper">{messages}</ChatWrapper>;
};
