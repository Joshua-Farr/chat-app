export const sendMessage = (message: string, socket: WebSocket) => {
  socket.send(message);
};
