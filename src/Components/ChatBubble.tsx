import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;
const Bubble = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  background-color: #f3f4f6;
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
const Message = styled.p``;

export const ChatBubble = () => {
  return (
    <Wrapper>
      <Avatar />
      <Bubble>
        <Header>
          <UserName>Josh Farr</UserName>
          <Info>12:30</Info>
        </Header>
        <Message>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          ullam facilis iure.
        </Message>
        {/* <Info>Delivered</Info> */}
      </Bubble>
    </Wrapper>
  );
};
