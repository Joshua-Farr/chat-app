import styled from "styled-components";
import { Message } from "../types";
import { formatTimeStamp } from "../utilities/formatTimeStamp";

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
`;
const Bubble = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  background-color: #b2dcef;
  padding: 0.75em 1.25em 0.75em 1.25em;
  min-width: 20em;

  border-radius: 20px 0 20px 20px;
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

interface ChatBubble2Props {
  messageDetails: Message;
}

export const ChatBubble2: React.FC<ChatBubble2Props> = ({ messageDetails }) => {
  const formattedTime = formatTimeStamp(messageDetails.timeStamp);

  return (
    <Wrapper>
      <Bubble>
        <Header>
          <UserName>You (User {messageDetails.senderUserID}):</UserName>
          <Info>Sent: {formattedTime}</Info>
        </Header>
        <MessageText>{messageDetails.message}</MessageText>
        {/* <Info>Delivered</Info> */}
      </Bubble>
      <Avatar />
    </Wrapper>
  );
};
