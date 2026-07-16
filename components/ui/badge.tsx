import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "accent" | "amber" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-wide",
        variant === "default" && "border-border bg-surface text-muted",
        variant === "accent" && "border-accent/30 bg-accent/10 text-accent",
        variant === "amber" && "border-amber/30 bg-amber/10 text-amber",
        className,
      )}
      {...props}
    />
  );
}
