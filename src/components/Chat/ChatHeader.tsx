interface ChatHeaderProps {
  title?: string;
  onNewChat: () => void;
}

const ChatHeader = ({ title = "Untitled", onNewChat }: ChatHeaderProps) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span>{title}</span>
        <button className="text-sm text-blue-500">▼</button>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-sm text-gray-500">Share</button>
        <button
          onClick={onNewChat}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          + New Chat
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
