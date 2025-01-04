import { Loader2 } from "lucide-react";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="p-6 bg-transparent flex flex-col items-center">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-800" />
        <p className="mt-2 text-sm text-gray-800">Loading AI Tutor...</p>
      </div>
    </div>
  );
}
