export const sendMessage = (message: string, socket: WebSocket) => {
  // if (socket) {
  socket.send(message);
  // } else return;
};

export const generateMessageObject = (message: string, user: string) => {
  return {
    userName: user,
    message: message,
    timeStamp: Date.now(),
  };
};
