import { Globe, MessageCircle } from 'lucide-react';

export function AuthFooter() {
  return (
    <div className="mt-8 flex justify-center gap-8 text-sm text-orange-600">
      <button className="flex items-center gap-1 transition-all duration-200 text-orange-600 hover:text-orange-500 group">
        <Globe className="w-4 h-4 transition-transform duration-200 group-hover:scale-130" />
        <span className="transition-all">English</span>
      </button>
      <button className="flex items-center gap-1 transition-all duration-200 text-orange-600 hover:text-orange-500 group">
        <MessageCircle className="w-4 h-4 transition-transform duration-200 group-hover:scale-130" />
        <span className="transition-all">Support</span>
      </button>
    </div>
  );
}