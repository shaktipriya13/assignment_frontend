import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography, Paper } from "@mui/material";
import { AttachFile, CameraAlt, Send } from "@mui/icons-material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useChat } from "../context/ChatContext";

const MAX_CHARS = 1000;

interface MessageInputProps {
  chatId?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ chatId }) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { addMessage, createChat } = useChat();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value.slice(0, MAX_CHARS));
  };

  const isSendDisabled = message.trim().length === 0;

  const sendAssistantReply = (chatId: string) => {
    setTimeout(() => {
      addMessage(chatId, {
        sender: "assistant",
        text: "This is a placeholder reply from the assistant.",
      });
    }, 1000);
  };

  const handleSendMessage = () => {
    if (isSendDisabled) return;

    if (chatId) {
      // Existing chat: add user message and assistant reply
      addMessage(chatId, { sender: "user", text: message });
      sendAssistantReply(chatId);
      setMessage("");
    } else {
      // New chat: create chat and navigate
      const newChatId = createChat(message);
      sendAssistantReply(newChatId);
      setMessage("");
      navigate(`/chat/${newChatId}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box
      sx={{
        borderTop: "1px solid #E5E7EB",
        px: 2,
        py: 3,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          width: "100%",
          backgroundColor: "#F3F4F6",
          borderRadius: "16px",
          p: 2,
          boxShadow: "inset 0 0 0 1px #E5E7EB",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            px: 2,
            py: 1,
          }}
        >
          <TextareaAutosize
            minRows={1}
            maxRows={8}
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask me a question..."
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              resize: "none",
              fontSize: "1rem",
              lineHeight: "1.5",
              fontFamily: "inherit",
              backgroundColor: "transparent",
            }}
          />
        </Paper>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1.5,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              size="small"
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
                width: 36,
                height: 36,
              }}
            >
              <AttachFile fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
                width: 36,
                height: 36,
              }}
            >
              <CameraAlt fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="caption" color="text.secondary">
              {message.length}/{MAX_CHARS}
            </Typography>
            <IconButton
              disabled={isSendDisabled}
              sx={{
                backgroundColor: isSendDisabled ? "#E5E7EB" : "#2E7DFF",
                color: "#fff",
                width: 36,
                height: 36,
                "&:hover": {
                  backgroundColor: isSendDisabled ? "#E5E7EB" : "#1E66E6",
                },
              }}
              onClick={handleSendMessage}
            >
              <Send fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageInput;
