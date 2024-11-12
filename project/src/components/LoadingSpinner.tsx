import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-8 w-8 sm:h-12 sm:w-12 text-purple-500 animate-spin" />
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 animate-pulse">
          Cargando...
        </p>
      </div>
    </div>
  );
}