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
  return (
    <ChatWrapper>
      <ChatBubble />
      <ChatBubble2 />
    </ChatWrapper>
  );
};
