interface PromptCardProps {
  message: string;
  onClick: (msg: string) => void;
}

export const PromptCard = ({ message, onClick }: PromptCardProps) => (
  <div
    className="p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100 transition"
    onClick={() => onClick(message)}
  >
    <p>{message}</p>
  </div>
);
