import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || motion.matches || !("IntersectionObserver" in window)) return;

    // Keep SSR/no-JS content visible, and never hide content already on screen.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.dataset["reveal"] = "pending";
    const show = () => {
      element.dataset["reveal"] = "visible";
      observer.disconnect();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) show();
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );
    observer.observe(element);
    const onMotionChange = () => {
      if (motion.matches) show();
    };
    motion.addEventListener("change", onMotionChange);
    element.addEventListener("focusin", show);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", onMotionChange);
      element.removeEventListener("focusin", show);
      delete element.dataset["reveal"];
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal min-w-0", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
