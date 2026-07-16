import { MapPin } from "lucide-react";
import { personalInfo } from "@/data/profile";

export function MapPlaceholder() {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <MapPin className="h-5 w-5" />
        </span>
        <p className="text-sm font-medium text-foreground">{personalInfo.location}</p>
      </div>
    </div>
  );
}
