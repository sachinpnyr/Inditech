import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolve a static asset path against the app's base URL.
 * On GitHub Pages the app is served from a sub-path (e.g. "/Inditech/"),
 * so relative image paths like "images/foo.jpg" must be prefixed with
 * import.meta.env.BASE_URL to resolve correctly. Absolute URLs are returned as-is.
 */
export function asset(path: string): string {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.replace(/^\/+/, "");
  return `${base}${clean}`;
}
