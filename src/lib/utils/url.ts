const configuredBase = import.meta.env.BASE_URL || "/";
const base = configuredBase === "/" ? "" : configuredBase.replace(/\/$/, "");

export function withBase(url: string): string;
export function withBase(url?: string): string | undefined;
export function withBase(url?: string): string | undefined {
  if (!url || !url.startsWith("/")) return url;
  if (!base || url === base || url.startsWith(`${base}/`)) return url;
  return url === "/" ? `${base}/` : `${base}${url}`;
}
