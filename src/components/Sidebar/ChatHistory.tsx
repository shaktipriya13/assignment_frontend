export const ChatHistory = ({ chats }: { chats: string[] }) => (
  <div>
    <h3 className="text-sm font-semibold mt-4 mb-2">Recent Chats</h3>
    <ul>
      {chats.map((chat, i) => (
        <li key={i} className="text-xs text-gray-700 truncate">
          {chat}
        </li>
      ))}
    </ul>
  </div>
);
