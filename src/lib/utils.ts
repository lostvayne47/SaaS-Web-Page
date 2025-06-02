import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleScheduleClick() {
  window.open(
    "https://calendar.app.google/F4rsZEyPV1rkPY798", // ← use YOUR actual booking link
    "_blank",
    "noopener,noreferrer"
  );
}
