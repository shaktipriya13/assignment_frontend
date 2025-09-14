import { Message } from "../../types/types";
import ChatMessage from "./ChatMessage";

type ChatHistoryProps = {
  messages: Message[];
};

const ChatHistory = ({ messages }: ChatHistoryProps) => (
  <div className="flex-1 overflow-y-auto px-4 py-2">
    {messages.map((msg) => (
      <ChatMessage key={msg.id} message={msg} />
    ))}
  </div>
);

export default ChatHistory;
