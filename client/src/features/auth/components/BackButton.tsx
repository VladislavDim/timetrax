import { ArrowLeft } from 'lucide-react';

type BackButtonProps = {
  onClick?: () => void;
};

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <div className="mb-6 max-w-md w-full mx-auto">
      <button
        onClick={onClick}
        className="absolute top-6 left-6 p-3 rounded-md transition hover:bg-[#ede9fe] group"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6 text-black transition-colors duration-200 group-hover:text-[#7c3aed]" />
      </button>
    </div>
  );
}
