import logo from "@/assets/odentia.svg";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <img
        src={logo}
        alt="Odentia"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span
        className={cn(
          "text-xl font-extrabold",
          inverted ? "text-primary-foreground" : "text-primary",
        )}
      >
        Odentia
      </span>
    </span>
  );
}
