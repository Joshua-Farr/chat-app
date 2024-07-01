export const sendMessage = (message: string, socket: WebSocket) => {
  // if (socket) {
  socket.send(message);
  // } else return;
};

export const generateMessageObject = (message: string, user: string) => {
  let time = new Date();
  return {
    userName: user,
    message: message,
    timeStamp: time,
  };
};
