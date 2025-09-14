export type Role = "user" | "assistant";

export interface Message {
  id: string;
  role: Role;
  text: string;
  createdAt: number;
}

export interface Chat {
  id: string;
  title?: string;
  messages: Message[];
  createdAt: number;
}
