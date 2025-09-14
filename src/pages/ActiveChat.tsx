import React from "react";
import { useParams } from "react-router-dom";
import { useChat } from "../context/ChatContext";
import MessageInput from "../components/MessageInput";

const ActiveChat = () => {
  const { chatId } = useParams();
  const { chats } = useChat();

  if (!chatId) return <div>No chat selected.</div>;

  const messages = chats[chatId] || [];

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <h2>Chat ID: {chatId}</h2>

      <div
        className="messages-container"
        style={{
          marginBottom: 20,
          maxHeight: "60vh",
          overflowY: "auto",
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: 16,
                backgroundColor: msg.sender === "user" ? "#2E7DFF" : "#E5E7EB",
                color: msg.sender === "user" ? "white" : "black",
                maxWidth: "70%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <MessageInput chatId={chatId} />
    </div>
  );
};

export default ActiveChat;
