import { FormEvent, useState } from "react";
import styled from "styled-components";
import { sendMessage } from "../utilities/messaging";

const FormWrapper = styled.div`
  border-block: 2px solid #d3d3d3;
  //   padding: 0.5em;
  padding: 1.25em 1em 1em 1em;
  margin-top: auto;
`;

const Form = styled.form`
  display: flex;
  gap: 0.25em;
  align-items: center;
  justify-content: center;

  width: 100%;
  //   border-radius: 6px;
  //   padding: 0.25em;
`;

const Input = styled.input`
  border-radius: 6px;
  padding: 10px;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  height: 100%;

  padding: 0.5em 1em;

  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

type ChatProps = {
  chatSocket: WebSocket;
};

export const ChatInput = (props: ChatProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message sent to server: ", message);
    sendMessage(message, props.chatSocket);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => {
            e.preventDefault();
            setMessage(e.target.value);
          }}
          type="text"
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </FormWrapper>
  );
};
