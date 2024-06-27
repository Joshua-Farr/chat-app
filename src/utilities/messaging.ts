export const sendMessage = (message: string, socket: WebSocket) => {
  socket.send(message);
};

export const generateMessageObject = (message: string, user: string) => {
  return {
    userName: user,
    message: message,
    timeStamp: Date.now(),
  };
};
