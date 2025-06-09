import { ArrowLeft } from 'lucide-react';

type BackButtonProps = {
  onClick?: () => void;
};

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-6 left-6 p-3 hover:bg-gray-100 rounded-md transition"
      aria-label="Go back"
    >
      <ArrowLeft className="w-6 h-6 text-black" />
    </button>
  );
}
