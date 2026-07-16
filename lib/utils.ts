import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const [year, month] = dateString.split("-");
  const date = new Date(Number(year), month ? Number(month) - 1 : 0);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    ...(month ? {} : {}),
  });
}

export function formatDateRange(start: string, end: string | "Present"): string {
  const startLabel = formatDate(start);
  const endLabel = end === "Present" ? "Present" : formatDate(end);
  return `${startLabel} — ${endLabel}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
