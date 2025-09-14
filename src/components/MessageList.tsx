import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import MessageBubble from "./Chat/MessageBubble";
import { Message } from "../types/types";

export default function MessageList({ messages }: { messages: Message[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <Box ref={ref} maxHeight="60vh" overflow="auto" px={2} py={1}>
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} />
      ))}
    </Box>
  );
}
