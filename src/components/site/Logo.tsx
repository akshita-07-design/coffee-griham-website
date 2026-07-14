import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ember text-white shadow-[0_6px_18px_-6px_rgba(217,119,6,0.6)]">
        <Coffee className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <span
        className={cn(
          "font-display text-lg font-semibold tracking-tight",
          onDark ? "text-white" : "text-ink",
        )}
      >
        Coffee <span className="text-ember">Griham</span>
      </span>
    </div>
  );
}
