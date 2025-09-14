import { Box, Paper, Typography } from "@mui/material";
import { Message } from "../../types/types";

type MessageBubbleProps = {
  message: Message;
};

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === "user";

  return (
    <Box
      display="flex"
      justifyContent={isUser ? "flex-end" : "flex-start"}
      my={1}
    >
      <Paper
        elevation={0}
        sx={{
          p: 1.5,
          maxWidth: "75%",
          borderRadius: 2,
          bgcolor: isUser ? "primary.main" : "grey.100",
          color: isUser ? "primary.contrastText" : "text.primary",
        }}
      >
        <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
          {message.text}
        </Typography>
        <Typography
          variant="caption"
          sx={{ display: "block", textAlign: "right", opacity: 0.6 }}
        >
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
      </Paper>
    </Box>
  );
};

export default MessageBubble;
