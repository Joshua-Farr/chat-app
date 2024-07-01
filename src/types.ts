export interface Message {
  senderUserID?: number;
  messageType: string;
  message: string;
  timeStamp: Date;
}
