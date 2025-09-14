import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Message = {
  sender: "user" | "assistant";
  text: string;
};

type Chats = {
  [chatId: string]: Message[];
};

type ChatContextType = {
  chats: Chats;
  addMessage: (chatId: string, message: Message) => void;
  createChat: (initialMessage: string) => string;
};

const CHAT_STORAGE_KEY = "myapp_chats";

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within a ChatProvider");
  return context;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chats, setChats] = useState<Chats>(() => {
    const saved = localStorage.getItem(CHAT_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chats));
  }, [chats]);

  const createChat = (initialMessage: string) => {
    const chatId = Date.now().toString();
    setChats((prev) => ({
      ...prev,
      [chatId]: [{ sender: "user", text: initialMessage }],
    }));
    return chatId;
  };

  const addMessage = (chatId: string, message: Message) => {
    setChats((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), message],
    }));
  };

  return (
    <ChatContext.Provider value={{ chats, addMessage, createChat }}>
      {children}
    </ChatContext.Provider>
  );
};
