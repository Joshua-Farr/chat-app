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
  padding: 1em;

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
  gap: 1em;
`;
const Info = styled.span`
  font-weight: 200;
`;
const UserName = styled.span`
  font-weight: 700;
`;
const MessageText = styled.p``;

interface ChatBubbleProps {
  messageDetails: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ messageDetails }) => {
  const formattedTime = formatTimeStamp(messageDetails.timeStamp);

  if (messageDetails.senderUserID === 123456) {
    return (
      <Wrapper>
        <Avatar />
        <Bubble $welcomeBot>
          <Header>
            <UserName>Welcome Bot:</UserName>
            {/* <Info>Sent: {messageDetails.timeStamp}</Info> */}
          </Header>
          <MessageText>{messageDetails.message}</MessageText>
          {/* <Info>Delivered</Info> */}
        </Bubble>
      </Wrapper>
    );
  } else if (messageDetails.message === "Hello Server!") {
    return (
      <Wrapper>
        <Avatar />
        <Bubble $welcomeBot>
          <Header>
            <UserName>Welcome Bot:</UserName>
            {/* <Info>Sent: {messageDetails.timeStamp}</Info> */}
          </Header>
          <MessageText>
            User {messageDetails.senderUserID} has joined the server!
          </MessageText>
          {/* <Info>Delivered</Info> */}
        </Bubble>
      </Wrapper>
    );
  } else {
    return (
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
