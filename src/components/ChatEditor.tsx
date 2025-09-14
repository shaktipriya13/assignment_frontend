import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import Send from "@mui/icons-material/Send";
import CardList from "./CardList";

export default function ChatEditor() {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    setText("");
  };

  return (
    <>
      <CardList />
      <Box display="flex" gap={1} p={2} alignItems="center">
        <TextField
          fullWidth
          multiline
          minRows={1}
          maxRows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Write a message..."
        />
        <IconButton onClick={handleSend} color="primary">
          <Send />
        </IconButton>
      </Box>
    </>
  );
}
