import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-black/10 bg-background px-4 py-2 text-sm text-foreground transition-colors placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/15",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/40",
        className,
      )}
      {...props}
    />
  );
}
