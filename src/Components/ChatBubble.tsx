import styled from "styled-components";
import { Message } from "../types";
import { formatTimeStamp } from "../utilities/formatTimeStamp";

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;
const Bubble = styled.div<{ $welcomeBot?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  background-color: ${(props) => (props.$welcomeBot ? "#9fe2bf" : "#f3f4f6")};
  // background-color: #f3f4f6;
  padding: 0.75em 1.25em 0.75em 1.25em;
  min-width: 20em;

  border-radius: 0 20px 20px 20px;
`;
const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: gray;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;
const Info = styled.span`
  font-weight: 200;
  font-size: 0.75rem;
`;
const UserName = styled.span`
  font-weight: 700;
  font-size: 0.85rem;
`;
const MessageText = styled.p``;

interface ChatBubbleProps {
  messageDetails: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ messageDetails }) => {
  const formattedTime = formatTimeStamp(messageDetails.timeStamp);

  if (messageDetails.senderUserID === 123456) {
    return (
      //Initial welcome chat bubble
      <Wrapper>
        <Avatar />
        <Bubble $welcomeBot>
          <Header>
            <UserName>Welcome Bot:</UserName>
          </Header>
          <MessageText>{messageDetails.message}</MessageText>
        </Bubble>
      </Wrapper>
    );
  } else if (messageDetails.message === "Hello Server!") {
    return (
      //Letting the user know that a new person has joined the server
      <Wrapper>
        <Avatar />
        <Bubble $welcomeBot>
          <Header>
            <UserName>Welcome Bot:</UserName>
          </Header>
          <MessageText>
            User {messageDetails.senderUserID} has joined the server!
          </MessageText>
        </Bubble>
      </Wrapper>
    );
  } else {
    return (
      //"Normal" chat bubble message
      <Wrapper>
        <Avatar />
        <Bubble>
          <Header>
            <UserName>User {messageDetails.senderUserID}:</UserName>
            <Info>Sent: {formattedTime}</Info>
          </Header>
          <MessageText>{messageDetails.message}</MessageText>
          {/* <Info>Delivered</Info> */}
        </Bubble>
      </Wrapper>
    );
  }
};
