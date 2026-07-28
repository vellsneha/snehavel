/** Prefix a public/ asset path with the Vite base (needed for GitHub Pages). */
export function withBase(assetPath: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = assetPath.replace(/^\//, "");
  return `${base}${normalized}`;
}
