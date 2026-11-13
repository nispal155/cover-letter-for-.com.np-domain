import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

/**
 * Clean structural container without synthetic scroll-pop overlay animations.
 * Provides immediate, reliable rendering like a professional, human-crafted web application.
 */
export function Reveal({ children, width = "100%" }: RevealProps) {
  return (
    <div style={{ width }} className="w-full">
      {children}
    </div>
  );
}
