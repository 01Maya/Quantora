import type { CSSProperties } from "react";
/** Inline style helper for staggered reveal delays. */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
