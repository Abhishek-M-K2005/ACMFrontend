import { CircleUserRound } from 'lucide-react';

export default function FloatingLogin() {
  return (
    // Added mix-blend-difference and forced text to white
    <div className="fixed top-6 right-4 md:right-6 z-50 group cursor-pointer mix-blend-difference text-white">
      <div className="flex items-center gap-2 p-2 rounded-full border border-white/40 shadow-lg hover:bg-white/20 transition-all">
        <span className="hidden md:block text-sm font-medium pl-2 max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out">
          Login Portal
        </span>
        <CircleUserRound className="w-6 h-6 shrink-0" />
      </div>
    </div>
  );
}