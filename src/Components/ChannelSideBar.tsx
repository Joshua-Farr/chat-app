import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5em;

  height: 100vh;
  border-right: 2px solid #d3d3d3;

  width: 20vw;
`;

export const ChannelSideBar = () => {
  return (
    <Wrapper>
      <h3>Channels</h3>
    </Wrapper>
  );
};
