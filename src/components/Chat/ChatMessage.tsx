// interface ChatMessageProps {
//   sender: "user" | "bot";
//   content: string;
// }

// export const ChatMessage = ({ sender, content }: ChatMessageProps) => (
//   <div
//     className={`chat-message ${sender === "user" ? "text-right" : "text-left"}`}
//   >
//     <p className="bg-gray-200 p-3 rounded">{content}</p>
//   </div>
// // );
// import React from "react";
// import { Message } from "../../types/typess";

// interface ChatMessageProps {
//   message: Message;
// }

// const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
//   const isUser = message.role === "user";

//   return (
//     <div className={`p-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
//       <div
//         className={`rounded-lg p-3 max-w-xl ${
//           isUser ? "bg-blue-100" : "bg-gray-100"
//         }`}
//       >
//         <p className="text-sm whitespace-pre-wrap">{message.text}</p>
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;
import { Message } from "../../types/typess";

type ChatMessageProps = {
  message: Message;
};

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={`p-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-lg p-3 max-w-xl ${
          isUser ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
