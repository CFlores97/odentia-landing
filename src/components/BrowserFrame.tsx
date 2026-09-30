import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/landing/Reveal";

export function BrowserFrame({
  children,
  className,
  url = "app.odentiahn.com",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <Reveal
      className={cn(
        "browser-frame min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-frame",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-1 min-w-0 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground ">
          {url}
        </span>
      </div>
      {children}
    </Reveal>
  );
}
